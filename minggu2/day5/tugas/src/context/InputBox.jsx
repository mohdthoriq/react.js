export default function InputBox({ onTextChange }) {
    return (
        <>
        <div>
            <input
                className="border rounded-lg p-2 w-1/2 mt-4 mb-4"
                type="text"
                placeholder="type something...."
                onChange={(e) => onTextChange(e.target.value)} />
        </div>
        </>
    )
}