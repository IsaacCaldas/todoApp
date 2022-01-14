import React, { Component } from "react";
import axios from 'axios';

import PageHeader from "../template/PageHeader";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {

  constructor(props){

    super(props);

    this.state = {
      description: '',
      list: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

    this.refresh();
  }
  
  refresh(){

    axios.get(`${URL}?sort=-createdAt`).then(resp => this.setState({
      ...this.state,
      description: '',
      list: resp.data
    }));
  }

  handleChange(e){
    this.setState(
      {
        ...this.state, 
        description: e.target.value
      }
    );
  }

  handleAdd(){
    const description = this.state.description;

    axios.post(URL, { 
      description 
    }).then(resp => this.refresh());
  }

  handleDelete(todo){
    
    let del = confirm(`Deseja realmente deletar a tarefa: ${todo.description}?`);

    if (del === true){
      axios.delete(`${URL}/${todo._id}`).then(resp => this.refresh());
    }
   
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
        <TodoList
          list={this.state.list}
          handleDelete={this.handleDelete}
        />
      </div>

    );
  }

}