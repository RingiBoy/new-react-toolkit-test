import React from 'react';
import {useSelector} from "react-redux";
import Cat from "./Cat";


const Cats = () => {
    const {cats}= useSelector(state => state.petsFromStore)

    return (
        <div >
            <h1>Коти:</h1>
            {cats.map(cat=><Cat key={cat.id} cat={cat}/>)}
        </div>
    );
};

export default Cats;