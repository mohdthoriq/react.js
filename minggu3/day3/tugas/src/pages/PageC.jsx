export default function PageC() {
    console.log('Page C');

    return (
        <>
            <div className="bg-slate-800 p-6 rounded-lg shadow">
                <h2 className="text-xl font-semibold">Page C</h2>
                <p className="mt-2 text-slate-400">Third lazy page to demo code splitting.</p>
            </div>
        </>
    )

}