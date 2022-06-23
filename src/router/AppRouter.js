import React from "react";
import { useRoutes } from "react-router-dom";
import { Home } from "../components/Home";
import { HomePage } from "../components/HomePage/HomePage";

export const AppRouter = () => {
  const routes = useRoutes([
      { path: "/solido-lr", element: <Home/> },  
      { path: "/solido-lr/home", element: <HomePage/> },
    
   
  ]);

  return routes;
};