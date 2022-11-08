import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Service from './ServiceSummary';

const Services = () => {
	const [services, setServices] = useState([3, 3, 3, 3, 4, 5, 6]);
	return (
		<div className='   p-5'>
			<h1 className='text-5xl'>My services</h1>
			<div className='flex flex-wrap justify-around'>
				{services.map((item) => (
					<Service />
				))}
			</div>
		</div>
	);
};

export default Services;
