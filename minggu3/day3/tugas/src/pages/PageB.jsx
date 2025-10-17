export default function PageB() {
    console.log('Page B');

    return (
        <>
            <div className="p-6 rounded shadow">
                <h2 className="text-xl font-semibold">Page B</h2>
                <p className="mt-2 text-gray-700">Another lazy page — loads only when navigated to.</p>
            </div>
        </>
    )

}