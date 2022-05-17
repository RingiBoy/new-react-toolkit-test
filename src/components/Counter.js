import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {actions} from "../redux/slices/counter.slice";


const Counter = () => {

    const {count1, count2} = useSelector(state => state.counterFromStore);
    const dispatch = useDispatch()
    const {reducerIncrement1,reducerDecrement1, reset,reducerIncrement2,reducerDecrement2, reset2}=actions;
    return (
        <div>
            <h1>COUNT#1:{count1}</h1>
            <button onClick={()=>dispatch(reducerIncrement1())}>+ 10</button>
            <button onClick={()=>dispatch(reducerDecrement1())}>- 10</button>
            <button onClick={()=>dispatch(reset())}>reset</button>

            <h1>COUNT#2:{count2}</h1>
            <button onClick={()=>dispatch(reducerIncrement2())}>+ 10</button>
            <button onClick={()=>dispatch(reducerDecrement2())}>- 10</button>
            <button onClick={()=>dispatch(reset2())}>reset2</button>

        </div>
    );
};

export default Counter;



