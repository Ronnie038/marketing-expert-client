import React, { useState } from 'react';
import Review from '../Review/Review';
import './Reviews.css';

const Reviews = () => {
	const [reviews, setReviews] = useState([1, 3, 4, 5]);
	return (
		<div className='p-10'>
			<h1 className='text-3xl text-center'>Reviews</h1>
			<hr className='my-3' />
			<div className=' mt-3  pb-3'>
				<div className='flex '>
					<img
						src='https://images.unsplash.com/photo-1667778680202-7aa8d8a903a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60'
						alt=''
						className='img_rounded'
					/>
					<input
						type='text'
						placeholder='Add comment'
						className='input_box w-full max-w-xs'
					/>
				</div>
				<div className=' text-right mt-2'>
					<button className='btn btn-outline'>cancel</button>
					<button className='btn btn-outline mr-28'>comment</button>
				</div>
			</div>
			<div className='reviews_container'>
				{reviews.map((review) => (
					<Review />
				))}
			</div>
		</div>
	);
};

export default Reviews;
