import { useState } from 'react'
import './App.css'
import Home from './components/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Spots from './components/Spots/Spots';

// global scope

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/spots",
      element: <Spots />
    },
  ])




function App() {

  return <RouterProvider router={router} />
}

export default App
