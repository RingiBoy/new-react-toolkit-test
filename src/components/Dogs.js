import React from 'react';
import {useSelector} from "react-redux";
import Dog from "./Dog";


const Dogs = () => {

    const {dogs}= useSelector(state => state.petsFromStore)

    return (
        <div >
            <h1>Собаки:</h1>
            {dogs.map(dog=><Dog key={dog.id} dog={dog}/>)}
        </div>
    );
};

export default Dogs;