// The main place for all of our reducers

import { combineReducers } from 'redux';

import categories from './categories'
import supports from './supports'
import products from './products'
import lots  from './leads'




export default combineReducers({
    // Can be Replaced with (leads)
    lots_r : lots ,
    // lot_id,

    categories_r :categories,
    // cat_id
    supports_r : supports,
    products_r : products,

});