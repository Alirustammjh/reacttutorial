import {useState} from "react";

const Handlearrayupdatestate = () => {

    const [userdetails,setUserdeatils]=useState([
        {name:'John', age:29},
        {name:'Peter', age:30},
        {name:'Ruben', age:32},
        {name:'Dreak', age:35},

    ])

    const updateUserdetails =(age)=> {
        const updated = [...userdetails]; // create a shallow copy
        updated[updated.length - 1].age = age; // update age of the last user
        setUserdeatils(updated); // set the updated array
    }

    return(
        <div>
            <h1>Update Array In States values</h1>
            <input type="text" onChange={(e)=>updateUserdetails(e.target.value)}/>
            <hr/>
            {userdetails.map((userdetails,index) => (
            <p key={index}>{userdetails.age}</p>
            ))}

        </div>
    )
}

export default Handlearrayupdatestate;