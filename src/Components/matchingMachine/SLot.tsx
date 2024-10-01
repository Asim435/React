import SLotData from "./SlotData";
import { Emoji } from "./SlotData";
let x: string;
let y: string;
let z: string;

const IfMatched: any = () => {
    return (
        <div className="Matched">
            <h2>EMOJI MATCHED</h2>
            <p> {x} {y} {z} </p>
            <hr />
        </div>
    )
}
const NotMatched: any = () => {
    return (
        <div className="Matched">
            <h2>EMOJI NOT MATCHED </h2>
            <p> {x} {y} {z} </p>
            <hr />
        </div>
    )
}

function Slot(props: Emoji): any {
    x = props.x
    y = props.y
    z = props.z
    if (x === y && y === z) {
        return (
            <IfMatched />
        )
    }
    else {
        return (
            <NotMatched />
        )
    }
};
export default Slot;