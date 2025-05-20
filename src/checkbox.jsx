import {useState} from "react";

function Checkvaluop() {

   const [skills, setSkills] = useState([]);
   const handleSkills = (event) => {
       if (event.target.checked) {
           setSkills([...skills, event.target.value]);
       }else{
           setSkills(skills.filter((items) => items !== event.target.value));
       }

   }

   return (
       <div>
           <h1>Select Your Skills</h1>
           <input type='checkbox' id='php' value='php' onChange={handleSkills} />
           <label htmlFor='php'>PHP</label>
           <br/>
           <input type='checkbox' id='js' value='js' onChange={handleSkills} />
           <label htmlFor='js'>JS</label>
           <br/>
           <input type='checkbox' id='nodejs' value='nodejs' onChange={handleSkills} />
           <label htmlFor='nodejs'>NODE JS</label>
           <br/>
           <input type='checkbox' id='nextjs' value='nextjs' onChange={handleSkills} />
           <label htmlFor='nextjs'>NEXT JS</label>

         <h1>{skills.toString()}</h1>

       </div>
   )
}

export default Checkvaluop;