import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "./store/counter";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div
        className="card"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
          padding: 8,
          width: 150,
        }}
      >
        <span style={{ fontWeight: 500, fontSize: 20 }}>Count is {count}</span>
        <button onClick={() => dispatch(increment())}>+1</button>
        <button onClick={() => dispatch(decrement())}>-1</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>5</button>
      </div>
    </div>
  );
}

export default App;
