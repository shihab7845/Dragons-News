import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import Header from "../Pages/Header/Header";
import NavigationBar from "../Pages/NavigationBar/NavigationBar";
import Home from "../Pages/Home/Home";



const router = createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        children:[
            {
            path:"/",
            element:<Home></Home>
            },
            {
                path:"/header",
                element:<Header></Header>
            },
            {
                path:"/navigation",
                element:<NavigationBar></NavigationBar>
            }
        ]
    }
])
export default router;