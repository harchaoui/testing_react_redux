// a reducer is a function that takes in an action
// and send a state based on that action
// i.e (get leads, add leads, delete leads ...etc)
// we define leads with something called types

import { GET_LEADS, DELETE_LEAD, INFO_LEAD, GET_LEADS_LIB } from '../actions/types.js'

// create the initial state 
const initialState = {
    leads : [],
    // // lots: [],
    // leadinfo :[],

}
export default function (state = initialState, action) {
    // switch over action
    switch (action.type) {
        // from actions/leads.js 
        // we send the type GET_LEADS
        // with patyload 
        case GET_LEADS:
            // return a state 
            return {
                // include everything exist on the initialState 
                // with ... spread operator
                ...state,

                // leads from action/leads.js
                leads: action.payload
            };

        // DELETE LEAD
        case DELETE_LEAD:
            return {
                ...state,
                leads: state.leads.filter(
                    lead => lead.id !== action.payload
                )
            }

        //Get selected LEAD INFO
        case INFO_LEAD:
            console.log(action.payload)
            return {
                ...state,

                // return a lead based on it id.
                leadinfo: state.leads.filter(lead => lead.id === action.payload),
            }

        // default return
        default:
            return state;

    }
}