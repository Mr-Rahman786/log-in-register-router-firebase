import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Components/Home';
import LogIn from './Components/LogIn';
import Register from './Components/Register';
import PrivateRoute from './Routes/PrivateRoute';
import Orders from './Components/Orders';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <PrivateRoute><Home></Home></PrivateRoute>
        },
        {
          path: '/orders',
          element:<PrivateRoute><Orders></Orders></PrivateRoute>
        },
        {
          path: '/login',
          element: <LogIn></LogIn>, 
        },
        {
          path: '/register',
          element:<Register></Register>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
