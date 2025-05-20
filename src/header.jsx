// Import the image
import ReactLogo from './assets/react.svg';
function Header() {
    // const names = ['Alice', 'Bob', 'Charlie', 'Diana'];
    let img_link = 'https://placehold.co/600x400/EEE/31343C';
    function Alertname(){
        const names = ['Alice', 'Bob', 'Charlie', 'Diana'];
        return (
            alert(names[1])
        )
    }
    return (
    <div>
        <button onClick={Alertname}>Get Name</button>
    {/*<h1>{names[0]}</h1>*/}
        <img src={img_link} alt="logo"/>
    <Fruit/>
    <Demo/>
    </div>
    );
}

function Fruit(){

    return(
        // <h2>Test</h2>


    <main>
        <p>Welcome to my website!</p>
    </main>

    );
}

function Demo(){
    return(
        <h2>Demo series</h2>
    );
}

export default Header;