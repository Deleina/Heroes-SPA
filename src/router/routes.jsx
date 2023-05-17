

import { createBrowserRouter } from "react-router-dom";
import { HeroesRoutes } from "../heores/routes/HeroesRoutes";
import { LoginPage } from "../auth/pages/LoginPage";
import { routesHeroesConfig } from "../heores/routes/Routes";


 
// const heroesRoutes = getHeroesRoutes();
 
export const routesConfig = [
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/",
        element: <HeroesRoutes/>,
        children: routesHeroesConfig,
    }
 
]
 
export const getRoutes = () => createBrowserRouter(routesConfig);