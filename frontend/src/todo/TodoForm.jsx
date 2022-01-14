import React from "react";

export default props => {

  return (

    <div role='form' className="todoForm">
      <div className="col-xs-12 col-sm-9 col-md-10">
        <input type="text" id="description" className="form-control" placeholder="Add a task"/>
      </div>
      <div className="col-xs-12 col-sm-9 col-md-10">
        <button className="btn btn-primary" value="">
          <i className="fa fa-plus"></i>
        </button>
      </div>
    </div>

  );

}