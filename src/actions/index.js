export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_CART = 'REMOVE_CART'

export function addToCart(book){
    return{
        type: ADD_TO_CART,
        payload: book
    }
}
export function removeCart(book){
    return{
        type: REMOVE_CART,
        payload: book
    }
}
