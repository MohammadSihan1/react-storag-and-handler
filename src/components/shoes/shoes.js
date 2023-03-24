import React from 'react';
import { add, multiply } from '../../utilities/calculate';

const Shoes = () => {
    const first = 13;
    const second = 11;
    const result = multiply(first , second);
    const sum = add(first , second);
    

    return (
        <div>
            <h1>This is Shoes Combo</h1>
            <h3>Result: {result} and more result: {sum}</h3>
        </div>
    )
}
export default Shoes;