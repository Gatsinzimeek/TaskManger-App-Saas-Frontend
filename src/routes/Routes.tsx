import { type FC } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from '../pages/Login';
import { AppRoutesUrl } from '../utility/AppRoutesUrl';
import Register from '../pages/Register';
import PageNotFound from '../pages/NotFound';
import Forgetpassword from '../pages/Forgetpassword';
import Resetpassword from '../pages/Resetpassword';
import Dashboard from '../pages/userDashboard/Dashboard';
import DashboardLayout from '../components/DashboardLayout';
import Tasks from '../pages/userDashboard/Tasks';
import Setting from '../pages/userDashboard/Setting';
import Wallet from '../pages/userDashboard/Wallet';

const RootContainer =  [
    {
        url:AppRoutesUrl.Login,
        component: <Login />,
        exact: true,
    },
    {
        url:AppRoutesUrl.Register,
        component: <Register />,
        exact: true,
    },
    {
        url:AppRoutesUrl.ForgetPassword,
        component: <Forgetpassword />,
        exact: true,
        },
        {
            url:AppRoutesUrl.ResetPassword,
            component: <Resetpassword />,
            exact: true,
        }, 

]

const AppRoutes: FC = () => {
  return (
    <Router>
      <Routes>
        {
            /* Define routes for the application */
            RootContainer.map((route) => (
                <Route key={route.url} path={route.url} element={route.component} />
            ))
        }
        <Route path="/dashboard/*" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="settings" element={<Setting />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="*" element={<PageNotFound />} /> {/* Fallback route for undefined paths */}
        </Route>
        <Route path="*" element={<PageNotFound />} /> {/* Fallback route for undefined paths */}
      </Routes>
    </Router>
  )
}

export default AppRoutes;