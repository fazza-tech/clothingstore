import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import App from './App.jsx'
import ProductList from './components/ProductList.jsx'
import ProductView from './components/ProductView.jsx'

const router = createBrowserRouter([
  {path:'/' ,element:<App/>,
    children:[
      {path:'/',element:<ProductList/>},
      {path:'/productView/:id', element:<ProductView/>}
    ]

  }
  

  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
