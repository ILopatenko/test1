import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = (props) => {

  const [personsState, setPersons] = useState({
      persons: [
        {name: 'Max', age: 28},
        {name: 'Jane', age: 18},
        {name: 'John', age: 42},
        {name: 'Kate', age: 51}
    ],
  });

const [otherState, setOtherState] = useState('It is a new one state');

console.log(personsState, otherState);

const switchNameHandler = () => {
  
  setPersons({
      persons: [
        {name: 'Maximilian', age: 23},
        {name: 'Jan', age: 23},
        {name: 'Pockemon', age: 50},
        {name: 'Katrine', age: 20}
      ]
    });
};
    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <p>It is really working!</p>
        <button onClick={switchNameHandler}>Switch name</button>
          <Person 
          name={personsState.persons[0].name} 
          age={personsState.persons[0].age}
          />

          <Person 
            name={personsState.persons[1].name} 
            age={personsState.persons[1].age}
          />

          <Person 
          name={personsState.persons[2].name} 
          age={personsState.persons[2].age}
          />

          <Person 
          name={personsState.persons[3].name} 
          age={personsState.persons[3].age}
          /> 

      </div>

    );
  }


export default app;





