import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Navbar from './Components/Navbar.jsx'
import CartList from './Components/CartList.jsx'
import About from './Components/About.jsx'
import CardView from './Components/CardView.jsx'
const Router =createBrowserRouter([{
  path:'/',
  element:<App/>,
  children:[{
    path:'/',
    element:<CartList/>,
  },
  {
    path:'/home',
    element:<CartList/>,
  },
 
  {
    path:'/about',
    element:<About/>,
  },
  {
    path:'/card/:id',
    element:<CardView/>,
  },

  ]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   {/* <Router><App /></Router> */}
   <RouterProvider router={Router} />
  </StrictMode>,
)
