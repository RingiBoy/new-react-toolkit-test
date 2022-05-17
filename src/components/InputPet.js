import React, {useRef} from 'react';
import {useDispatch} from "react-redux";
import {petActions} from "../redux/slices/pet.slice"


const InputPet = () => {
    const namePet = useRef();
    const dispatch= useDispatch();


    return (
        <div>
            <hr/>
            Cat or Dog?
            <input type="text" ref={namePet}/>

            <button onClick={()=> {
                dispatch(petActions.actions.addCat({name:namePet.current.value}))
                namePet.current.value='';

            }}>add Cat</button>
            <button onClick={()=> {
                dispatch(petActions.actions.addDog({name:namePet.current.value}))
                namePet.current.value='';
            }}>add Dog</button>
        </div>
    );
};

export default InputPet;