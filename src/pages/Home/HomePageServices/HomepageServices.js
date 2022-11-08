import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeServiceSummary from './HomeServiceSummary';

const HomepageServices = () => {
	const [services, setServices] = useState([]);

	useEffect(() => {
		fetch('http://localhost:5000/services-home')
			.then((res) => res.json())
			.then((data) => setServices(data));
	}, []);
	return (
		<div className='   p-5'>
			<h1 className='text-5xl'>My services</h1>
			<div className='flex flex-wrap justify-around'>
				{services.map((service) => (
					<HomeServiceSummary key={service._id} service={service} />
				))}
			</div>
			<div className='btn btn-secondary text-right'>
				<Link to='/services'>see All</Link>
			</div>
		</div>
	);
};

export default HomepageServices;
