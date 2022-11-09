import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/authProvider/Authprovider';
import Review from '../Review/Review';
import './Reviews.css';
import { FaUserCircle } from 'react-icons/fa';

const Reviews = ({ service }) => {
	const { user, reviews, setReviews } = useContext(AuthContext);

	const [inputReviewText, setInputReviewText] = useState('');
	const [disabled, setDisabled] = useState(true);
	const [newReview, setNewReview] = useState(1);

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

		setReviews([...reviews, userReview]);
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
				setInputReviewText('');
				setNewReview((prev) => prev + 1);
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

	useEffect(() => {
		const descending = reviews.sort((a, b) => b.date - a.date);
		setReviews(descending);
	}, [reviews, newReview]);

	return (
		<div className='p-10'>
			<h1 className='text-3xl text-center'>Reviews</h1>
			<hr className='my-3' />
			<div className=' mt-3  pb-3'>
				<div className='flex '>
					{user?.photoURL ? (
						<img src={user?.photoURL} alt='' className='img_rounded' />
					) : (
						<FaUserCircle className='text-4xl text-green-600' />
					)}
					<input
						disabled={user ? false : true}
						onChange={handleInputChange}
						type='text'
						placeholder={`${user ? 'Add comment' : 'login to add comment'}`}
						className='input_box px-5 w-full max-w-xs '
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
								onClick={handleSubmit}
								disabled={disabled}
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
			</div>
			<div className='reviews_container'>
				{reviews?.map((reviewData, idx) => (
					<Review key={idx} reviewData={reviewData} />
				))}
			</div>
		</div>
	);
};

export default Reviews;
