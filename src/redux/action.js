// There can be multiple actions

import { ADD_TO_CART, EMPTY_TO_CART, REMOVE_TO_CART } from "./constant";

export const addTocart = (data) => {
    console.warn("action is called ", data);
    return {
        type: ADD_TO_CART,
        data: data
    };
}

export const removeToCart = (data) => {
    console.warn("action is called ", data);
    return {
        type: REMOVE_TO_CART,
        data: data
    };
}

export const emptyToCart = () => {
    return {
        type: EMPTY_TO_CART,
    };
}