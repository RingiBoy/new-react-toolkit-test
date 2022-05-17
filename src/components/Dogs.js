import React from 'react';
import {useSelector} from "react-redux";
import Dog from "./Dog";
import css from '../App.module.css'

const Dogs = () => {

    const {dogs}= useSelector(state => state.petsFromStore)

    return (
        <div className={css.dog}>
            {dogs.map(dog=><Dog key={dog.id} dog={dog}/>)}
        </div>
    );
};

export default Dogs;