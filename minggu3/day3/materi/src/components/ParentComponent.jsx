import { useState } from "react";
import UnoptimizedChild from "./UnoptimizedChild";
import { OptimizedChild } from "./OptimizedChild";

export default function ParentComponent() {
    const [parentCount, setParentCount] = useState(0);
    const [otherState, setOtherState] = useState(0)

    return (
        <>
            <div>
                <h2>Optimasi Dengan React.memo</h2>
                <p>parent count: {parentCount}</p>
                <p>other state: {otherState}</p>

                <button onClick={() => setParentCount(prev => prev + 1)}>tambah parent count</button>
                <button onClick={() => setOtherState(prev => prev + 1)}>tambah other state</button>

                <hr />
                
                <UnoptimizedChild count={parentCount} />
                <hr />
                <OptimizedChild count={parentCount} />
            </div>
        </>
    )
}