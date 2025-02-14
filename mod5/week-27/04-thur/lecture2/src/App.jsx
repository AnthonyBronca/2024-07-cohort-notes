import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './components/Home';
import StudentForm from './components/StudentForm';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/add-student",
    element: <StudentForm />
  },
  {
    path: "/students/:studentName",
    element: <h1>Hello from the student details page</h1>
  },
  {
    path: "/about",
    element: <h1>Lol you thought there was an about page</h1>
  },

])




function App() {

  return <RouterProvider router={routes}/>
}

export default App
