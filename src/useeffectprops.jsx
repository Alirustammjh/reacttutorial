import React, { useEffect, useState } from 'react';
import Handlecompobase from "./componentbase.jsx";


const Handleuseeffectprops = () => {

    const [counter, setCounter] = useState(0);
    const [datas, setDatas] = useState(0);
    const [display, setDisplay] = useState(true);
    useEffect(() => {
        console.log('Mounting phase only');
    }, []);

    useEffect(() => {
        console.log('Update phase only');
    },[counter]);

    useEffect(() => {
        return()=>{
            console.log('Unmount phase only');
        }
    },[])

    return(
       <div>

           { display ? <Handlecompobase counter={counter} datas={datas} /> : null }



           <button onClick={() => setCounter(counter + 1)}>
               Increment {counter}
           </button>
           <button onClick={() => setDatas(datas + 1)}>
               Data Inc {datas}
           </button>
           <button onClick={() => setDisplay(!display)}>
               DisplayToggle
           </button>

       </div>
   )
}

export default Handleuseeffectprops;