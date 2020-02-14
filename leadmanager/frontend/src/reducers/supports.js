import { GET_SUPPORTS } from '../actions/types'

const initialState = {
    supports: [],
}


export default function (state = initialState, action) {
    // switch over action
    switch (action.type) {


        // GET_CATEGORIES 
        case GET_SUPPORTS:
            console.log("get supports reducer called")
            return {
                ...state,
                supports: action.payload
                
                // state.lots.filter(
                //     lots => lots.id !== action.payload
                // )
            }



        // default return
        default:
            return state;

    }
}   
    

