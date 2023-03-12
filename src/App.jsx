
import Home from './pages/Home/home'
import {createBrowserRouter , RouterProvider} from'react-router-dom'
import AddFavs from './components/AddFavs/addFavs'
import Navbar from './components/Navbar/navbar'
import HasFavs from './components/HasFavs/hasFavs'


function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/addfavs",
      element:<AddFavs/>
    },
    {
      path:"/hasfavs",
      element:<HasFavs/>
    }
  ])
 return(
  <>
  <Navbar/>
 <RouterProvider router={router}/>
 </>
  )
}

export default App
