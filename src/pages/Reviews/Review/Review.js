import React from 'react';

const Review = ({ reviewData }) => {
	const { name, review } = reviewData;
	console.log(reviewData);
	return (
		<div>
			<div className='review_container'>
				<div className='review_div mx-auto my-10'>
					<div className='avatar_container'>
						<img
							src='https://images.unsplash.com/photo-1667778680202-7aa8d8a903a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60'
							alt='unkwon'
							title='name'
							className='img_rounded'
						/>
						<div className=''>
							<p>{name}</p>
							<p> 2-04-22</p>
						</div>
					</div>
					<p>{review}</p>
				</div>
			</div>
		</div>
	);
};

export default Review;
