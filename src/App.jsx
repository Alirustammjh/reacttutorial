// import { useState } from 'react'
import './App.css'
import {useFormStatus} from "react-dom";
// import Header from './header.jsx'
// import Singlrexport,{Firstmultiexport,Secondmultiexport} from "./multicomponent.jsx";
// import Counter,{Changefruite} from "./usestate.jsx";
// import ControlledInput from "./ctrlcomponent.jsx";
 import UncontrolledInput from "./unctrlcomponent.jsx";
// import  Checkvaluop from "./checkbox.jsx";
// import  Handleradiodrop from "./radiodropdown.jsx";
// import  Handleloop from "./looping.jsx";
// import  Handlereusecoponent from "./reusecomponet.jsx";
// import Handleuseeffect from "./useeffect.jsx";
// import  Clock from "./clock.jsx";
// import Handleuseeffectprops from './useeffectprops.jsx';
import StudentCard from './inlinecss.jsx';
import ToggleButton from './conditionalinline.jsx';
import {useRef, useState} from "react";
import Handleexternalcss from "./externalstyle.jsx";
import Handlemodulecss from "./modulecss.jsx";
 // import Handlestyledcomponent from "./styledcomponent.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicExample from "./styledcomponent.jsx";
import DarkVariantExample from "./hero.jsx";
import Handleuseref from "./useref.jsx";
import Handleforwardref from "./forwardref.jsx";
import {Form} from "react-bootstrap";
// import MyForm from "./useformstaus.jsx";
import SearchComponent from './unstrans.jsx';
import Handleobjectupdate from "./updateobjectsinstate.jsx";
import Handlearrayupdatestate from "./updatearrayinstate.jsx";
import Handleuseactionstate from "./useactionstate.jsx";
import Handleuseid from "./useidhook.jsx";
import Handlecollegedata from './college.jsx';
import {SubjectContext} from './contextapidata.jsx';
import Handletogglecustomhook from './usetoggle.jsx';



function App() {

 const userInfofunction = (name) => {
     alert(name);
 }

 const forwardRef = useRef(null);
 const updateforwardRef = () => {
     forwardRef.current.value = 1000;
     forwardRef.current.focus();
     forwardRef.current.style.color = "red";
 }

 const handleFormstatussubmit = async () => {
     await new Promise(res => setTimeout(res, 1000));
     console.log("submitted");
 }

 // function CustomerForm(){
 //     const {pending} = useFormStatus();
 //     console.log(pending);
 //
 // }

    const itemList = [
        'Apple',
        'Banana',
        'Cherry',
        'Date',
        'Elderberry',
        'Fig',
        'Grape',
        'Honeydew'
    ];

 function CustomerForm(){
     const {pending} = useFormStatus();
     console.log(pending);
     return (
         <div>
             <input type="text" placeholder='Enter Name' />
             <br/>
             <br/>
             <input type="text" placeholder='Enter Password' />
             <br/>
             <br/>
             <button disabled={pending}>Submit</button>
         </div>
     )
 }

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

const [subject, setSubject ] = useState('');

const [value, toggleValue] = Handletogglecustomhook(true);
const [secvalue, togglesecValue] = Handletogglecustomhook(true);
console.log("Value-----",value);
  return (
    <>
      <div>
          <div>
            <button onClick={toggleValue}>Toggle Heading</button>
            <button onClick={() => toggleValue(true)}>Show Heading</button>
            <button onClick={() => toggleValue(false)}>Hide Heading</button> 
            {
              value? <h3>Use Custom Hook In React Js</h3>: null
            }
          </div>
          <hr/>

         <div>
            <button onClick={togglesecValue}>Toggle Heading Second</button>
            <button onClick={() => togglesecValue(true)}>Show Second Heading</button>
            <button onClick={() => togglesecValue(false)}>Hide Second Heading</button> 
            {
              secvalue? <h3>Use Custom Hook In React Js</h3>: null
            }
          </div>
          <hr/>

          <SubjectContext.Provider value={subject}>
            <select defaultValue={subject} onChange={(event)=> setSubject(event.target.value)}>
                <option value="">Select Subject</option>
                <option value="Math">Math</option>
                <option value="English">English</option>
                <option value="Programming">Programming</option>
                <option value="Mysql">Mysql</option>
            </select>
          <div style={{background:'orange', padding:10}}>
            <h3>ContextApi</h3>
            <Handlecollegedata/>
             <button onClick={(e)=>setSubject('')}>Clear Subject</button>
          </div>
          </SubjectContext.Provider>
          
          <Handleuseid/>
          <Handleuseactionstate/>
          <Handlearrayupdatestate/>
          <Handleobjectupdate/>

          <div className="use-transition">
              <SearchComponent items={itemList}/>
          </div>

          <div>
              <h1>useFormStaus In React 19</h1>
              <form action={handleFormstatussubmit}>

               <CustomerForm/>

              </form>
          </div>

          <BasicExample/>
          <DarkVariantExample/>
          <StudentCard data={studentdetail} />
          <ToggleButton />
          <h1>External Styling Apply Here</h1>
          <Handleexternalcss/>
          <h1>Module Css Apply Here</h1>
          <Handlemodulecss/>
          <h1>useRef Example</h1>
          <Handleuseref/>
          <h1>Uncontrollable Component</h1>
          <UncontrolledInput  userInfofunction={userInfofunction} />
          <p>Forward Ref Example</p>
          <Handleforwardref ref={forwardRef}/>
          <button onClick={updateforwardRef}>Forward Update Input field</button>
          <p>useFormStatus Example</p>
          {/*<MyForm/>*/}
      </div>
    </>
  )
}

export default App
