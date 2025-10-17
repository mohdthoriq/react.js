export default function PageA() {
    console.log('Page A');

    return (
        <>
            <div className="p-6 bg-slate-800 rounded-lg shadow border border-slate-700">
                <h2 className="text-xl font-semibold text-white">Page A</h2>
                <p className="mt-2 text-slate-400">This page was lazy-loaded with React.lazy + Suspense.</p>
            </div>
        </>
    )

}