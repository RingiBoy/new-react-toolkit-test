import React from 'react';

import css from '../App.module.css'
import {useDispatch} from "react-redux";
import { petActions} from '../redux/slices/pet.slice'

const Cat = ({cat}) => {
    const dispatch = useDispatch();
    return (
        <div className={css.cat}>

            {cat.name}
            <button onClick={()=>dispatch(petActions.actions.delCat({id:cat.id}))}> dell Cat</button>
        </div>
    );
};

export default Cat;