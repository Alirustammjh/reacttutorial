import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0); // Declare a state variable "count"

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}

export function Changefruite(){
    const [fruite, setFRuite] = useState('Apple');
    let halndleFruite = () => {setFRuite('Green Apple')}
    return (
        <button onClick={halndleFruite}>{fruite}</button>
    );
}


export default Counter;