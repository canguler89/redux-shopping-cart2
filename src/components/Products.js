import React from 'react'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { addToCart } from "../actions"

function Products(props){
  console.log(props.cart)
    return(
    <div>
      <span>Kitap Listesi</span>
      <div style={{display:"flex", float:"right"}}>
      <Link to="/cart">Cart</Link>
      </div>
      {props.bookList.map(book=>(
        <div className="book" key={book.id}>
          <img src={book.image} alt={book.name} />
          <div>
            <p>Author: {book.author}</p>
            <p>Price: &#36; {book.price}</p>
            <button onClick={()=> props.addToCart(book)}>Add to Cart</button>
          </div>
        </div>    
      ))}
    </div>
    )
}


function mapStateToProps(state){
    return{
      bookList: state.bookList,
      cart : state.cart
    }
  }

export default connect(mapStateToProps, { addToCart })(Products)