import React, { useState } from 'react'
import Home from './Home'
import Favor from './Favor'
import List from './List'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Desc from './Desc';

function App() {
  const [change, setIdchange] = useState(0)

  return (
    <BrowserRouter>
      <Home />
      <Favor id={change} />
      <Routes>
        <Route path='/' element={<List setIdchange={setIdchange} />} exact />
        <Route path='/des/:id' element={<Desc />} exact />
      </Routes>
    </BrowserRouter>
  )
}

export default App
