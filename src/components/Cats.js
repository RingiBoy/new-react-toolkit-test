import React from 'react';
import {useSelector} from "react-redux";
import Cat from "./Cat";
import css from '../App.module.css'

const Cats = () => {
    const {cats}= useSelector(state => state.petsFromStore)

    return (
        <div className={css.cat}>
            {cats.map(cat=><Cat key={cat.id} cat={cat}/>)}
        </div>
    );
};

export default Cats;