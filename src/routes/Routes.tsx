import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { lazy, Suspense } from "react";
import LoadingPage from "../pages/LoadingPage";

const CountryPage = lazy(() => import('../pages/CountryPage'))

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/country/:alpha3Code',
        element: (
            <Suspense fallback={<LoadingPage />}>
                <CountryPage />
            </Suspense>
        ),

    }
], { basename: '/rest-countries' })