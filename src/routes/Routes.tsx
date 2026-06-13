import { type FC, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Spinner from "../components/spinner";
import { AppRoutesUrl } from "../utility/AppRoutesUrl";
import ProtectedRoute from "../pages/ProtectRoute";

//  LAZY LOADED PAGES
const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));
const PageNotFound = lazy(() => import("../pages/NotFound"));
const Forgetpassword = lazy(() => import("../pages/Forgetpassword"));
const Resetpassword = lazy(() => import("../pages/Resetpassword"));
const AccountVerify = lazy(() => import("../pages/AccountVerify"));

// Dashboard
const Dashboard = lazy(() => import("../pages/userDashboard/Dashboard"));
const Tasks = lazy(() => import("../pages/userDashboard/Tasks"));
const PaymentStatement = lazy(() => import("../pages/userDashboard/PaymentStatement"));
const Setting = lazy(() => import("../pages/userDashboard/Setting"));
const Subscription = lazy(() => import("../pages/userDashboard/Subscription"));
const DashboardLayout = lazy(() => import("../components/DashboardLayout"));

const AppRoutes: FC = () => {
  return (
    <Router>

      <Routes>

        {/* PUBLIC ROUTES */}
        <Route
          path={AppRoutesUrl.Login}
          element={
            <Suspense fallback={<Spinner />}>
              <Login />
            </Suspense>
          }
        />

        <Route
          path={AppRoutesUrl.Register}
          element={
            <Suspense fallback={<Spinner />}>
              <Register />
            </Suspense>
          }
        />

        <Route
          path={AppRoutesUrl.ForgetPassword}
          element={
            <Suspense fallback={<Spinner />}>
              <Forgetpassword />
            </Suspense>
          }
        />

        <Route
          path={AppRoutesUrl.ResetPassword}
          element={
            <Suspense fallback={<Spinner />}>
              <Resetpassword />
            </Suspense>
          }
        />

        <Route
          path={AppRoutesUrl.verifyUser}
          element={
            <Suspense fallback={<Spinner />}>
              <AccountVerify />
            </Suspense>
          }
        />

        {/* PROTECTED ROUTES */}
        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute>
              <Suspense fallback={<Spinner />}>
                <DashboardLayout />
              </Suspense>
            </ProtectedRoute>
          }
        >
          <Route
            index
            element={
              <Suspense fallback={<Spinner />}>
                <Dashboard />
              </Suspense>
            }
          />

          <Route
            path="tasks"
            element={
              <Suspense fallback={<Spinner />}>
                <Tasks />
              </Suspense>
            }
          />

          <Route
            path="settings"
            element={
              <Suspense fallback={<Spinner />}>
                <Setting />
              </Suspense>
            }
          />

          <Route
            path="payment"
            element={
              <Suspense fallback={<Spinner />}>
                <PaymentStatement />
              </Suspense>
            }
          />

          <Route
            path="subscription"
            element={
              <Suspense fallback={<Spinner />}>
                <Subscription />
              </Suspense>
            }
          />
        </Route>

        <Route
          path="*"
          element={
            <Suspense fallback={<Spinner />}>
              <PageNotFound />
            </Suspense>
          }
        />

      </Routes>

    </Router>
  );
};

export default AppRoutes;