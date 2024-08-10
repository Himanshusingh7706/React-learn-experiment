/* eslint-disable react/prop-types */
import { useState } from "react"

const Count = () => {
    const [count, Setcount] = useState(0);
    return (
        <div style={{ marginTop: 10, color: "red", marginLeft: 10, marginRight: 10 }}>
            <Buttons count={count} Setcount={Setcount} />
            {count}
        </div>
    )
}
function Buttons({ count, Setcount }) {
    return (
        <div>
            <button onClick={() => {
                Setcount(count + 1)

            }}>Increase</button>

            <button onClick={() => {
                Setcount(count - 1)

            }}> Decrease</button>
        </div>
    )

}

export default Count