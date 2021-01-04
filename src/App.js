import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person';
const app = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      {name: 'Karl1', age: 25},
      {name: 'John1', age: 19},
      {name: 'Kate1', age: 35},
      {name: 'Jane1', age: 70},
    ]
  });
  const [otherState, setState2] = useState({id: '33--02'});
  console.log(personsState);
  console.log(otherState);

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        {name: 'Iurii', age: 40},
        {name: 'Stepan', age: 37},
        {name: 'Kate1', age: 35},
        {name: 'Jane1', age: 70},
      ]
    });
  };
return (
  <div className="App">
    <h1>Hi, I'm a new React app</h1>
    <p>This is really working!</p>
    <button onClick={switchNameHandler}>Switch names</button>
    <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
    <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
    <Person name={personsState.persons[2].name} age={personsState.persons[2].age}> My hoobies: Racing </Person>
    <Person name={personsState.persons[3].name} age={personsState.persons[3].age}/>
    </div>
  );
}
export default app;


