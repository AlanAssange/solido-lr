import React from "react";
import { useRoutes } from "react-router-dom";
import { Home } from "../components/Home";
import { HomePage } from "../components/HomePage/HomePage";

export const AppRouter = () => {
  const routes = useRoutes([
      { path: "/", element: <Home/> },  
      { path: "/home", element: <HomePage/> },
    
   
  ]);

  return routes;
};