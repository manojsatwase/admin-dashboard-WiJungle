import { lazy, Suspense, useEffect } from "react";
import { createBrowserRouter, Outlet, useNavigate } from "react-router-dom";
import ProtectedRoute from "./utils/ProtectedRoute";
import Loading from "./components/Loading";

const ErrorPage = lazy(() => import("./pages/ErrorPage"));

// Admin Route
const Dashboard = lazy(()=>import("./pages/dashboard/Dashboard"));


const AppLayout = () => {
  const navigate = useNavigate();
  useEffect(()=>{
    navigate("/admin/dashboard")
  },[navigate]);
  return (
    <>
      <Outlet />
    </>
  );
};

const LazyLoadingComponent = ({ component: LazyComponent }) => {
  return (
    <Suspense fallback={<Loading />}>
      <LazyComponent />
    </Suspense>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <LazyLoadingComponent component={ErrorPage} />,
    children: [
      {
        element: <ProtectedRoute role="admin" />,
        children: [
          {
            path: "/admin/dashboard",
            element: <LazyLoadingComponent component={Dashboard} />,
          },
        ],
      },
    ],
  },
]);