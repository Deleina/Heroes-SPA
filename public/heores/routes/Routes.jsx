import { Navigate, createBrowserRouter } from "react-router-dom";
import { DcPage } from "../pages/DcPage";
import { HeroPage } from "../pages/HeroPage";
import { MarvelPage } from "../pages/MarvelPage";
import { SearchPage } from "../pages/SearchPage";
import { PrivateRoute } from "../../../src/router/PrivateRoute";


export const routesHeroesConfig = [
    {
        path: "dc",
        element: <DcPage/>,
    },
    {
        path: "marvel",
        element: <MarvelPage />,
    },
    {
        path: "/",
        element: <Navigate replace to="/marvel" />,
    },
    {
        path: "marvel/hero/:id",
        element: <HeroPage />,
    },
    {
        path: "dc/hero/:id",
        element: <HeroPage />,
    },
    {
        path: "search",
        element: <SearchPage />,
    },
    {
        path: "/",
        element: <PrivateRoute />,
    },


]

export const getHeroesRoutes = () => createBrowserRouter(routesHeroesConfig);

