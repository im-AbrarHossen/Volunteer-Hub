import { useDispatch, useSelector } from "react-redux";
import { decrement, increaseByAmmount, increment, reset } from "./CounterSlice";

const CounterView = () => {
    const count = useSelector((state)=> state.counter.count);
    const dispatch = useDispatch();
    return (
        <div className="flex justify-center items-center flex-col gap-5">
            <h2>count: {count}</h2>
            <button onClick={()=>{dispatch(increment())}} className="btn btn-outline">Increment</button>
            <button onClick={()=>{dispatch(decrement())}} className="btn btn-outline">Decrement</button>
            <button onClick={()=>{dispatch(reset())}} className="btn btn-outline">Reset</button>
            <button onClick={()=>{dispatch(increaseByAmmount(5))}} className="btn btn-outline">IncreaseByFive</button>
        </div>
    );
};

export default CounterView;