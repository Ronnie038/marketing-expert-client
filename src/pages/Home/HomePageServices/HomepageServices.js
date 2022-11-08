import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HomepageServices = () => {
	const [services, setServices] = useState([3, 3, 3]);
	return (
		<div className='   p-5'>
			<h1 className='text-5xl'>My services</h1>
			<div className='flex flex-wrap justify-around'>
				{services.map((item) => (
					<div className='my-5'>
						<div className='card card-compact w-96   bg-base-100 shadow-xl'>
							<figure>
								<img src='https://placeimg.com/400/225/arch' alt='Shoes' />
							</figure>
							<div className='card-body'>
								<h2 className='card-title'>Shoes!</h2>
								<p>If a dog chews shoes whose shoes does he choose?</p>
								<div className='card-actions justify-end'>
									<button className='btn btn-primary'>Buy Now</button>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className='btn btn-secondary text-right'>
				<Link to='/services'>see All</Link>
			</div>
		</div>
	);
};

export default HomepageServices;
