import React from "react"
import ReactDOM from "react"
import { store } from "./store"
import { Provider } from "react-redux"
import Counter from "./Counter"
export default function ReduxExp() {

    return (
        <Provider store={store}>
            <Counter></Counter>
        </Provider>

    );

}