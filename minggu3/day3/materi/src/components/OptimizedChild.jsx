import { memo } from "react";

export const OptimizedChild = memo(function OptimizedChild({ count })  {
    console.log('OptimizedChild di render');
    return <p>Count (OptimizedChild): {count}</p>
})
