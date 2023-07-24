import { useReducer } from "react";

const Counter = () => {
  const counterReducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { ...state, count: state.count + 1 };
      case "DECREMENT":
        return { count: state.count - 1, interactions: state.interactions + 1 };
      case "MULTIPLY":
        return { count: state.count * 2, interactions: state.interactions + 1 };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(counterReducer, {
    count: 0,
    interactions: 0,
  });

  return (
    <>
      <p>Counter value: {state.count} </p>
      <p>Interactions value: {state.interactions} </p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        Increment value
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>
        Decrement value
      </button>
      <button onClick={() => dispatch({ type: "MULTIPLY", value: 2 })}>
        Multiply by 2
      </button>
    </>
  );
};

export default Counter;
