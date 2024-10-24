import React, { useReducer, useState } from "react";

const initialState = 0;

function reducer(state, action) {
  console.log(action)
  if (action.type === "INCREMENT") {
    return state + 1;
  } else if (action.type === "DECREMENT") {
    return state - 1;
  } else if (action.type === "RESET") {
    return (state = initialState);
  } else if (action.type === "CUSTOM_VALUE") {
    return state + Number(action.payload);
  }

  // switch (action.type) {
  //   case "INCREMENT":
  //     return state + 1;

  //   case "DECREMENT":
  //     return state - 1;

  //   case "RESET":
  //     return (state = initialState);

  //   default:
  //     return state;
  //     break;
  // }
}

function UseReducer() {
  const [vals, setVals] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1 style={{ margin: "5px" }}>{state}</h1>
      <div>
        <button
          style={{
            backgroundColor: "green",
            padding: "5px",
            margin: "5px",
            color: "white",
          }}
          onClick={() => dispatch({ type: "INCREMENT" })}
        >
          Increment
        </button>{" "}
        <br />
        <button
          style={{
            backgroundColor: "green",
            padding: "5px",
            margin: "5px",
            color: "white",
          }}
          onClick={() => dispatch({ type: "DECREMENT" })}
        >
          Decrement
        </button>
        <br />
        <button
          style={{
            backgroundColor: "green",
            padding: "5px",
            margin: "5px",
            color: "white",
          }}
          onClick={() => dispatch({ type: "RESET" })}
        >
          Reset
        </button>
        <div>
          <input
            type="text"
            style={{ border: "1px solid black" }}
            onChange={(e) => setVals(e.target.value)}
          />{" "}
          <br />
          <button
            style={{
              backgroundColor: "blue",
              color: "white",
              marginTop: "10px",
            }}
            onClick={() => dispatch(
              { type: "CUSTOM_VALUE", 
              payload: vals })}
          >
            Submit value
          </button>
        </div>
      </div>
    </>
  );
}

export default UseReducer;
