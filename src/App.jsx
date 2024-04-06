import React, { Component } from 'react';
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
// import Button from './components/Button'

// import { Editor } from "react-draft-wysiwyg";
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

{/* <h1>hi! this is math facts!</h1>
    <Button theme="Algebra"/>
    <Button theme="Geometry"/>
    <Button theme="Combinatorics"/>
    <Button theme="Trigonometry"/> */}

function App() {

  const title = 'Mathelper';

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  )
}

export default App;