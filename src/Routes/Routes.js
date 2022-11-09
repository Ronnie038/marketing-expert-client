import React from 'react';

import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import AddService from '../pages/AddService/AddService';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';

import Register from '../pages/Register/Register';
import ServiceDetails from '../pages/ServiceDetails/ServiceDetails';

import Services from '../pages/Services/Services';
import UserReviews from '../pages/userReviews/UserReviews';
import PrivateRoute from './PrivateRoute/PrivateRoute';

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
				loader: () => fetch('http://localhost:5000/services'),
			},
			{
				path: 'service/:id',
				element: <ServiceDetails />,
				loader: ({ params }) =>
					fetch(`http://localhost:5000/services/${params.id}`),
			},
			{
				path: 'addService',
				element: (
					<PrivateRoute>
						<AddService />
					</PrivateRoute>
				),
			},
			{
				path: 'myReviews',
				element: (
					<PrivateRoute>
						<UserReviews />
					</PrivateRoute>
				),
			},
		],
	},
]);

export default router;
