import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AuthenticationPage = lazy(() => import("./Pages/Authentication"));
const HomePage = lazy(() => import("./Pages/Home"));

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Suspense>
                <Routes>
                    <Route index path="/" element={<AuthenticationPage />} />
                    <Route index path="/home" element={<HomePage />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};
