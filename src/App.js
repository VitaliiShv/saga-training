import { useSelector, useDispatch } from "react-redux";
import { increaseCount, decreaseCount } from "./redux/actions/actionCreator";

const App = () => {
  const count = useSelector((store) => store.counter.count);
  // console.log(store);

  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increaseCount());
  };

  const handleDecrease = () => {
    dispatch(decreaseCount());
  };

  return (
    <>
      <button onClick={handleIncrease}>+1</button>
      <button onClick={handleDecrease}>-1</button>
      <h1>{count}</h1>
    </>
  );
};

export default App;
