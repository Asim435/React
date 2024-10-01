import React from "react";
import { useState } from "react";

let x: string;

function accessVal(e: any): any {
    x = e.target.value;

}
const Controlled: any = () => {
    const [set, reset]: any = useState("akram");
    const settingVal: any = () => {
        reset(x);
    };
    return (
        <>

            <div>

                <h1>ENTER NAME {set}</h1>
                <input type="text" defaultValue={"000"} onChange={accessVal} />
                <button onClick={settingVal} >clickMe</button>
            </div>

        </>
    )

}
export default Controlled;