// import {useState} from "react";


function Handleloop(){

    // const fruitlist  = ['apple', 'banana','grapes','pineapple', 'watermelon','papaya'];
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
           <ul>
               {userdatalist.map(  (userdetails, index) => (
                  <li key={index}>
                      <strong>Name : </strong>{userdetails.name} <br/>
                      <strong>Email : </strong>{userdetails.email} <br/>
                      <strong>Password : </strong>{userdetails.password} <br/>
                      <strong>Age : </strong>{userdetails.age}

                  </li>
               ))}
           </ul>
            <table className="table" border='1' cellPadding="0">
                <thead>

                 <tr>
                     <th>#</th>
                     <th>Name</th>
                     <th>Email</th>
                     <th>Password</th>
                     <th>Age</th>
                 </tr>
                </thead>

                     <tbody>
                     {userdatalist.map(  (userdetails, index) => (
                        <tr key={index}>
                            <td key="index" >{index+1}</td>
                            <td key={'index'} >{userdetails.name}</td>
                            <td key={'index'} >{userdetails.email}</td>
                            <td key={'index'} >{userdetails.password}</td>
                            <td key={'index'} >{userdetails.age}</td>
                        </tr>
                     ))}
                     </tbody>


            </table>
        </div>
    )
}

export default Handleloop;