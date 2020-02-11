import { GET_LOTS, GET_SELETED_LOT } from '../actions/types'

const initialState = {
    lots_payload: [],
    id_payload: {},
    lot_object_value: {}
}

// let obj = {
//     "2019-02-28 02:36:20": "5 minutes",
//     "2019-02-28 23:59:59": "Today",
//     "2019-03-01 02:31:20": "+1 Day",
//     "2019-03-02 02:31:20": "+2 Days",
//     "2019-03-03 02:31:20": "+3 Days",
//     "2019-03-07 02:31:20": "+1 Week",
//     "2019-03-14 02:31:20": "+2 Weeks",
//     "2019-03-21 02:31:20": "+3 Weeks",
//     "2019-03-28 02:31:20": "+1 Month",
//     "2019-04-28 02:31:20": "+2 Months",
//     "2019-05-28 02:31:20": ">2 Months"
// }

// let op = Object.entries(obj)
//     .map(([label, value]) => ({ label, value }))




export default function (state = initialState, action) {
    switch (action.type) {
        case "GET_LOTS":
            console.log(action.type)
            // console.log(op)
            return {
                ...state,
                lots_payload:Object.entries(state.lots_payload)
                    .map(([label, value]) => ({ label, value }))
                // lots_payload: action.payload
                // lot_object_value : state.lots_payload.forEach(lot => [{label:lot.id,value:lot.name}])


            }
        case "GET_SELETED_LOT":
            console.log("GET_SELECTED_LOT id", action.payload)

            return {

                state,
                // return a {label:'x', value:'y'} object to the select
                // component





                //return the the id of the selected lot 
                // id_payload: state.lots_payload.find(
                //     lot => lot.id ===action.payload
                //     )


            }
        default:
            return {
                ...state,
            }
    }

}