import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home/Home";
import rootLayouts from "../Layouts/rootLayouts";
import AdmissionForm from "../Pages/Home/Application/Application";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: rootLayouts,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "/admission",   // ← এখানে রাউটের path দিতে হবে
                Component: AdmissionForm
            }
        ]
    },
]);