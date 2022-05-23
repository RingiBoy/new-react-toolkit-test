import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import SingleCat from "./SingleCat";
import SingleDog from "./SingleDog";
import {petActions} from "../redux/slices/pet.slice";

const AllPets = () => {
    const {cats, dogs} = useSelector(state=>state.petsFromStore)
const dispatch = useDispatch();

    return (
        <div>
            Получить списки Котов и собак: <button onClick={()=>dispatch(petActions.actions.allPets({cats:[cats], dogs:[dogs]})) }> загрузить</button>
           Коты:
            {cats.map(cat => <SingleCat key={cat.id} cat={cat}/>)}
           Собаки:
            {dogs.map(dog => <SingleDog key={dog.id} dog={dog}/>)}
        </div>
    );
};

export default AllPets;