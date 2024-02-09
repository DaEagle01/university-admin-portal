import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { adminRoutes } from "./admin.routes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/admin",
        element: <App />,
        children: adminRoutes
    },
    {
        path: "/login",
        element: <h1>This is login page</h1>
    },
    {
        path: "/register",
        element: <h1>This is register page</h1>
    }
]);

export default router;