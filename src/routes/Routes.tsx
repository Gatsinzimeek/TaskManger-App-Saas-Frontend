import React, { FC } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from '../pages/Login';
import { AppRoutesUrl } from '../utility/AppRoutesUrl';
import Register from '../pages/Register';
import PageNotFound from '../pages/NotFound';
import Forgetpassword from '../pages/Forgetpassword';
import Resetpassword from '../pages/Resetpassword';

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
        <Route path="*" element={<PageNotFound />} /> {/* Fallback route for undefined paths */}
      </Routes>
    </Router>
  )
}

export default AppRoutes;