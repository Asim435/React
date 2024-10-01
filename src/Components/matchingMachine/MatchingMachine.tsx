
import Slot from "./SLot"
import SLotData from "./SlotData"

export default function Matching(): any {
    return <>
        <h1>MATCHING MACHINE <span> GAME GALA </span> </h1>
        {SLotData.map((item, val) => {
            console.log(item, val)
            return (
                <>
                    <Slot
                        x={item.x}
                        y={item.y}
                        z={item.z}
                    />
                </>

            )

        })}
    </>
}