import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
	const { _id, name, description, price, img_url, facility } = service;

	return (
		<div className='card card-compact w-96 my-5   bg-base-100 shadow-xl'>
			<figure>
				<img src={img_url} />
			</figure>
			<div className='card-body'>
				<h2 className='card-title'>{name} </h2>
				<p className=' text-left'>{description.slice(0, 100) + '...'}</p>
				<span className='text-left font-bold text-yellow-500 '>
					price: ${price}
				</span>

				<div className='card-actions justify-end'>
					<Link to={`/service/${_id}`}>
						<button className='btn btn-primary'>More Details</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Service;
