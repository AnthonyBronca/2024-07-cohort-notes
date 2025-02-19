import { useState } from 'react'
import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/Home'
import AddStudentForm from './components/AddStudentForm'
import StudentDetail from './components/StudentDetail'
import NavBar from './components/NavBar'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/add-student",
    element: <AddStudentForm />
  },
  {
    path: "/students/:name",
    element: <StudentDetail />
  },
  {
    path: "/about",
    element:
    <>
    <NavBar />
    <h1>LOL you thought we had an about page!!</h1>

    </>
  },
])


function App() {



  return <RouterProvider router={router} />
}

export default App
