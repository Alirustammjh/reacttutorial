import { useState } from "react";

const Handleobjectupdate = () =>{
    const[name,setName]=useState({
        name: 'John',
        age: 25,
        address: {
            street: 'London',
            city: 'London',
        }
    });
    const updateName = (val) => {
         name.name = val;
        setName({...name});
    }

    const updateAddress = (val) => {
        name.address.street = val;
        setName({...name,address:{...name.address,street:val}});
    }

    return (
        <div>
            <h1>Update state</h1>
            <input onChange={(e) => updateName(e.target.value)}  type="text" />
            <input onChange={(e) => updateAddress(e.target.value)}  type="text" />
            <div>
                <p>{name.name}</p>
                <p>{name.address.street}</p>
            </div>
        </div>
    )
}

export default Handleobjectupdate;