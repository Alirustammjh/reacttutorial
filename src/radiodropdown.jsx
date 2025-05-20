import {useState} from "react";

function Handleradiodrop(){
    const [gender, setGender] = useState('female');
    const handleGenderChange = (event) => {
          if(event.target.checked){
              setGender(event.target.value);
          }
    }
    const [city, setCity] = useState('delhi');
    return(
        <div>
            <h1>Radio Example</h1>
            <p>Select Your Genser</p> <p>{gender}</p>
            <input type='radio' value='male' name='gender' onClick={handleGenderChange} checked={gender == 'male'} />
            <label htmlFor='mail'>Male</label>
            <input type='radio' value='female' name='gender' onClick={handleGenderChange} checked={gender == 'female'} />
            <label htmlFor='femail'>Female</label>

            <div>

                <p>Drop Down Element Start Here</p>
                <p>I am From {city}</p>
                <select onChange={ (event) => setCity(event.target.value) } defaultValue={'gurugram'}>
                    <option value="noida">Noida</option>
                    <option value="mohali">Mohali</option>
                    <option value="gurugram">Gurugram</option>
                    <option value="delhi">Delhi</option>
                </select>


            </div>





        </div>
    )
}

export default Handleradiodrop;