import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home/Home";
import rootLayouts from "../Layouts/rootLayouts";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: rootLayouts,
        children: [
            {
                index: true,
                Component: Home
            }
        ]
    },
]);