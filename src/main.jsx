import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Home from './components/Home/Home.jsx'
import User from './components/User/User.jsx'
import Github1, { githubLoader } from './components/Github1/Github1.jsx'

//useParams and useLoaderData

const router=createBrowserRouter([
  {
    path:'/',
    //element is rendered by path as the root element
    element:<App/>,
    //all the items to be rendered inside component to be added here
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"about",//to be used inside Link tag's to property
        element:<About/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      //taking in dynamic-data via ReactRouter->corresponding to different id's
      {
        path :"user/:userid",
        element :<User/>
      },
      {
        path:"github1",
        element:<Github1/>,
        loader:githubLoader//lazy loading
      }

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
