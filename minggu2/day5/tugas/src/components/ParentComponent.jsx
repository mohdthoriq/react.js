import { useState } from "react";
import InputBox from "../context/InputBox";
import DisplayBox from "../context/DisplayBox";

export default function ParentComponent() {
    const [message, setMessage] = useState('')

    return (
        <>
            <div className="border p-4 rounded-lg mb-5">
                <h1>( Tugas 3 )</h1>
                <InputBox onTextChange={setMessage} />
                <DisplayBox text={message} />
            </div>
        </>
    )
}