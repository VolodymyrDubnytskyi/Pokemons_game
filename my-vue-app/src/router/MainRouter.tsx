import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../App";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "game-board",
        element: <App/>,
    },
]);