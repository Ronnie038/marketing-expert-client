import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer';

import Header from '../pages/Shared/Header';

const Main = () => {
	return (
		<div
			data-theme='light'
			className='flex justify-between flex-col min-h-screen'
		>
			<div className=''>
				<Header />
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default Main;
