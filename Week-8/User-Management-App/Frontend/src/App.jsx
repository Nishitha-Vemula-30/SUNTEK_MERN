import {createBrowserRouter, RouterProvider} from 'react-router'
import RootLayout from './components/RootLayout'
import Home from './components/Home'
import User from './components/User'
import UsersList from './components/UsersList'
import AddUser from './components/AddUser'


function App() {
  const routerObj=createBrowserRouter([
    {
      path:"/",
      element:<RootLayout/>,
      children:[
    {    
      path:"",
      element:<Home/>
    },
     {
      path:"user",
      element:<User/>
    },
     {
      path:"add-user",
      element:<AddUser/>
    },
     {
      path:"users-list",
      element:<UsersList/>
    }
        
      ]
    },
  ])
  return  <RouterProvider router={routerObj}/>     
}

export default App