import React from 'react';

import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../../../Register/Register';
import ServiceDetails from '../../../ServiceDetails/ServiceDetails';

import Services from '../../../Services/Services';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: 'login',
				element: <Login />,
			},
			{
				path: 'register',
				element: <Register />,
			},
			{
				path: 'services',
				element: <Services />,
			},
			{
				path: 'service',
				element: <ServiceDetails />,
			},
		],
	},
]);

export default router;
