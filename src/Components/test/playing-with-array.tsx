import Button from '@mui/material/Button';
import React, { useState } from 'react'

export default function PlayingWithArray() {
    const [array, setArray] = useState<Array<string>>([]);
    const [text, setText] = useState<string>('');
    return (
        <>
            <input type='text' onChange={(e: any) => {
                setText(e.target.value) //getting text
            }} value={text}></input>

            {/* //remove enter val */}

            <button type='button' onClick={() => {
                setArray([...array, text])
                setText('')

                console.log('btton ckicked')
            }}>Contained</button>

            <p>I Have Following items in my array: </p>
            <ul>

                {array?.map((x: string, index: number) => {
                    return <li>{x}</li>
                })}

            </ul>


        </>
    )
}
