import React from "react";
import TodoList from "./TodoList"
import TodoForm from "./TodoForm";
// import { Link } from "react-router-dom";

let todos = [
  {
    id: 0,
    title: "Entretien",
    description: "27 boulevard des Italiens",
    check: false,
  },
  {
    id: 1,
    title: "Carwash",
    description: "Porte de Clignancourt",
    check: true,
  },
]

class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      items: [],
      currentItem: {text:'', key:''},
    }
  }
  handleInput = e => {
    console.log('Hello Input')
  }
  addItem = e => {
    e.preventDefault()
    console.log('Hello World')
  }
  render() {
    return (
      <div className="App">
      <h1>Ho</h1>
        <TodoList 
        addItem={this.addItem} 
        inputElement = {this.inputElement}
        />
      </div>
    )
  }
}

export default Home;
