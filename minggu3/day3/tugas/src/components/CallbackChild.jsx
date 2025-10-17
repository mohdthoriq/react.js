import { memo } from "react";

const CallbackChild = memo(function CallbackChild({ label, onAction }) {
    console.log('CallbackChild rendered: ', label);
    return (
        <>
            <div className="mt-2 p-3 border border-slate-700 bg-slate-900/50 rounded-lg flex items-center justify-between">
                <div>
                    <p className="font-medium text-slate-300">{label}</p>
                </div>
                <button onClick={onAction} className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors">Do</button>
            </div>
        </>
    )

})

export default CallbackChild;