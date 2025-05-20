import React, {useState , useEffect} from 'react';

function Handleuseeffect() {
    const [counter, setCounter] = useState(0);
    const [data, setData] = useState(0);


    function callonce() {
        console.log('click one time exp');
    }

    useEffect(() => {
        callonce();
    },[])





    return (
        <div>
            <h1>Without useEffect Example</h1>
            <button onClick={() => setCounter(counter + 1)}>
                Increment {counter}
            </button>
            <button onClick={() => setData(data + 1)}>
                Data Inc {data}
            </button>
        </div>
    );
}

export default Handleuseeffect;
