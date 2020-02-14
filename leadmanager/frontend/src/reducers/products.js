import { GET_PRODUCTS } from '../actions/types'

const initialState = {
    products: [],
}


export default function (state = initialState, action) {
    // switch over action
    switch (action.type) {


        // GET_CATEGORIES 
        case GET_PRODUCTS:
            console.log("get products reducer called")
            return {
                ...state,
                products: action.payload
                
                // state.lots.filter(
                //     lots => lots.id !== action.payload
                // )
            }



        // default return
        default:
            return state;

    }
}   
    

