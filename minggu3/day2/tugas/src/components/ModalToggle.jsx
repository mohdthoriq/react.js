import useToggle from "../hook/useToggle";

const ModalToggle = () => {
    const [isOpen, toggleModal] = useToggle(false);

    return (
        <>
            <div className="p-5 bg-[#FFF0CE] dark:bg-[#144272] rounded-xl shadow-md text-gray-800 dark:text-gray-200 w-64 text-center">
                <h1 className="text-2xl font-bold mb-4">Tugas 1</h1>
                <button
                    onClick={toggleModal}
                    className="bg-[#3396D3] text-white px-4 py-2 rounded hover:bg-blue-600 mb-4"
                >
                    {isOpen ? 'Close Modal' : 'Open Modal'}
                </button>
                {isOpen && (
                    <div className="mt-2 p-3 bg-[#EBCB90] dark:bg-[#0A2647] rounded">
                        Ini adalah konten modal!
                    </div>
                )}
            </div>
        </>
    )

}

export default ModalToggle;