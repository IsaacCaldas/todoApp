import React from "react";

export default props => {

  return (

    <header className="page-header">
      <h2>{ props.title } <small>{ props.small }</small></h2>
    </header>

  );
}