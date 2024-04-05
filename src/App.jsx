import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button.jsx'

import React, { Component } from 'react';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

// function Facts(props) {
//   return (
//     <>
//       <h2>These are {props.theme} facts!</h2>
//       <p>{props.fact}</p>
//     </>
//   );
// };

// function Showthemes(props) {
//   return (
//     <>
//       <h2>These are {props.theme} facts!</h2>
//       <p>{props.fact}</p>
//     </>
//   );
// }

function App() {
  return (
    <>
    <h1>hi! this is math facts!</h1>
    <Button theme="Algebra"/>
    <Button theme="Geometry"/>
    <Button theme="Combinatorics"/>
    <Button theme="Trigonometry"/>
    </>
  )
}

export default App;