import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../context/authProvider/Authprovider';

const ReviewEditModal = ({ review, _id }) => {
	const { myReviews, setMyReviews } = useContext(AuthContext);
	console.log(myReviews);

	const handleSubmit = (e) => {
		e.preventDefault();
		const review = e.target.review.value;

		const activeReview = myReviews.find((item) => item._id === _id);
		console.log(activeReview);
		// console.log(review);
		fetch(`http://localhost:5000/reviews/${_id}`, {
			method: 'PUT',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify({ review }),
		})
			.then((res) => res.json())
			.then((data) => {
				// if (data.upsert === true) {
				// const upate = myReviews.find((rev) => rev._id === _id);
				// console.log(upate);
				// upate.review = review;
				// const filtered = myReviews.filter((filt) => filt._id !== _id);

				// setMyReviews([...filtered, upate]);
				// }
				console.log(data);
			})
			.catch((err) => console.log(err));
	};

	return (
		<div>
			<div className=' bg-base-200'>
				<div className='card-body'>
					<form onSubmit={handleSubmit} className='form-control'>
						<label className='label'>
							<span className='label-text'>Review</span>
						</label>
						<textarea
							type='text'
							placeholder='write here'
							className='input input-bordered'
							defaultValue={review}
							name='review'
						/>
						<div className='form-control mt-6'>
							<button type='submit' className='btn btn-primary'>
								update
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ReviewEditModal;
