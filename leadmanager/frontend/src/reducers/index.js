// The main place for all of our reducers

import { combineReducers } from 'redux';

import lots_payload from './lots'
import id_payload from './lots'
import lot_object_value from './lots'
import leads from './leads'


import items from './test'



export default combineReducers({
    // Can be Replaced with (leads)
    // leads: leads,
    leads :leads ,
    // testReducer :  items,
    // lotsReducer : lots_payload,
    // idReducer : id_payload ,
    // lot_object_value
    
    
    
});