import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
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
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';
import AllArtifacts from './components/AllArtifacts/AllArtifacts.jsx';
import AddArtifacts from './components/AddArtifacts/AddArtifacts.jsx';
import LikedArtifacts from './components/LikedArtifacts/LikedArtifacts.jsx';
import MyArtifacts from './components/MyArtifacts/MyArtifacts.jsx';
import ArtifactDetails from './components/ArtifactDetails/ArtifactDetails.jsx';


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
      },
      {
        path: '/allArtifacts',
        element: <AllArtifacts/>,
        loader: () => fetch('http://localhost:5000/allArtifacts')
      },
      {
        path: '/addArtifacts',
        element: <PrivateRoute><AddArtifacts/></PrivateRoute>
      },
      {
        path: '/LikedArtifacts',
        element: <PrivateRoute><LikedArtifacts/></PrivateRoute>,
      },
      {
        path: '/myArtifacts',
        element: <PrivateRoute><MyArtifacts/></PrivateRoute>
      },
      {
        path: "/allArtifacts/:id",
        element: <PrivateRoute><ArtifactDetails></ArtifactDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/allArtifacts/${params.id}`)
      },
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
