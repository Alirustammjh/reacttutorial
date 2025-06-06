import {useState} from "react";

const Handlearrayupdatestate = () => {

    const [name,setName]=useState([
        {name:'John', age:29},
        {name:'Peter', age:30},
        {name:'Ruben', age:32},
        {name:'Dreak', age:35},

    ])

    return(
        <div>
            <h1>Update Array In States values</h1>
            <input type={name} onChange={(e)=>{e.target.value}}/>
        </div>
    )
}

export default Handlearrayupdatestate;