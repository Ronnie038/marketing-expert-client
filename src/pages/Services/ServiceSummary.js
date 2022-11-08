import React from 'react';
import { Link } from 'react-router-dom';

const Service = () => {
	return (
		<div className='my-5'>
			<div className='card card-compact w-96   bg-base-100 shadow-xl'>
				<figure>
					<img src='https://placeimg.com/400/225/arch' alt='Shoes' />
				</figure>
				<div className='card-body'>
					<h2 className='card-title'>Shoes!</h2>
					<p>If a dog chews shoes whose shoes does he choose?</p>
					<div className='card-actions justify-end'>
						<Link to='/service'>
							<button className='btn btn-primary'>Details</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Service;