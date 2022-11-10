import React, { useContext } from 'react';
import { AuthContext } from '../../context/authProvider/Authprovider';

import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../../pages/Loader/Loader';

const PrivateRoute = ({ children }) => {
	const { user, loading } = useContext(AuthContext);
	const location = useLocation();
	console.log(loading);

	if (loading) {
		return <Spinner />;
	}
	if (!user) {
		return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
	}

	return children;
};

export default PrivateRoute;
