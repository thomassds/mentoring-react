import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BackOfficeLayout } from "./Layouts/BackOffice";

const AuthenticationPage = lazy(() => import("./Pages/Authentication"));
const HomePage = lazy(() => import("./Pages/Home"));
const OrderPage = lazy(() => import("./Pages/Orders"));
const ProductsPage = lazy(() => import("./Pages/Products"));

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Suspense>
                <Routes>
                    <Route index path="/" element={<AuthenticationPage />} />

                    <Route element={<BackOfficeLayout />}>
                        <Route path="/home" element={<HomePage />} />
                        <Route path="/orders" element={<OrderPage />} />
                        <Route path="/products" element={<ProductsPage />} />
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};
