import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
	const { _id, name, description, img_url, facility } = service;
	console.log({ _id, facility });
	return (
		<div className='my-5'>
			<div className='card card-compact w-96   bg-base-100 shadow-xl'>
				<figure>
					<img src={img_url} />
				</figure>
				<div className='card-body'>
					<h2 className='card-title'>{name} </h2>
					<p className=' text-left'>{description}</p>

					<div className='card-actions justify-end'>
						<Link to={`/service/${_id}`}>
							<button className='btn btn-primary'>Details</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Service;
