import './App.css'
import {Footer} from "./components/footer/Footer.tsx";
import {useState} from "react";

function App() {
    const [counter, setCounter] = useState(0)
    return (
        <>
        <h1>Hello Appp Need to change you</h1>
            <div>
                <span>{counter}</span>
            </div>
            <button onClick={()=>setCounter((prevState) => prevState+1)}>Increment Counter</button>
            <h2>We can trust this app</h2>
            <div
            style={{width:'300px', height:'300px', backgroundColor:'red'}}
            >
                <span>Hello i am span</span>
            </div>
            <Footer/>
        </>

    )
}

export default App
