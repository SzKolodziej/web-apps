import React from 'react';
import './App.css';
import Paragraph from "./components/Paragraph";
import Counter from "./components/Counter";

function App() {
  return (
   <>
       <Paragraph content={'Hello World'} customClass={'small'}/>
       <Paragraph content={'Hello World'} />
       <Paragraph content={'Hello World'} customClass={'large'}/>
       <Counter/>
   </>
  )
}

export default App;
