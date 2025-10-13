export default function DisplayBox({ text }) {
    return (
        <>
            <div>
                <span><strong>Display box: </strong> {text || 'No text provided'}</span>
            </div>
        </>
    )
}