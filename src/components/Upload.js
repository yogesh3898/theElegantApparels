import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { uploadProduct } from '../redux/actions'
import '../Sass/Upload.scss'
import {db,storage} from './firebase'
import {connect} from 'react-redux'
function Upload({
    availableProducts,
    uploadProduct
}) {
    const navigate=useNavigate()
    const [progress,setProgress]=useState(0)
    const [localPreviewUrl,setLocalPreviewUrl]=useState('')
    const [uploaded,setUploaded]=useState(false)
    const [idealFor,setIdealFor]=useState('')
    const [category,setCategory]=useState('')
    const [title,setTitle]=useState('')
    const [price,setPrice]=useState('')
    const [file,setFile]=useState(null)
    const [imagePreview,setImagePreview]=useState(false)
    const [previewUrl,setpreviewUrl]=useState('')
    const [products,setProducts]=useState([])
    const [final,setFinal]=useState(false)
    const emptyValues=()=>{
        setCategory('')
        setIdealFor('')
        setPrice('')
        setTitle('')
        setFile(null)
        setpreviewUrl('')
        setLocalPreviewUrl('')
        setFinal(false)
    }
    useEffect(()=>{
        if(!file){
            return
        }
        const fileReader=new FileReader()
        fileReader.onload=()=>{
            setLocalPreviewUrl(fileReader.result)
        }
        fileReader.readAsDataURL(file)
    },[file])
    useEffect(()=>{
        if(final){
            db.collection('collections').doc('theElegantApparels').collection('new').doc('products').set({
                products:availableProducts
            })
            setUploaded(true)
            emptyValues()
        }
    },[final])

    const fileHandler=(event)=>{
        let pickedFile
        if(event.target.files && event.target.files.length===1){
            pickedFile=event.target.files[0]
            setFile(pickedFile)
        }
    }
    const handleSubmit=async(e)=>{
        e.preventDefault()
        confirmPicture()
        if(previewUrl){uploadProduct({
            idealFor:idealFor,
            category:category,
            price:price,
            title:title,
            previewUrl:previewUrl
        })}
        
    }
    const confirmPicture=()=>{
        const uploadImage=storage.ref(`images/${file.name}`).put(file)
        uploadImage.on('state_changed',(snapshot)=>{
            const progress=Math.round((snapshot.bytesTransferred/snapshot.totalBytes)*100)
            setProgress(progress)
        },(error)=>{
            console.log(error.message);
        },()=>{
            storage.ref('images').child(file.name).getDownloadURL().then((url)=>{
                setpreviewUrl(url)
                uploadProduct({
                    idealFor:idealFor,
                    category:category,
                    price:price,
                    title:title,
                    previewUrl:url
                })
                setFinal(true)
            })
        })
    }
    const uploadAgain=()=>{
        window.location.reload()
    }
  return (
    <div className='upload'>
        <div className='upload-container'>
            <h1>Upload Product</h1>
            <form className='form'>
                <div className='form-group'>
                    <label className='form-label'>Ideal for</label>
                    <select required name='type' value={idealFor} onChange={e=>setIdealFor(e.target.value)}>
                        <option>--Select--</option>
                        <option>Men</option>
                        <option>Women</option>
                    </select>
                </div>
                <div className='form-group'>
                    <label className='form-label'>Category</label>
                    <select name='category' value={category} onChange={e=>setCategory(e.target.value)}>      
                        <option>--Select--</option>              
                        <option>T-shirt(Half-sleeve)</option>
                        <option>T-shirt(Full-sleeve)</option>
                        <option>Shirt(Half-sleeve)</option>
                        <option>Shirt(Full-sleeve)</option>
                        <option>Hoodies</option>
                    </select>
                </div>
                <div className='form-group'>
                    <label className='form-label'>Title/Description</label>
                    <input required type='text' name='title' value={title} onChange={(e)=>setTitle(e.target.value)}></input>
                </div>
                <div className='form-group'>
                    <label className='form-label'>Price</label>
                    <input required type='number' name='price' value={price} onChange={e=>setPrice(e.target.value)}></input>
                </div>
                
                <div className='form-group'>
                    <label className='form-label'>Upload picture (.jpeg/.jpg/.png)</label>
                    <input className='btn btn-dark' required type='file' accept='.jpg,.jpeg,.png' name='file' onChange={fileHandler}></input>
                    
                    <div className='confirm-picture btn btn-warning button' onClick={e=>{setImagePreview(true)}}>Preview Image</div>
                </div>
                
                <progress max='100' value={progress}></progress>{progress>0 && uploaded && (<><p>{progress}%</p><span>Successfully uploaded</span></>)}
                <button disabled={progress} onClick={handleSubmit} className='btn btn-primary' type='submit'>Submit</button>
                {progress===100 && <div className='upload-again' onClick={uploadAgain}>Upload a product again? <p>Click here</p></div>}
            </form>
            
        </div>
        {imagePreview && localPreviewUrl &&(
        <div className='image-preview-container'>
            <img src={localPreviewUrl} alt='preview-image'></img>
            
            <button className='btn btn-primary' onClick={e=>{setImagePreview(false)}}>Back</button>
        </div>
        )}
    </div>
  )
}
const mapStateToProps=(state)=>{
    return{
        availableProducts:state.products
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        uploadProduct:(product)=>dispatch(uploadProduct(product))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Upload)