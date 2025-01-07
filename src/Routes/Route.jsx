import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import Header from "../Pages/Header/Header";
import NavigationBar from "../Pages/NavigationBar/NavigationBar";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import NewsCardDetails from "../Pages/Home/NewsCardDetails";
import PrivateRoute from "./PrivateRoute";




const router = createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        children:[
            {
            path:"/",
            element:<Home></Home>,
            loader : ()=>fetch('/news.json')
            },
            {
                path: "/news/:id",
                element: <PrivateRoute>
                    <NewsCardDetails></NewsCardDetails>
                </PrivateRoute>
            },
            
            {
                path:"/header",
                element:<Header></Header>
            },
            {
                path:"/navigation",
                element:<NavigationBar></NavigationBar>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/registration",
                element:<Registration></Registration>
            }
        ]
    }
])
export default router;