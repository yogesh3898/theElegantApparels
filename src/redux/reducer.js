import * as constants from './constants'

export const initialState={
    basket:[],
    products:[],
    orders:[]
}

const reducer= (state=initialState,action)=>{
    switch(action.type){
        case constants.SET_USER_LOGIN:
            return {
                ...state,
                user:action.user
            }
        case constants.SET_USER_LOGOUT:
            return {
                ...state,
                user:null
            }
        case constants.UPLOAD_PRODUCT:
            return{
                ...state,
                products:[...state?.products,action.product]
            }
        case constants.FETCH_PRODUCTS:
            return{
                ...state,
                products:action?.products
            }
        case constants.ADD_TO_BASKET:
            return{
                ...state,
                basket:[...state.basket,action.product]
            }
        case constants.FETCH_BASKET:
            return{
                ...state,
                basket:action.products
            }
        case constants.REMOVE_FROM_BASKET:
            return{
                ...state,
                basket:[...action.basket]
            }
        case constants.SUB_TOTAL:
            return{
                ...state,
                subTotal:action.total
            }
        case constants.PAY_AND_ORDER:
            return{
                ...state,
                orders:[...action.orders]
            }
        case constants.FETCH_ORDERS:
            return{
                ...state,
                orders:[...action.orders]
            }
        default:
            return state
    }
}
export default reducer