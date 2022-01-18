import React from "react";
import { connect } from 'react-redux';

import Grid from "../template/Grid";
import IconButton from "../template/IconButton";

const TodoForm = props => {

  const keyHandler = 
  (e) => {

    switch(e.key) {

      case 'Enter':
        
        e.shiftKey ? props.handleSearch() : props.handleAdd();
        break;

      case 'Escape':
        props.handleClear();
        break;

      default:
        return false;
    }
  }

  return (

    <div role='form' className="todoForm">

      <Grid className="layoutForm" cols='12 9 10'>
        <input 
          type="text" 
          id="description" 
          className="form-control"
          placeholder="Add a task"
          onChange={props.handleChange}
          onKeyUp={keyHandler}
          value={props.description}
          />
      </Grid>

      <Grid className="layoutForm btn" cols='12 3 2'>
        <IconButton 
          style='primary'
          icon='plus'
          onClick={props.handleAdd}
        />
        <IconButton 
          style='info'
          icon='search'
          onClick={props.handleSearch}
        />
        <IconButton 
          style='default'
          icon='close'
          onClick={props.handleClear}
        />
      </Grid>

    </div>

  );

}

function mapStateToProps(state){
  return {
    description: state.todo.description
  }
}
/*
function mapDispatchToProps(state){
  return {

  }
}*/

export default connect(
  mapStateToProps
  /*mapDispatchToProps*/)(TodoForm);