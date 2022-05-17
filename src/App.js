import React from 'react';


import Counter from "./components/Counter";
import Form from "./components/Form";
import Users from "./components/Users";
import InputPet from "./components/InputPet";
import Cats from "./components/Cats";
import Dogs from "./components/Dogs";
import css from './App.module.css'


const App = () => {
  return (
    <div>
      <Counter/>
      <Form/>
      <Users/>
      <InputPet/>
      <div className={css.pet} >
          <Cats  />
          <Dogs />
      </div>
    </div>
  );
};

export default App;