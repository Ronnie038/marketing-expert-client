import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { dynamicTitle } from '../DynamicTitle/DynamicTitle';

import { fetching } from '../Loader/Loader';

import Service from './ServiceSummary';

const Services = () => {
	dynamicTitle('services-page');
	const servicesData = useLoaderData();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		const clear = setTimeout(() => {
			setLoading(false);
		}, 1000);

		return () => {
			clearTimeout(clear);
		};
	}, []);

	return (
		<>
			<div className='   p-5'>
				<h1 className='text-5xl'>My services</h1>
				{loading ? (
					fetching(!loading)
				) : (
					<>
						<hr className='my-5' />

						<div className='flex flex-wrap justify-around'>
							{servicesData.map((service) => (
								<Service key={service._id} service={service} />
							))}
						</div>
					</>
				)}
			</div>
		</>
	);
};

export default Services;
