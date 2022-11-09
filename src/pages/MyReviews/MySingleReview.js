import React, { useContext, useEffect, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';
import { AuthContext } from '../../context/authProvider/Authprovider';

import './MySingleReview.css';

const MySingleReview = ({ data, index }) => {
	const { name, _id, review, service } = data;
	const { setReviewUpdate, myReviews, setMyReviews } = useContext(AuthContext);
	const [myText, setMytext] = useState(review);
	const [toggle, setToggle] = useState(false);

	const handleToggle = () => {
		setToggle(!toggle);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const Updatedreview = e.target.review.value;

		fetch(`http://localhost:5000/reviews/${_id}`, {
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

					setMytext(Updatedreview);
					setToggle(false);
				}
				return console.log(data);
			})
			.catch((err) => console.log(err));
	};

	const handleDelete = () => {
		fetch(`http://localhost:5000/reviews/${_id}`, {
			method: 'delete',
		})
			.then((res) => {
				if (res.ok) {
					const remainingReview = myReviews.filter((data) => data._id !== _id);

					setMyReviews(remainingReview);
				}
				return res.json();
			})
			.then((data) => console.log(data))
			.catch((err) => console.log(err));
	};

	return (
		<div data-theme='dark' className=' rounded-lg '>
			<div className=' text-left p-5 myreview_div relative'>
				<div className='' style={{ display: `${toggle ? 'none' : 'block'}` }}>
					<p className='font-bold'>{service}</p>
					<p>review: {myText}</p>
				</div>

				<div className=' absolute top-3 right-1'>
					<button>
						<FaEdit
							onClick={handleToggle}
							className='text-2xl text-green-600'
						/>
					</button>
					<button>
						<AiFillDelete
							onClick={handleDelete}
							className='text-2xl text-red-600 mx-3'
						/>
					</button>
				</div>

				<form
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
				</form>
			</div>
		</div>
	);
};

export default MySingleReview;
