import React from 'react';
import { isAuthenticated } from '../utility/procteRoutes';
import { Navigate } from 'react-router-dom';

type Props = { children: React.ReactNode};

const ProtectedRoute:React.FC<Props> = (props) => (
    !isAuthenticated() ?  (<Navigate to="/" replace />)  : (props.children)
)

export default ProtectedRoute;


