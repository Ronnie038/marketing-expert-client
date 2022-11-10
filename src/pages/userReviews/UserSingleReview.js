import React, { useContext, useEffect, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';
import { AuthContext } from '../../context/authProvider/Authprovider';

import './userSingleReview.css';
import { Link } from 'react-router-dom';

const UserSingleReview = ({ data, index }) => {
	const { name, _id, review, service } = data;
	const { setReviewUpdate, userReviews, setUserReviews } =
		useContext(AuthContext);
	const [reviewText, setReviewtext] = useState(review);

	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	const Updatedreview = e.target.review.value;

	// 	fetch(`https://marketing-expert-server.vercel.app/reviews/${_id}`, {
	// 		method: 'PUT',
	// 		headers: {
	// 			'content-type': 'application/json',
	// 		},
	// 		body: JSON.stringify({ review: Updatedreview }),
	// 	})
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			if (data.upsert === true) {
	// 				// to update the latest review
	// 				setReviewUpdate((prev) => !prev);

	// 				setReviewtext(Updatedreview);
	// 				setToggle(false);
	// 			}
	// 			return console.log(data);
	// 		})
	// 		.catch((err) => console.log(err));
	// };

	const handleDelete = () => {
		const confirm = window.confirm('are you sure you want to delete');
		if (confirm) {
			fetch(`https://marketing-expert-server.vercel.app/reviews/${_id}`, {
				method: 'delete',
			})
				.then((res) => {
					if (res.ok) {
						const remainingReview = userReviews.filter(
							(data) => data._id !== _id
						);

						setUserReviews(remainingReview);
						setReviewUpdate((prev) => !prev);
					}
					return res.json();
				})
				.then((data) => console.log(data))
				.catch((err) => console.log(err));
		}
	};

	return (
		<div data-theme='dark' className=' rounded-lg '>
			<div className=' text-left p-5 myreview_div relative'>
				<div className=''>
					<p className='font-bold'>{service}</p>
					<p>review: {review}</p>
				</div>

				<div className=' absolute top-3 right-1'>
					<button>
						<Link to={`/reivew/${_id}`}>
							<FaEdit className='text-2xl text-green-600' />
						</Link>
					</button>
					<button>
						<AiFillDelete
							onClick={handleDelete}
							className='text-2xl text-red-600 mx-3'
						/>
					</button>
				</div>

				{/* <form
					onSubmit={handleSubmit}
					className=''
					style={{ display: `${toggle ? 'block' : 'none'}` }}
				>
					<textarea
						className='bg-white p-5 rounded-lg text-black'
						name='review'
						id=''
						cols='30'
						rows='10'
						defaultValue={review}
					></textarea>
					<br />
					<button type='submit' className='btn btn-info'>
						Submit
					</button>
				</form> */}
			</div>
		</div>
	);
};

export default UserSingleReview;
