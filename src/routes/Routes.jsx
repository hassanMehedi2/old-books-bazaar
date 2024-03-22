import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import PostDetails from "../components/PostDetails/PostDetails";
import SellBooks from "../components/SellBooks/SellBooks";
import MyPost from "../components/MyPost/MyPost";
import MyBids from "../components/MyBids/MyBids";


const routes =  createBrowserRouter ([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:
        [
            {
                index:true,
                element: <Home></Home>,
                loader: ()=>fetch('http://localhost:5000/api/v1/sell-posts')
            },
            {
                path:'/login',
                element:<Login></Login>
                
            },
            {
                path:'/register',
                element: <Register></Register>
            },
            {
                path:'/post_details/:id',
                element: <PostDetails></PostDetails>,
            loader: ({params})=>fetch(`http://localhost:5000/api/v1/sell_posts/${params.id}`)
            },
            {
                path:'/sell_books',
                element:<SellBooks></SellBooks>
            },
            {
                path:'/my_posts/:email',
                element: <MyPost></MyPost>,
                loader: ({params})=>fetch(`http://localhost:5000/api/v1/sell-posts?email=${params.email}`)
            },
            {
                path:'/my_bids/:email',
                element: <MyBids></MyBids>,
                loader: ({params})=>fetch(`http://localhost:5000/api/v1/bids?email=${params.email}`)
            },
            
        ]

    }
])

export default routes;