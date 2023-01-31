// There can be multiple reducers but those reducers should be combined in
// a root reducer inorder to use it in the store

import { combineReducers } from "redux";
import { cartData } from "./reducer";
import { productData } from "./productReducer";

export default combineReducers({
    cartData,
    productData
})