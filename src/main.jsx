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
import AllArtifacts from './components/AllArtifacts/AllArtifacts.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>
  },
  {
    path: "/",
    element: <Root></Root>,
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
