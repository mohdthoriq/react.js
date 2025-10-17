export default function PageC() {
    console.log('Page C');

    return (
        <>
            <div className="p-6 rounded shadow">
                <h2 className="text-xl font-semibold">Page C</h2>
                <p className="mt-2 text-gray-700">Third lazy page to demo code splitting.</p>
            </div>
        </>
    )

}