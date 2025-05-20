// import { useState } from 'react'
import './App.css'
// import Header from './header.jsx'
// import Singlrexport,{Firstmultiexport,Secondmultiexport} from "./multicomponent.jsx";
// import Counter,{Changefruite} from "./usestate.jsx";
// import ControlledInput from "./ctrlcomponent.jsx";
// import UncontrolledInput from "./unctrlcomponent.jsx";
// import  Checkvaluop from "./checkbox.jsx";
// import  Handleradiodrop from "./radiodropdown.jsx";
// import  Handleloop from "./looping.jsx";
// import  Handlereusecoponent from "./reusecomponet.jsx";
// import Handleuseeffect from "./useeffect.jsx";
// import  Clock from "./clock.jsx";
// import Handleuseeffectprops from './useeffectprops.jsx';
import StudentCard from './inlinecss.jsx';
import ToggleButton from './conditionalinline.jsx';
import {useState} from "react";
function App() {

 const studentdetail = [
     {
         name:"John Doe",
         age:16,
         grade:"10th",
         avatar:"https://placehold.co/600x400/EEE/31343C"
     },
     {
         name:"John Doe",
         age:16,
         grade:"10th",
         avatar:"https://placehold.co/600x400/EEE/31343C"
     },
     {
         name:"John Doe",
         age:16,
         grade:"10th",
         avatar:"https://placehold.co/600x400/EEE/31343C"
     },
     {
         name:"John Doe",
         age:16,
         grade:"10th",
         avatar:"https://placehold.co/600x400/EEE/31343C"
     },
     {
         name:"John Doe",
         age:16,
         grade:"10th",
         avatar:"https://placehold.co/600x400/EEE/31343C"
     },{
         name:"John Doe",
         age:16,
         grade:"10th",
         avatar:"https://placehold.co/600x400/EEE/31343C"
     },
     {
         name:"John Doe",
         age:16,
         grade:"10th",
         avatar:"https://placehold.co/600x400/EEE/31343C"
     },
     {
         name:"John Doe",
         age:16,
         grade:"10th",
         avatar:"https://placehold.co/600x400/EEE/31343C"
     }
 ]
  return (
    <>
      <div>
          <StudentCard data={studentdetail} />
          <ToggleButton />
      </div>
    </>
  )
}

export default App
