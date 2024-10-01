import React from 'react'
import { useReducer } from 'react'
export const Reducer = () => {
    type Action = { type: 'Increment' } | { type: 'Decrement' };
    type State = number;
    type Reducer = (state: State, action: Action) => State;  //return type
    const reducer: Reducer = (state, action) => {

        if (action.type === "Increment")
            return state + 1;
        else {
            return state - 1;
        }

    }
    const intialState: number = 0;
    const [state, dispatch] = useReducer(reducer, intialState);
    return (<>
        <div>Reducer : {state} </div>
        <input type="button" value="Increment" onClick={() => dispatch({ type: "Increment" })} />
        <input type="button" value="Decrement" onClick={() => dispatch({ type: "Decrement" })} />

    </>

    )
}
