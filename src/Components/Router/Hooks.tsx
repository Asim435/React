
import { useState } from "react";
export default function Hooks(): any {

    let [cont, setcont] = useState(new Date().toLocaleString());

    function Call(): any {
        setcont(new Date().toLocaleString());

    }
    return <>
        <h1>{cont}</h1>
        <button onClick={Call}>Click me</button>
    </>

}