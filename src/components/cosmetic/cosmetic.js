import React from 'react';
import './cosmetic.css';


const Cosmetic = (props) => {
    const { name, price, id } = props.cosmetic;
    // event handler:
    const addToCart = (id) => {
        console.log('item added', id);
    }

    const addToCartWithParam = () => addToCart(id)
    return (
        <div className='product'>
            <h2>
                buy this: {name}
            </h2>
            <h2>
                only for:${price}
            </h2>
            <h2>
                <small>it has an id:{id}</small>
            </h2>
            <button onClick={addToCartWithParam}>Add to Cart</button>
            {/* Shortcut technique:----
                                      |*/}
            <button onClick={() => addToCart(id)}>Purchase</button>
        </div>
    )
}

export default Cosmetic;