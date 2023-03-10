import {createBrowserRouter} from "react-router-dom";
import AddServices from "../components/AddServices";
import Blog from "../components/Blog";
import Details from "../components/Details";
import Error from "../components/Error";
import Home from "../components/Home";
import Login from "../components/Login";
import MyReviews from "../components/MyReviews";
import Register from "../components/Register";
import Services from "../components/Services";
import Main from "../layout/Main";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                loader: () => fetch('https://task-server-opal.vercel.app/services-limited'),
                element: <Home></Home>
            },
            {
                path: "/services",
                loader: () => fetch('https://task-server-opal.vercel.app/services'),
                element: <Services></Services>
            },
            {
                path: "/services/:id",
                loader: ({params}) => fetch(`https://task-server-opal.vercel.app/services/${params.id}`),
                element: <Details></Details>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/myreviews/:email",
                loader: ({params}) => fetch(`https://task-server-opal.vercel.app/review/${params.email}`),
                element: <MyReviews></MyReviews>
            },
            {
                path: "/addservices",
                element: <AddServices></AddServices>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    },
    {
        path: 'errorpage',
        element: <Error></Error>
    }
]);

export default router;