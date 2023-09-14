import React from "react";
import Result from "./views/Result";
import Test from "./views/Test";

// import componenets
const Main = React.lazy(() => import('./views/Main'))

interface Route {
    path: string;
    exact: boolean;
    name: string;
    element: React.FC; 
  }

const routes:Route[] = [
    { path: '', exact: true, name:'Main', element: Main}, 
    { path: '/test', exact: true, name:'Test', element: Test},
    { path: '/result', exact: true, name:'Result', element: Result}, 
]
export default routes
