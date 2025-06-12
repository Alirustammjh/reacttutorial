import { useContext } from "react";
import {SubjectContext} from './contextapidata.jsx';
import Handleclassdata from './classcontextapi.jsx';


const Handlecollegedata = () => {
    return(
        <div style={{background:'Blue', padding:10}}>
            <h3>College Api</h3>
            <Handleclassdata/>
        </div>
    )
}

export default Handlecollegedata;