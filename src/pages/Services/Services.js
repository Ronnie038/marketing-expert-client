import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Service from './ServiceSummary';

const Services = () => {
	const servicesData = useLoaderData();

	// console.log(servicesData);
	return (
		<div className='   p-5'>
			<h1 className='text-5xl'>My services</h1>
			<hr className='my-5' />
			<div className='flex flex-wrap justify-around'>
				{servicesData.map((service) => (
					<Service key={service._id} service={service} />
				))}
			</div>
		</div>
	);
};

export default Services;
