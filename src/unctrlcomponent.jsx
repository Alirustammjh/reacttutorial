import { useRef } from "react";

function UncontrolledInput({userInfofunction}) {
    const inputRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Input value: ${inputRef.current.value}`);
    };

    const handleSubmitdom = (event) => {
        event.preventDefault();
        const name = event.target.inputRefname.value;
        const email = event.target.inputRefemail.value;
        console.log(name,email);
    }

    return (
        <div>
            <h1>Form handling using useRef</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" ref={inputRef} />
            <button type="submit">Submit</button>
        </form>


            <h1>Form handling using Dom</h1>
            <form onSubmit={handleSubmitdom}>
                <input type="text" id={"inputRefname"}/>
                <input type="text" id={"inputRefemail"}/>
                <button type="submit">Submit</button>
            </form>
            <h1>Pass function from Parent to child component</h1>
            <button onClick={()=>userInfofunction('Webgarh')}>Click Me</button>

        </div>
    );
}


export default UncontrolledInput;