import 'modules/bootstrap/dist/css/bootstrap.min.css'; 
import 'modules/font-awesome/css/font-awesome.min.css';
import '../styles/app.css';

import React from 'react'
import Menu from '../template/Menu';
import Todo from '../todo/Todo';
import About from '../about/About';

export default props => {

  return (

    <div className="">
      <Menu />
      <Todo />
      <About />
    </div>

  );

}