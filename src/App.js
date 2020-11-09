import React, { useState } from 'react';
import CardComponent from './CardComponent';
import NavComp from './Navbar';


const App = () => {
    return(
    <>
      <NavComp />
      <CardComponent />
    </>
  );
}
export default App;