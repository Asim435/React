// import { Container } from "@mui/material";
// import { blue } from "@mui/material/colors";

import { useState } from "react";
import '../Calculator/Calculator.css'

let inputValue: string = ""


export default function Calculator() {

    const [getNo, setNo] = useState<string | null>("")

    const styling: any = {
        backgroundColor: "orange"

    }

    const calculation: any = (props: string) => {

        inputValue = (eval(props))
        // console.log(result)
        setNo(inputValue.toString())

        // let modifiedString = originalString.slice(0, startIndex) + originalString.slice(endIndex + 1);
    }
    // const clear: any = {}
    return <>
        <h1>Calculator</h1>
        <h2 > {getNo} </h2>

        <div className="Container" >

            <div onClick={() => {
                let backspace: string = inputValue.slice(0, -1)
                console.log(inputValue)
                setNo(backspace)
                inputValue = backspace
            }}>AC</div>

            <div onClick={() => {
                inputValue = ""
                setNo("")
            }

            }>clear</div>
            <div onClick={() => {
                inputValue += "%"
                setNo(inputValue)
            }}>%</div>
            <div onClick={() => {
                inputValue += "/"
                setNo(inputValue)
            }}>/</div>

            <div onClick={() => {

                inputValue += "7"
                setNo(inputValue)

            }} > 7 </div>
            <div onClick={() => {

                inputValue += "8"
                setNo(inputValue)
            }}>  8 </div>
            <div onClick={() => {

                inputValue += "9"
                setNo(inputValue)
            }}>  9 </div>
            <div className="operator" style={styling} onClick={() => {

                inputValue += "*"
                setNo(inputValue)
            }}> * </div>
            <div onClick={() => {

                inputValue += "4"
                setNo(inputValue)
            }}>4</div>
            <div onClick={() => {

                inputValue += "5"
                setNo(inputValue)

            }}>5</div>
            <div onClick={() => {


                inputValue += "6"
                setNo(inputValue)

            }} >6</div>
            <div className="operator" style={styling} onClick={() => {

                inputValue += "-"
                setNo(inputValue)

            }}>-</div>
            <div onClick={() => {


                inputValue += "1"
                setNo(inputValue)

            }}>1</div>
            <div onClick={() => {

                inputValue += "2"
                setNo(inputValue)

            }}>2</div>
            <div onClick={() => {

                inputValue += "3"
                setNo(inputValue)

            }}>3</div>
            <div className="operator" style={styling} onClick={() => {

                inputValue += "+"
                setNo(inputValue)
            }}>+</div>
            <div className="element" onClick={() => {

                inputValue += "0"
                setNo(inputValue)

                // console.log(firstNo)
            }}>0</div>
            <div onClick={() => {

                inputValue += "."
                setNo(inputValue)
                // console.log(firstNo)
            }}>.</div>
            <div className="operator" style={styling} onClick={() => {
                const gettext = getNo
                calculation(gettext)
            }}>=</div>
        </div>
    </>
}