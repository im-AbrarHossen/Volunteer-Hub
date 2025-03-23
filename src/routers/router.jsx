import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/Home";
import Register from "../features/auth/Register";
import AddVolunteerNeedPost from "../pages/private pages/AddVolunteerNeedPost"
import Login from "../features/auth/Login";
import PrivateRouter from "../routers/PrivateRouter"
import AllVolunteerNeedPosts from "../pages/AllVolunteerNeedPosts";
import ErrorPage from "../pages/ErrorPage";
import VolunteerNeedPostDetails from "../pages/private pages/VolunteerNeedPostDetails";
import ManageMyVolunteerNeedPosts from "../pages/private pages/ManageMyVolunteerNeedPosts";
import UpdatePost from "../pages/private pages/UpdatePost";
import CounterView from "../features/redux-features/counter/CounterView";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
    },
    {
        path: "/register",
        element: <Register></Register>,
    },
    {
        path: "/login",
        element: <Login></Login>,
    },
    {
        path: "/posts",
        element: <AllVolunteerNeedPosts></AllVolunteerNeedPosts>,
    },
    {
        path: "/add-volunteer-need-post",
        element: (
            <PrivateRouter>
                <AddVolunteerNeedPost></AddVolunteerNeedPost>
            </PrivateRouter>
        ),
    },
    {
        path: "/manage-my-posts",
        element: (
            <PrivateRouter>
                <ManageMyVolunteerNeedPosts></ManageMyVolunteerNeedPosts>
            </PrivateRouter>
        ),
    },
    {
        path: "/update-post/:id",
        element: (
            <PrivateRouter>
                <UpdatePost></UpdatePost>
            </PrivateRouter>
        ),
        loader: ({ params }) => fetch(`https://volunteer-server-phi.vercel.app/volunteers/${params.id}`),
    },
    {
        path: "/post-details/:id",
        element: (
            <PrivateRouter>
                <VolunteerNeedPostDetails></VolunteerNeedPostDetails>
            </PrivateRouter>
        )
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>,
    },
    {
        path: "/practice",
        element: <CounterView></CounterView>,
    },
]);

export default router;