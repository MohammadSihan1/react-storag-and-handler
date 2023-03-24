import React from 'react';


const Cosmetic= (props) => {
    const {name, price, id} = props.cosmetic;
    return(
        <div>
            <h2>
                buy this: {name}
            </h2>
            <h2>
                only for:${price}
            </h2>
            <h2>
                <small>it has an id:{id}</small>
            </h2>
        </div>
    )
}

export default Cosmetic;