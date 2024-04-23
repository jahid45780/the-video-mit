import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home";
import Room from "../Pages/Room/Room";

   export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },{
          path:'/room/:roomId',
          element:<Room></Room>
        }

      ]
    },
  ]);