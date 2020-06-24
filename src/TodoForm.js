
import React from "react";
// import { Link } from "react-router-dom";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = { 
        value: {
            title: "",
            description: "",
            check: false,
          },
        newvalue: {
            title: "",
            description: "",
        }
     }
  }

  handleNewTaskName = (name) => {
    this.setState({ value: name.target.value });
  };
  handleNewTaskDescription = (description) => {
    this.setState({ value: description.target.value });
  };

  someFn = () => {
    let newItem = {
        id: 2,
        title: "Restaurant",
        description: "Republique",
        check: true,
      }
    console.log("ON EST LA")
    this.props.callbackFromParent(newItem);
    };

  render() {
    return (
      <div>
            <form onSubmit={this.addItem}>
            <input placeholder="enter task" value={this.state.value.title} onChange={this.handleNewTaskName}></input>
            <input placeholder="enter task" value={this.state.value.description} onChange={this.handleNewTaskDescription}></input>
            <button type="submit" onClick={this.someFn}>add</button>
          </form>
      </div>
    );
  }
}

export default TodoForm;

