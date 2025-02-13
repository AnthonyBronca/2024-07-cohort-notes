import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home'
import Spot from './components/Spot/Spot';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/spots",
    element: <Spot />
  }
])


function App() {

  return (
  <RouterProvider router={router} />
  )
}

export default App
