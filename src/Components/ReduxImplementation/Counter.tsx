import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./CounterSlice";
export interface RootState {
    counter: {
        value: number;
    };
}
const Counter: React.FC = () => {
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch();

    return <>
        <div>
            {count}
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>


        </div>

    </>



}
export default Counter;
