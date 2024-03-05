

import { createBrowserRouter } from "react-router-dom";
import { HeroesRoutes } from "../../public/heores/routes/HeroesRoutes";
import { LoginPage } from "../../src/auth/pages/LoginPage";
//import { routesHeroesConfig } from "..../heores/routes/Routes";
import { routesHeroesConfig } from "../../public/heores/routes/Routes";
import { PrivateRoute } from "../router/PrivateRoute";
import { PublicRoute } from "../router/PublicRoute";

const routePublic = [
    {
        path: "/login",
        element: <PublicRoute />,

    },
]

// const heroesRoutes = getHeroesRoutes();

export const routesConfig = [
    {
        path: "/login",
        element: <PublicRoute> <LoginPage /> </PublicRoute>,
        children: routePublic

    },
    {
        path: "/",
        element: <PrivateRoute > <HeroesRoutes /> </PrivateRoute>,
        children: routesHeroesConfig,
    }

]

export const getRoutes = () => createBrowserRouter(routesConfig);