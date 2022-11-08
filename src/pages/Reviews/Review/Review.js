import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';

const Review = ({ reviewData }) => {
	const { name, review, date, photo } = reviewData;

	const [dates, setDate] = useState('');

	// const timeElapsed = Date.now();
	const reviewDate = new Date(date);
	const formatedDate = reviewDate.toDateString();

	// "Sun Jun 14 2020"

	return (
		<div>
			<div className='review_container'>
				<div className='review_div mx-auto my-10'>
					<div className='avatar_container'>
						{photo ? (
							<img
								src={photo}
								alt='unkwon'
								title='name'
								className='img_rounded'
							/>
						) : (
							<FaUserCircle className='img_rounded text-5xl text-green-600' />
						)}
						<div className=''>
							<p className='reviewer_name'>{name}</p>
						</div>
					</div>
					<p className='review_date'>date: {formatedDate}</p>

					<p>{review}</p>
				</div>
			</div>
		</div>
	);
};

export default Review;
