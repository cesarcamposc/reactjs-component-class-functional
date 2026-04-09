//* Tipo de componentes:
//? componentes de clase: 
//* 1. declaración de un componente de clase:
/*
import { Component } from "react";

class MyAppClass extends Component {
  render() {
    return <h1>HELLO, I'm a class component</h1>;
  }
}

export default MyAppClass;

//* 2. exportación de componente de clase:
import { Component } from "react";

export default class MyAppClass1 extends Component {
  render() {
    return <h1>HELLO, I'm a class component</h1>;
  }
}

//? componentes funcionales:
//* 1. declaración de un componente funcional:

function MyAppFunction() {
  return <h1>HELLO, I'm a functional component</h1>;
}

export default MyAppFunction;

//* 2. forma simplificada de componente funcional:
export default function MyAppFunction1() {
  return <h1>HELLO, I'm a functional component</h1>;
}
*/
//* 3. arrow function como componente funcional:

const MyAppFunction2 = () => {
  return <h1>HELLO, I'm a functional component</h1>;
};

export default MyAppFunction2;
