import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { changeDescription, search } from "./todoActions";

import Grid from "../template/Grid";
import IconButton from "../template/IconButton";

class TodoForm extends Component {
  constructor(props) {
    super(props);

    this.keyHandler = this.keyHandler.bind(this);
  }

  keyHandler(e){
    switch(e.key) {

      case 'Enter':
        
        e.shiftKey ? this.props.handleSearch() : this.props.handleAdd();
        break;

      case 'Escape':
        this.props.handleClear();
        break;

      default:
        return false;
    }
  }

  componentWillMount() {

    this.props.search()
  }

  render(){

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
            onClick={this.props.handleAdd}
          />
          <IconButton 
            style='info'
            icon='search'
            onClick={this.props.handleSearch}
          />
          <IconButton 
            style='default'
            icon='close'
            onClick={this.props.handleClear}
          />
        </Grid>
      </div>

    );
  }

}

const mapStateToProps = state => ({description: state.todo.description}); 

const mapDispatchToProps = dispatch => bindActionCreators({changeDescription, search}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps)(TodoForm);