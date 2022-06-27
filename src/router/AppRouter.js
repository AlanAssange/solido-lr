import React from "react";
import { useRoutes } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Home } from "../components/Home";

export const AppRouter = () => {
  const routes = useRoutes([
      { path: "/solido-lr", element: <Home/> },  
      { path: "/solido-lr/home", element: <Header/> },
    
   
  ]);

  return routes;
};