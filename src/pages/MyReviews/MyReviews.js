import React from 'react';
import MySingleReview from './MySingleReview';

const MyReviews = () => {
	return (
		<div data-theme='light' className=' min-h-screen'>
			<h1 className='text-5xl my-10'>Your Reviews</h1>
			<MySingleReview />
		</div>
	);
};

export default MyReviews;
