import {useEffect, useState} from "react";

function Clock({passvalue}) {

    const [time, setTime] = useState(0);
    useEffect(() => {
        setInterval( ()=>{
            setTime(new Date().toLocaleTimeString())
        }, 1000 )
    })
   let color = passvalue;

    return (
        <div className="clock" style={{ textAlign: 'center' }} >
            <h1>Digital Clock</h1>
             <h1 style={{ color:color, textAlign: 'center'}}>{time}</h1>
        </div>
    )
}

export default Clock;