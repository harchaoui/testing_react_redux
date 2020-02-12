// All of our HTTP Req regarding Leads
import axios from 'axios';
import { GET_LEADS, INFO_LEAD, DELETE_LEAD, GET_LEADS_LIB } from './types'

// GET LEAD Req
// use the dispatch to dispatch the action to the reducer
export const getLeads = () => dispatch => {
    // perform the http req
    let lots_list_action = [
        { 'id': 1, 'name': 'Lot 1', },
        { 'id': 2, 'name': 'Lot 2', },
        { 'id': 3, 'name': 'Lot 3', },
        { 'id': 4, 'name': 'Lot 4', },

    ]
             dispatch({
                // send to the reducer
                type: GET_LEADS,
                payload: lots_list_action
            })

    // axios.get('/api/leads')
    //     .then(res => {
    //         dispatch({
    //             // send to the reducer
    //             type: GET_LEADS,
    //             payload: res.data
    //         })
    //     }).catch(
    //         err => console.log(err)
    //     )
}

// DELETE LEADS 
export const deleteLead = (id) => dispatch => {
    // perform the HTTP query to the backend server
    axios.delete(`/api/leads/${id}/`)
        .then(res => {
            console.log(res.data);
            dispatch({
                type: DELETE_LEAD,
                payload: id
            })
        }).catch(
            err => console.log(err)
        )
}

export const getLeadInfo = (id) => dispatch => {
    // get the info from the server
    axios.get(`api/leads/${id}`)
        .then(res => {
            // console.log(res)
            dispatch({
                type: INFO_LEAD,
                payload: id,
            })
        }
        ).catch(
            err => console.log(err)
        )
}

export const getLeadsLib = () => dispatch => {
    axios
        .get("api/leads")
        .then(res => {
            dispatch({
                type: GET_LEADS_LIB,
                payload: res.data
            })
        })
        .catch(
            err => console.log(err)
        )
}

