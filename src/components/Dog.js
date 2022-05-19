import React from 'react';
import css from "../App.module.css";
import {petActions} from "../redux/slices/pet.slice";
import {useDispatch} from "react-redux";

const Dog = ({dog}) => {
    const dispatch = useDispatch();
    return (
        <div className={css.dog}>

            {dog.name}
            <button onClick={()=>dispatch(petActions.actions.delDog({id:dog.id}))}> dell Dog</button>

        </div>
    );
};

export default Dog;