import { useContext } from "react";
import {SubjectContext} from './contextapidata.jsx';
import Handlestudentdata from './student.jsx';

const Handleclassdata = () => {
    return(
        <div style={{background:'Red', padding:10}}>
            <h3>Class Api</h3>
            <Handlestudentdata/>
        </div>
    )
}

export default Handleclassdata;