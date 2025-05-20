// import { useState } from 'react'
import './App.css'
import Header from './header.jsx'
import Singlrexport,{Firstmultiexport,Secondmultiexport} from "./multicomponent.jsx";
import Counter,{Changefruite} from "./usestate.jsx";
import ControlledInput from "./ctrlcomponent.jsx";
import UncontrolledInput from "./unctrlcomponent.jsx";
import  Checkvaluop from "./checkbox.jsx";
import  Handleradiodrop from "./radiodropdown.jsx";
import  Handleloop from "./looping.jsx";
import  Handlereusecoponent from "./reusecomponet.jsx";
import Handleuseeffect from "./useeffect.jsx";
import  Clock from "./clock.jsx";
import {useState} from "react";
function App() {
    const [count, setCount] = useState('red')
    const fruits = ['Apple', 'Banana', 'Mango'];
    // let [display, setDisplay] = useState(false);

    const [colorchenge, setColorchenge] = useState('red');



  return (
    <>
      <div>
          <Handleuseeffect/>
          <p>Clock Color Changer</p>
          <select  onChange={(event) => setColorchenge(event.target.value)}>
              <option value={'red'}>Red</option>
              <option value={'green'}>Green</option>
              <option value={'orange'}>Orange</option>
              <option value={'yellow'}>Yellow</option>
              <option value={'blue'}>Blue</option>
          </select>

          <Clock passvalue={colorchenge} />
          <Handlereusecoponent/>
          <Handleloop/>
          <Handleradiodrop/>
          <Checkvaluop/>

      {/*<h1>New</h1>*/}
      {/*    { display? <h1>New</h1>: null}*/}
      {/*   function Displaycomponet({display}) {*/}
      {/*    {if(display) {*/}
      {/*        return  <h1>Dispaly true</h1>;*/}
      {/*       }else{*/}
      {/*          <h1>Display False</h1>*/}
      {/*    }}*/}
      {/*   }*/}

         <button onClick={()=>{setCount(count+1)}}>Counter</button>
          {
              count == 0 ? <h1>Condition 0</h1>
                  :count == 1? <h1>Condition 1</h1>
                  :count == 2? <h1>Condition 2</h1>
                      :count == 3? <h1>Condition 3</h1>
                          :<h1>Other Condition</h1>


          }

          <Header />
          <Secondmultiexport/>
          <Firstmultiexport/>
          <Secondmultiexport/>
          <Singlrexport data={fruits} />
          <Counter/>
          <Changefruite/>
          <ControlledInput/>
          <UncontrolledInput/>
      
      </div>
    </>
  )
}

export default App
