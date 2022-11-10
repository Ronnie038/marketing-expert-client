import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Navigate, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../context/authProvider/Authprovider';

const ReviewEditModal = () => {
	const { _id, review, service } = useLoaderData();
	const {
		setReviewUpdate,
		userReviews,
		// setUserReviews,
		// reviewText,
		// setReviewtext,
	} = useContext(AuthContext);
	const [reviewText, setReviewtext] = useState(review);

	const handleSubmit = (e) => {
		e.preventDefault();
		const Updatedreview = e.target.review.value;

		fetch(`https://marketing-expert-server.vercel.app/reviews/${_id}`, {
			method: 'PUT',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify({ review: Updatedreview }),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.upsert === true) {
					// to update the latest review
					setReviewUpdate((prev) => !prev);

					setReviewtext(Updatedreview);
					toast.success('successfully adited');
				}
			})
			.catch((err) => console.log(err));
	};
	return (
		<div className=' rounded-3xl '>
			<h1 className='text-3xl mb-5 pb-5 pt-2 font-bold border-b-2 rounded-2xl max-w-md mx-auto border-l-2 border-r-2'>
				{service}
			</h1>
			<form
				onSubmit={handleSubmit}
				className='border max-w-md mx-auto rounded-2xl p-6'
			>
				<textarea
					className='bg-white p-5 rounded-lg text-black mb-3'
					name='review'
					id=''
					cols='30'
					rows='10'
					defaultValue={reviewText}
				></textarea>
				<br />
				<button type='submit' className='btn btn-info'>
					Submit
				</button>
			</form>
		</div>
	);
};

export default ReviewEditModal;
