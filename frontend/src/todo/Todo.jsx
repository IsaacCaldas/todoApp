import React, { Component } from "react";
import PageHeader from "../template/PageHeader";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default class Todo extends Component {

  constructor(props){

    super(props);

    this.state = {
      description: '',
      list: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(){
    console.log(this.state.description);
  }

  handleChange(e){
    this.setState(
      {
        ...this.state, 
        description: e.target.value
      }
    );
  }

  render(){
    return (

      <div>
        <PageHeader 
          title='Todo' 
          small='Register' 
        />
        <TodoForm 
          description={this.state.description}
          handleChange={this.handleChange}
          handleAdd={this.handleAdd}
        />
        <TodoList />
      </div>

    );
  }

}