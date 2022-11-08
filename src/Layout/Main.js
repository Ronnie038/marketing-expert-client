import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer';

import Header from '../pages/Shared/Header';

const Main = () => {
	return (
		<div
			data-theme='dark'
			className=' mx-auto flex justify-between flex-col   min-h-screen relative '
			style={{ maxWidth: '1400px' }}
		>
			<div className='  '>
				<Header />
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default Main;
