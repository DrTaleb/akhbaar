import PublicPages from "./publicPages/PublicPages";
import UserPanel from "./userPanel/UserPanel";
import IndexPage from "./publicPages/Body/indexPage/IndexPage";
import SearchPage from "./publicPages/Body/SearchPage/SearchPage";
import ProfilePage from "./publicPages/Body/ProfilePage/ProfilePage";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import SingleNewsPage from "./publicPages/Body/SingleNewsPage/SingleNewsPage";

let mainRoutes = [
    {
        path: "/", element: <PublicPages/>, children: [
            {path: "", element: <IndexPage/>},
            {path: "search", element: <SearchPage/>},
            {path: "profile", element: <ProfilePage/>},
            {path: "category/:label", element: <SearchPage/>},
            {path: "category/:label/:sub", element: <SearchPage/>},
            {path: "news/:id", element: <SingleNewsPage/>}
        ]
    },
    {
        path: "/*", element: <PrivateRoute/>, children: [
            {path: "user-panel", element: <UserPanel/>}

        ]
    },
]

export default mainRoutes