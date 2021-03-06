import React from "react";
import IconButton from "../template/IconButton";

import '../styles/TodoList.css'

export default props => {

  const renderRows = () => {

    const list = props.list || [];

    return list.map(todo => (
      <tr key={todo._id}>
        <td className={todo.done ? 'markedAsDone' : 'markedAsPending'}>{todo.description}</td>
        <td>
          <IconButton 
              style='success'
              icon='check'
              hide={todo.done}
              onClick={() => props.handleMarkAsDone(todo)}
          />
          <IconButton 
              style='warning'
              icon='undo'
              hide={!todo.done}
              onClick={() => props.handleMarkAsPending(todo)}
          />
          <IconButton 
              style='danger'
              icon='trash-o'
              hide={!todo.done}
              onClick={() => props.handleDelete(todo)}
          />
        </td>
      </tr>
    ));

  }
  
  return (

    <table className="table">

      <thead>
        <tr>
          <th>Description</th>
          <th className="tableActions">Actions</th>
        </tr>
      </thead>

      <tbody>
        { renderRows() }
      </tbody>

    </table>

  );

}