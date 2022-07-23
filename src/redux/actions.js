import * as constants from './constants'
export const loginActionRequest=(user)=>{
    return {
        type:constants.SET_USER_LOGIN,
        user:user
    }
}

export const logoutActionRequest=()=>{
    return{
        type:constants.SET_USER_LOGOUT,
        user:null
    }
}
export const uploadProduct=(product)=>{
    return{
        type:constants.UPLOAD_PRODUCT,
        product:product
    }
}
export const fetchProducts=(products)=>{
    return{
        type:constants.FETCH_PRODUCTS,
        products:products
    }
}
export const addToBasket=(product)=>{
    return{
        type:constants.ADD_TO_BASKET,
        product:product
    }
}
export const fetchBasket=(products)=>{
    return{
        type:constants.FETCH_BASKET,
        products:products
    }
}
export const removeFromBasket=(basket)=>{
    return{
        type:constants.REMOVE_FROM_BASKET,
        basket:basket
    }
}
export const subTotalAction=(total)=>{
    return{
        type:constants.SUB_TOTAL,
        total:total
    }
}
export const payAndOrder=(orders)=>{
    return{
        type:constants.PAY_AND_ORDER,
        orders:orders
    }    
}
export const fetchOrders=(orders)=>{
    return{
        type:constants.FETCH_ORDERS,
        orders:orders
    }
}