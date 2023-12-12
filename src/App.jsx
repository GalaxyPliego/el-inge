import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// IMPORTACIONES DE PÁGINAS 
import Landing from '@pages/landing/Landing'
import Login from '@pages/authentication/Login'
import Register from '@pages/authentication/Register'
import Categories from '@pages/categories/Categories'

// ----------------------------------------------------------------------



const router = createBrowserRouter([
  {
    name: 'Landing',
    path: '/',
    element: <Landing />,
    errorElement: <div>Error 404. Sorry 7u7 landing</div>,
  },
  {
    name: 'Login',
    path: '/iniciar-sesion',
    element: <Login />,
    errorElement: <div>Error 404. Sorry 7u7 login</div>,
  },
  {
    name: 'Register',
    path: '/registro',
    element: <Register />,
    errorElement: <div>Error 404. Sorry 7u7 register</div>,
  },
  {
    name: 'Categorias',
    path: '/categorias',
    element: <Categories />,
    errorElement: <div>Error 404. Sorry 7u7 categorias</div>,
  }

])
function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App