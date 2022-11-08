import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/authProvider/Authprovider';
import Review from '../Review/Review';
import './Reviews.css';

const Reviews = ({ service }) => {
	const { user, reviews, setReviews } = useContext(AuthContext);
	console.log(user);

	const [inputReviewText, setInputReviewText] = useState('');
	const [disabled, setDisabled] = useState(true);

	const handleSubmit = (e) => {
		e.preventDefault();

		const userReview = {
			name: user?.displayName,
			service: service.name,
			review: inputReviewText,
			email: user?.email,
			photo: user?.photoURL,
			date: Date.now(),
		};
		fetch('http://localhost:5000/reviews', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(userReview),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
			})
			.catch((err) => console.log(err));
	};

	const handleCancel = () => {
		setInputReviewText('');
	};

	const handleInputChange = (e) => {
		if (inputReviewText.length > 2) {
			setDisabled(false);
		} else {
			setDisabled(true);
		}
		setInputReviewText(e.target.value);
	};

	return (
		<div className='p-10'>
			<h1 className='text-3xl text-center'>Reviews</h1>
			<hr className='my-3' />
			<form onSubmit={handleSubmit} className=' mt-3  pb-3'>
				<div className='flex '>
					<img
						src='https://images.unsplash.com/photo-1667778680202-7aa8d8a903a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60'
						alt=''
						className='img_rounded'
					/>
					<input
						onChange={handleInputChange}
						type='text'
						placeholder='Add comment'
						className='input_box px-5 w-full max-w-xs'
						name='review'
						value={inputReviewText}
					/>
				</div>
				{user ? (
					<>
						<div className=' text-right mt-2'>
							<button onClick={handleCancel} className='btn btn-outline'>
								cancel
							</button>
							<button
								disabled={disabled}
								type='submit'
								className='btn btn-outline mr-28'
							>
								comment
							</button>
						</div>
					</>
				) : (
					<>
						{' '}
						<div className=' text-center'>
							<p className='my-4'>please login to add comment</p>
							<Link to='/login' className=' p-3 bg-indigo-500 rounded mt-5'>
								Login{' '}
							</Link>
						</div>
					</>
				)}
			</form>
			<div className='reviews_container'>
				{reviews?.map((reviewData, idx) => (
					<Review key={idx} reviewData={reviewData} />
				))}
			</div>
		</div>
	);
};

export default Reviews;
