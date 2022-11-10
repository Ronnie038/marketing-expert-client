import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/authProvider/Authprovider';
import { dynamicTitle } from '../DynamicTitle/DynamicTitle';
import '../Home/About/About.css';

import Spinner from '../Loader/Loader';

import Service from './ServiceSummary';

const Services = () => {
	dynamicTitle('services-page');
	// const servicesData = useLoaderData();

	const { allServices, setAllServices, reviewUpdate } = useContext(AuthContext);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		// loader: () => fetch('https://marketing-expert-server.vercel.app/services'),
		fetch('https://marketing-expert-server.vercel.app/services')
			.then((res) => res.json())
			.then((data) => setAllServices(data))
			.catch((err) => console.log(err));
	}, [reviewUpdate]);

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
			<div className='   p-5 '>
				<h1 className='common-heading'>My services</h1>
				{/* <Spinner /> */}

				{loading ? (
					<Spinner />
				) : (
					<>
						<hr className='my-5' />

						<div className='flex flex-wrap justify-around'>
							{allServices.map((service) => (
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
