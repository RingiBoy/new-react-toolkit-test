import React from 'react';
import {useSelector} from "react-redux";

const Counter = () => {

    const {count1, count2} = useSelector(state => state.counterReducer);


    return (
        <div>
            <h1>COUNT#1:{count1}</h1>
            <h1>COUNT#2:{count2} </h1>
        </div>
    );
};

export default Counter;