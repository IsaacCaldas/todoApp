import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { add, changeDescription, search, clear } from "./todoActions";

import Grid from "../template/Grid";
import IconButton from "../template/IconButton";

class TodoForm extends Component {
  constructor(props) {
    super(props);

    this.keyHandler = this.keyHandler.bind(this);
  }

  keyHandler(e){

    const { search, description, add, clear} = this.props;

    switch(e.key) {

      case 'Enter':
        e.shiftKey ? search() : add(description);

      case 'Escape':
        clear();

      default:
        return false;
    }
  }

  componentWillMount() {

    this.props.search()
  }

  render(){

    const { search, description, add} = this.props;

    return (
      <div role='form' className="todoForm">

        <Grid className="layoutForm" cols='12 9 10'>
          <input 
            type="text" 
            id="description" 
            className="form-control"
            placeholder="Add a task"
            onChange={this.props.changeDescription}
            onKeyUp={this.keyHandler}
            value={this.props.description}
            />
        </Grid>

        <Grid className="layoutForm btn" cols='12 3 2'>
          <IconButton 
            style='primary'
            icon='plus'
            onClick={() => add(description)}
          />
          <IconButton 
            style='info'
            icon='search'
            onClick={search}
          />
          <IconButton 
            style='default'
            icon='close'
            onClick={this.props.clear}
          />
        </Grid>
      </div>

    );
  }

}

const mapStateToProps = state => ({description: state.todo.description}); 

const mapDispatchToProps = dispatch => bindActionCreators({ add, changeDescription, search, clear }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps)(TodoForm);