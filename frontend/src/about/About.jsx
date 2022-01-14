import React from "react";
import PageHeader from "../template/PageHeader";

export default props => {

  return (

    <div>
      <PageHeader 
          title='About' 
          small='Us' 
      />
      <h2>Our History</h2>
      <p>Unicus in estoria indicandus tempus passadus, estritamentus corregos carregados...</p>
      <h2>Mission</h2>
      <p>Sin doris sim ganhus, tomus insulinus in veios...</p>
      <h3>Social network</h3>
      <p>
        <ul>
          <li>Whatsapp: +55 (290) 3000-x023</li>
          <li>Instagram: @todoapp</li>
        </ul>
      </p>
    </div>

  );

}
