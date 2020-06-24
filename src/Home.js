import React from "react";
import TodoForm from "./TodoForm";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      todos : [
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
    };
  }

  isDone = (e) => {
    if (e.check === true) return "checked";
    else console.log(e, "false"); return ""
  };

  myCallback = (dataFromChild) => {
    dataFromChild.id = this.state.todos.length
    var newArray = this.state.todos.slice();    
    newArray.push(dataFromChild);   
    this.setState({todos:newArray})
    console.log("lets push", this.state.todos)
  }
  handleChange = (e) => {
    // this.setState({check: !this.state.check})
    console.log('Le lien a été cliqué.', this.state.todos);
  }

  deleteElement = (e) => {
    this.setState({
      todos: this.state.todos.filter(item => item.id !== e.id)
    })
  }

  render() {
    return (
      <div>
        <div>
          {this.state.todos.map((todo) => (
            <div className="todo-element" key={todo.id}>
              <p>{todo.title}</p>
              <p>{todo.description}</p>
              <p></p>
              {/* <input
                type="checkbox"
                onClick={() => this.handleChange(todo)}
              /> */}
              <button onClick={() => this.deleteElement(todo)}>X</button>
            </div>
          ))}
        </div>
        <TodoForm callbackFromParent={this.myCallback}/>
      </div>
    );
  }
}

export default Home;