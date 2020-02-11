import { TEST } from '../actions/types'

const initialState = {
    items: [],
}

export default function(state=initialState, action){
switch (action.type) {
    case "TEST":
        console.log("TEST func reducer is called")
        return{
            ...state,
            items: action.payload
        }

    default:
        return(state)
}
}
