import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React, { Component } from 'react';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Algebra from './Algebra'

function App() {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <Algebra color="red" />
    </div>
  )
}

export default App;