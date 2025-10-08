export default function TodoFilter({ filter, setFilter }) {
    const filters = [ 'All', 'Active', 'Completed' ]

    return (
        <>
            <div className="gap-4 flex justify-center items-center w-full">
                {filters.map(f => (
                    <button 
                        key={f}
                        onClick={() => setFilter(f)}
                        className={filter === f ? "px-3 py-1 text-sm roounded-md bg-blue-500 text-white" : "px-3 py-1 text-sm roounded-md bg-gray-200 text-gray-600 hover:bg-gray-300"}>
                        {f}
                    </button>
                ))}
            </div>
        </>
    )
}