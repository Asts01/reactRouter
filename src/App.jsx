import React from 'react'
// import Navbar from './components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import {lazy,Suspense} from 'react';

const Navbar=lazy(()=>import('../src/components/Navbar/Navbar.jsx'));

const App = () => {
  return (
    <div>
      <Suspense>
        {/* now import this lazy-component */}
        <Navbar/>
      </Suspense>
      {/* to render the components which keep on changing */}
      <Outlet/>
    </div>
  )
}

export default App


