import React from 'react'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { removeCart } from "../actions"

function Cart(props){
    const totalPrice = props.cart.reduce((total,item)=> (total += item.price), 0)

    return(
    <div>
        <div style={{display:"flex", float:"right"}}>
        <Link to="/">Home</Link>
        </div>
        <span>Total: &#36; {totalPrice.toFixed(1)}</span>
    {props.cart.map(book => (
        <div className="book" key={book.id}>
            <img src={book.image} alt={book.name} />
            <div>
            <h4>{book.name}</h4>
            <p>Author: {book.author}</p>
            <p>Price: &#36; {book.price}</p>
            <button>-</button>
            <button onClick={()=> props.removeCart(book)}>Remove from Cart</button>
            <button>+</button>
            </div>
        </div>
    ))}
    </div>
    )
}

function mapStateToProps(state){
    return{
        cart: state.cart
    }
}

export default connect(mapStateToProps, {removeCart})(Cart)