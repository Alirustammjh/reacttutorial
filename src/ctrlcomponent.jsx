import { useState } from "react";

function ControlledInput() {
    const [name, setName] = useState("");

    const handleChange = (event) => {
        setName(event.target.value);
    };

    return (
        <div>
            <input type="text" value={name} onChange={handleChange} />
            <p>Hello, {name}!</p>
        </div>
    );
}


export default ControlledInput;