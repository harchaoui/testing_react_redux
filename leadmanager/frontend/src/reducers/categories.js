import { GET_CATEGORIES } from '../actions/types'

const initialState = {
    categories: [],
}


export default function (state = initialState, action) {
    // switch over action
    switch (action.type) {
        // GET_CATEGORIES 
        case GET_CATEGORIES:
            console.log("get categories called")
            return {
                ...state,
                categories: action.payload
                
                // state.lots.filter(
                //     lots => lots.id !== action.payload
                // )
            }



        // default return
        default:
            return state;

    }
}   
    

