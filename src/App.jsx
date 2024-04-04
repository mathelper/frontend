// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import Facts from './Facts.jsx'

import React, { Component } from 'react';
// import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function Facts(props) {
  return (
    <>
      <h2>These are {props.theme} facts!</h2>
      <p>{props.fact}</p>
    </>
  );
};

function App() {
  return (
    <>
    <h1>hi! this is math facts!</h1>
    <Facts theme="Algebra" fact="I am an Algebra"/>
    <Facts theme="Geometry" fact="I am an Algebra"/>
    <Facts theme="Combinatorics" fact="I am an Algebra"/>
    <Facts theme="Trigonometry" fact="I am an Algebra"/>
    </>
  )
}

export default App;