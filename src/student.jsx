import { useContext } from "react";
// import {SubjectContext} from './contextapidata.jsx';
import Handlesubjectdata from './subject.jsx';

const Handlestudentdata = () => {
    return(
        <div style={{background:'Green', padding:10}}>
            <h3>Student Api</h3>
            <Handlesubjectdata/>
        </div>
    )
}

export default Handlestudentdata;