import { RouterProvider, createBrowserRouter } from "react-router-dom"
import MiniDrawer from "../components"
import Home from "../pages/Home"
import DataGridDemo from "../pages/Otro"





const mainRouter = createBrowserRouter([
    {
        path:'/',
        element:<MiniDrawer/>,
        children:[
            {
                path:'home',
                element:<Home/>,
                children:[
                    {
                        path:'otro',
                        element:<DataGridDemo/>
                    }
                ]
            },
            {
                path:'otro',
                element:<DataGridDemo/>
            },
        ]
        
    },
])
export const MainRouting = () => {
  return (
    <RouterProvider router={mainRouter}/>
  )
}
