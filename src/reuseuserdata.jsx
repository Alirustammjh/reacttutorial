import {useState} from "react";


function Shwereuserdata({userdata}){
    return(
        <div style={{
            border: "1px solid green",
            padding: "10px",
            margin: "10px",
            width: "400px",
            borderRadius: "10px",
        }}>

        <h3 style={{color:"red"}}>Name : {userdata.name}</h3>
            <h3 style={{color:"green"}}>Email : {userdata.email}</h3>
            <h3 style={{color:"orange"}}>Password : {userdata.password}</h3>
            <h3 style={{color:"yellow"}} >Age : {userdata.age}</h3>
        </div>

    )
}


export default Shwereuserdata