import { PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST } from "./constant"
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

function* getProducts() {
    let data = yield fetch('http://localhost:3500/products');
    data = yield data.json();
    console.warn("action is called",data)
    yield put({type: SET_PRODUCT_LIST,data})
}

function* searchProduct(data) {
    let result = yield fetch(`http://localhost:3500/products?q=${data.query}`);
    result = yield result.json();
    console.warn("action is called",result)
    yield put({type: SET_PRODUCT_LIST,result})
}

function* productSaga() {
    yield takeEvery(PRODUCT_LIST, getProducts)
    yield takeEvery(SEARCH_PRODUCT, searchProduct)
}

export default productSaga
