import { useState } from "react";

const Handletogglecustomhook = (defaultValue) =>{
    const[value, setValue] = useState(defaultValue);
    function toogleValue(val){
        if(typeof val != 'boolean'){
           setValue(!value);
        }else{
            setValue(val);
        }
    }
    return[value,toogleValue];
    
}


export default Handletogglecustomhook;