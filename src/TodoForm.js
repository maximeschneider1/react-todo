
import React from "react";
// import { Link } from "react-router-dom";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = { 
        newTitle : "", 
        newDescription: ""
     }
  }

  handleNewTaskName = (name) => {
    this.setState({ newTitle: name.target.value });
  };
  handleNewTaskDescription = (description) => {
    this.setState({ newDescription: description.target.value });
  };

  someFn = () => {
    let newItem = {

        title: this.state.newTitle,
        description: this.state.newDescription,
        check: true,
      }
      this.setState({ newTitle: "" });
      this.setState({ newDescription: "" });
    this.props.callbackFromParent(newItem);
    };

  render() {
    return (
      <div>
            <input placeholder="Tâche" value={this.state.newTitle} onChange={this.handleNewTaskName}></input>
            <input placeholder="Description" value={this.state.newDescription} onChange={this.handleNewTaskDescription}></input>
            <button type="submit" onClick={this.someFn}>add</button>
      </div>
    );
  }
}

export default TodoForm;

