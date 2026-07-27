import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import CountryPage from "../pages/CountryPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/country/:alpha3Code',
        element: <CountryPage />,

    }
])