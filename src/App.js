import React, { useState } from 'react';
import CardComponent from './CardComponent';
import NavComp from './Navbar';
import robotsJSON from './robots.json'


const App = () => {
    return(
    <>
      <CardComponent id={robotsJSON[0].id} name={robotsJSON[0].name} email={robotsJSON[0].email} />
      <CardComponent id={robotsJSON[1].id} name={robotsJSON[1].name} email={robotsJSON[1].email} />
      <CardComponent id={robotsJSON[2].id} name={robotsJSON[2].name} email={robotsJSON[2].email} />
      <CardComponent id={robotsJSON[3].id} name={robotsJSON[3].name} email={robotsJSON[3].email} />
      <CardComponent id={robotsJSON[4].id} name={robotsJSON[4].name} email={robotsJSON[4].email} />
    </>
  );
}
export default App;