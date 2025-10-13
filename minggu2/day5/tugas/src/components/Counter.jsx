import React, { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return { quantity: state.quantity + 1 };
    case 'remove':
      return { quantity: Math.max(0, state.quantity - 1) }; // biar gak minus
    case 'reset':
      return { quantity: 0 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { quantity: 0 });

  return (
    <div className="text-center p-6 border rounded-xl flex flex-col items-center justify-center gap-2">
    <h1>( Tugas 4 )</h1>
      <h3 className="text-lg font-bold mb-2">🛒 Cart Items: {state.quantity}</h3>
      <div className="flex justify-center gap-3">
        <button onClick={() => dispatch({ type: 'add' })} className="bg-green-500 px-3 py-2 rounded-lg text-white">Add</button>
        <button onClick={() => dispatch({ type: 'remove' })} className="bg-red-500 px-3 py-2 rounded-lg text-white">Remove</button>
        <button onClick={() => dispatch({ type: 'reset' })} className="bg-gray-500 px-3 py-2 rounded-lg text-white">Reset</button>
      </div>
    </div>
  );
}

export default Counter;
