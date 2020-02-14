// All of our HTTP Req regarding Leads
import axios from 'axios';
import { GET_LEADS, INFO_LEAD, DELETE_LEAD, GET_LEADS_LIB, GET_CATEGORIES, GET_SUPPORTS, GET_PRODUCTS } from './types'

// GET LEAD Req
// use the dispatch to dispatch the action to the reducer
export const getLots = () => dispatch => {
    // perform the http req
    let lots = [
        { 'id': 1, 'label': 'Lot 1', },
        { 'id': 2, 'label': 'Lot 2', },
        { 'id': 3, 'label': 'Lot 3', },
        { 'id': 4, 'label': 'Lot 4', },

    ]
    dispatch({
        // send to the reducer
        type: GET_LEADS,
        payload: lots
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


export const getCategories = (lot_id) => dispatch => {
    let categories = [
        { 'id': 1, 'label': 'category 1 ', 'lot_id': 1, },
        { 'id': 2, 'label': 'category 2 ', 'lot_id': 1, },
        { 'id': 3, 'label': 'category 3 ', 'lot_id': 1, },
        { 'id': 4, 'label': 'category 4 ', 'lot_id': 2, },
        { 'id': 5, 'label': 'category 5 ', 'lot_id': 2, },
        { 'id': 6, 'label': 'category 6 ', 'lot_id': 4, },
        { 'id': 7, 'label': 'category 7 ', 'lot_id': 4, },

    ]

    console.log("get cat action called id=", lot_id)
    let cat = categories.filter(
        categorie => categorie.lot_id == lot_id
    )


    dispatch({
        type: GET_CATEGORIES,
        payload: cat
        // send id,label where id ===lot_id

    })
    // get the info from the server
    // axios.get(`api/leads/${id}`)
    //     .then(res => {
    //         // console.log(res)
    //         dispatch({
    //             type: INFO_LEAD,
    //             payload: id,
    //         })
    //     }
    //     ).catch(
    //         err => console.log(err)
    //     )
}

export const getSupports = (category_id) => dispatch => {
    let supports = [
        { 'id': 1, 'label': 'support 1 ', 'category_id': 1, },
        { 'id': 2, 'label': 'support 1 ', 'category_id': 1, },
        { 'id': 3, 'label': 'support 1 ', 'category_id': 1, },
        { 'id': 4, 'label': 'support 2 ', 'category_id': 2, },
        { 'id': 5, 'label': 'support 3 ', 'category_id': 3, },
        { 'id': 6, 'label': 'support 4 ', 'category_id': 4, },

    ]
    let support_items = supports.filter(
        support => support.category_id == category_id
    )
    dispatch({
        type: GET_SUPPORTS,
        payload: support_items,
    })
    // get the info from the server
    // axios.get(`api/leads/${id}`)
    //     .then(res => {
    //         // console.log(res)
    //         dispatch({
    //             type: INFO_LEAD,
    //             payload: supports,
    //         })
    //     }
    //     ).catch(
    //         err => console.log(err)
    //     )
}

// get products from a support (id = support_id)
export const getProducts = (support_id) => dispatch => {
    let products = [
        { 'id': 1, 'label': 'product 1 ', 'prix_moyen': 12.3,'unit': 'euro', 'indice_bt': 13.9, 'bt_actuel': 1.3, 'details': "to be added soon", 'support_id': 1, },
        { 'id': 2, 'label': 'product 1 ', 'prix_moyen': 12.3,'unit': 'euro', 'indice_bt': 13.9, 'bt_actuel': 1.3, 'details': "to be added soon", 'support_id': 1, },
        { 'id': 3, 'label': 'product 1 ', 'prix_moyen': 12.3,'unit': 'euro', 'indice_bt': 13.9, 'bt_actuel': 1.3, 'details': "to be added soon", 'support_id': 1, },
        { 'id': 4, 'label': 'product 1 ', 'prix_moyen': 12.3,'unit': 'euro', 'indice_bt': 13.9, 'bt_actuel': 1.3, 'details': "to be added soon", 'support_id': 2, },
        { 'id': 5, 'label': 'product 1 ', 'prix_moyen': 12.3,'unit': 'euro', 'indice_bt': 13.9, 'bt_actuel': 1.3, 'details': "to be added soon", 'support_id': 2, },
        { 'id': 6, 'label': 'product 2 ', 'prix_moyen': 12.3,'unit': 'euro', 'indice_bt': 13.9, 'bt_actuel': 1.3, 'details': "to be added soon", 'support_id': 2, },
        { 'id': 7, 'label': 'product 3 ', 'prix_moyen': 12.3,'unit': 'euro', 'indice_bt': 13.9, 'bt_actuel': 1.3, 'details': "to be added soon", 'support_id': 3, },
        { 'id': 8, 'label': 'product 4 ', 'prix_moyen': 12.3,'unit': 'euro', 'indice_bt': 13.9, 'bt_actuel': 1.3, 'details': "to be added soon", 'support_id': 4, },

    ]
    let products_items = products.filter(
        product => product.support_id == support_id
    )

    dispatch({
        type: GET_PRODUCTS,
        payload: products_items,
    })

    // get the info from the server
    // axios.get(`api/leads/${id}`)
    //     .then(res => {
    //         // console.log(res)
    //         dispatch({
    //             type: GET_SUPPORTS,
    //             payload:products ,
    //         })
    //     }
    //     ).catch(
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

