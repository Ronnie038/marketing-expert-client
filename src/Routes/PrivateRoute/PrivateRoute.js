import React, { useContext } from 'react';
import { AuthContext } from '../../context/authProvider/Authprovider';
import Loader from 'react-loader';

import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
	const { user, loading } = useContext(AuthContext);
	const location = useLocation();

	if (loading) {
		return (
			<Loader
				loaded={loading}
				lines={13}
				length={20}
				width={10}
				radius={30}
				corners={1}
				rotate={0}
				direction={1}
				color='#000'
				speed={1}
				trail={60}
				shadow={false}
				hwaccel={false}
				className='spinner'
				zIndex={2e9}
				top='50%'
				left='50%'
				scale={1.0}
				loadedClassName='loadedContent'
			/>
		);
	}

	if (!user) {
		return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
	}

	return children;
};

export default PrivateRoute;
