import { useContext } from "react";

import {SubjectContext} from './contextapidata.jsx';


const Handlesubjectdata = () => {


    const subject = useContext(SubjectContext);
    return(
        <div style={{background:'Black', padding:10}}>
            <h3 style={{color:'white'}}> Subject is {subject}</h3>

        </div>
    )
}

export default Handlesubjectdata;