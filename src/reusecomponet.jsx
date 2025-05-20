// import {useState} from "react";
import Shwereuserdata from "./reuseuserdata.jsx";

function Handlereusecoponent(){

    const userdatalist = [

        {
            name:"John",
            email:"john@example.com",
            password:"password@example.com",
            age:28
        },
        {
            name:"David",
            email:"david@example.com",
            password:"david@example.com",
            age:30
        },
        {
            name:"Peter",
            email:"peter@example.com",
            password:"peter@example.com",
            age:35
        },
        {
            name:"Ruben",
            email:"ruben@example.com",
            password:"ruben@example.com",
            age:37
        },

        {
            name:"Thom",
            email:"thom@example.com",
            password:"thom@example.com",
            age:40
        }


    ]

    return(
        <div>
            <h1>Reuse Of Component</h1>
            {userdatalist.map((item,index) => (
                <div key={index} style={{ display: 'flex', justifyContent: 'center' }}>
                <Shwereuserdata userdata={item}/>
                </div>
            ))}
        </div>
    )
}

export default Handlereusecoponent;