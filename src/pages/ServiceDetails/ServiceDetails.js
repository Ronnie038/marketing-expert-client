import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { dynamicTitle } from '../DynamicTitle/DynamicTitle';
import Reviews from '../Reviews/Reviews/Reviews';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
const ServiceDetails = () => {
	dynamicTitle('service-details-and-reviews');
	const service = useLoaderData();
	const { _id, name, price, description, facility, img_url } = service;

	return (
		<div className=' text-left  text-white' data-theme=''>
			<h1 className='text-5xl my-5 text-center'>Service Details</h1>
			<div className='service_details ml-40'>
				<div className='w-32 rounded'>
					<PhotoProvider>
						<PhotoView src={img_url}>
							<img src={img_url} alt='' />
						</PhotoView>
					</PhotoProvider>
				</div>
				<h1 className='text-2xl'>Service:{name} </h1>
				<h1 className='text-yellow-600 font-bold'>Price: ${price}</h1>
				<p className=' w-2/4'>Details: {description}.</p>
				<h1 className='mt-3 text-3xl mb-3 text-primary'>Facility</h1>
				<ul className='list-decimal'>
					{facility.map((item, idx) => (
						<li key={idx}>{item}</li>
					))}
				</ul>
			</div>
			<hr className='my-10' />

			<Reviews service={service} />
		</div>
	);
};

export default ServiceDetails;
