import { ADD_TO_CART, EMPTY_TO_CART, REMOVE_TO_CART } from "./constant";

export const cartData = (data = [], action) => {
    // when an action is dispatched, it calls all the reducers
    // and provide the reducer with initial value here it is 'data' and all the payload here it is 'action' from the action
    // inorder to differentiate the call, we use switch
    switch(action.type) {
        case ADD_TO_CART:
            console.warn("ADD TO",action);
            return [action.data, ...data];
        case REMOVE_TO_CART:
            console.warn("Remove to Cart")
            data.length = data.length - 1;
            return [...data];
        case EMPTY_TO_CART:
            console.warn("Remove to Cart")
            data = [];
            return [...data];
        default:
            return [];

    }
}