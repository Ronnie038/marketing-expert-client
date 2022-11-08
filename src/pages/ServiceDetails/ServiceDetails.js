import React from 'react';
import Reviews from '../Reviews/Reviews/Reviews';
const ServiceDetails = () => {
	return (
		<div className=' text-left  text-white' data-theme=''>
			<h1 className='text-5xl my-5 text-center'>Service Details</h1>
			<div className='service_details ml-40'>
				<h1>Service: Onpage seo</h1>
				<h1>Price: $200</h1>
				<p>
					Details: Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
					adipisci.
				</p>
				<ul>
					<h1>Facility</h1>
					<li>1</li>
					<li>1</li>
					<li>1</li>
					<li>1</li>
				</ul>

				<h1>total reviews: 10</h1>
			</div>
			<hr className='my-10' />

			<Reviews />
		</div>
	);
};

export default ServiceDetails;
