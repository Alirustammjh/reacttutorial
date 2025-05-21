import {useRef} from "react";

const Handleuseref = () =>{

    const inputRef = useRef(null);
    const focusInput = () =>{
        inputRef.current.focus();
        inputRef.current.style.color="red";
        inputRef.current.placeholder='Enter Your Name Here';
    }
    const handleUseref = () =>{
        if(inputRef.current.style.display !== 'none'){
            inputRef.current.style.display = 'none';
        }else{
            inputRef.current.style.display = 'block';
        }
    }
    const honeref = useRef(null);
    const honehandler = () =>{
          honeref.current.style.color = 'yellow';
    }
    return (
        <div>
            <h1 ref={honeref}>How are you doing today</h1>
            <input ref={inputRef} type="text" />
            <button onClick={focusInput}>Focus Input</button>
            <button onClick={handleUseref}>Toggle Handler</button>
            <button onClick={honehandler}>THtml tag Handler</button>
        </div>
    )
}

export default Handleuseref