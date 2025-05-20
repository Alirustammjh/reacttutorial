function Singlrexport(props){


    const person = {
        name: 'Single export John Doe here',
        age: 30,
        address: {
            street: '123 Main St',
            city: 'Anytown',
            state: 'Anystate'
        }

    };

    return(
        <>
            <ul>
                {props.data.map((fruits, index) => (
                    <li key={index}>{fruits}</li>
                ))}
            </ul>

            {/*<h1>{props.data[0]}</h1>*/}
    <h1>{person.address.street}</h1>
        </>
    )
}

export function Firstmultiexport(){
    return(
        <h1>First Multi export here</h1>
    )
}

export function Secondmultiexport (){
    return(
        <h1>Second Multi export here</h1>
    )
}

export default  Singlrexport
