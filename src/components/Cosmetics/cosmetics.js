import React, { useEffect, useState } from 'react';
import { add } from '../../utilities/calculate';
import Cosmetic from '../cosmetic/cosmetic';

// this is default:
// import add from '../../utilities/calculate';

// three ways to load data in react:
// 1st: component based,
// 2nd: fetching,
// 3rd: mockApi(Fake API).

const Cosmetics = ()=>{
    const [cosmetics, secCosmetics] = useState([]);

    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => secCosmetics(data))
    }, [])
    return(
        <div>
            <h1>Welcome to my cosmetics store</h1>
            {/* <h2>Total: {total}</h2> */}
            {
                cosmetics.map(cosmetic => <Cosmetic key={cosmetic.id}
                cosmetic = {cosmetic}
                ></Cosmetic>)
            }
        </div>
    )
    // const first = 55;
    // const second = 66;
    // const total = add(first, second);
}

export default Cosmetics;