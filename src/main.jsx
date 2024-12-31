import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AuthProvider from './Firebase/AuthProvider.jsx';
import Home from './components/Home/Home.jsx';
import ErrorPage from './ErrorPage.jsx';
import Root from './components/Root/Root.jsx';
import Register from './components/Register/Register.jsx';
import Login from './components/Login/Login.jsx';
import { Tooltip } from 'react-tooltip'
import 'react-toastify/dist/ReactToastify.css';
import 'react-tooltip/dist/react-tooltip.css'
import { ToastContainer } from 'react-toastify';





const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/login',
        element: <Login />
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <Tooltip id="my-tooltip" />
      <ToastContainer pauseOnFocusLoss={false} limit={2} draggable/>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
