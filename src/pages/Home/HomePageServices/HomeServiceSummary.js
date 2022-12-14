import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

const HomeServiceSummary = ({ service }) => {
	const { _id, name, price, description, img_url } = service;

	return (
		<div className='card card-compact w-96 my-5   border  bg-base-100 shadow-2xl'>
			<figure>
				<img src={img_url} />
			</figure>
			<div className='card-body'>
				<h2 className='card-title'>{name}</h2>
				<p>{description?.slice(0, 100)}</p>
				<div className='card-actions justify-end'>
					<span className=' p-4 rounded-md text-white bg-yellow-600'>
						price: ${price}
					</span>
					<Link to={`/service/${_id}`}>
						<button className='btn btn-primary'>More Details</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default HomeServiceSummary;
