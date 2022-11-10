import React, { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/authProvider/Authprovider';
import { dynamicTitle } from '../DynamicTitle/DynamicTitle';
import MySingleReview from './UserSingleReview';

const UserReviews = () => {
	const { user, userReviews, setUserReviews, reviews, LogOut } =
		useContext(AuthContext);
	dynamicTitle(`${user.displayName}-reviews`);

	useEffect(() => {
		fetch(`http://localhost:5000/reviewsByQuery?email=${user?.email}`, {
			headers: {
				authorization: `Bearer ${localStorage.getItem('auth-token')}`,
			},
		})
			.then((res) => {
				if (res.status === 401 || res.status === 403) {
					LogOut();
					Navigate('/login');
				}

				return res.json();
			})
			.then((data) => setUserReviews(data));
	}, [user?.email]);

	return (
		<div data-theme='light' className=' min-h-screen'>
			<h1 className='text-5xl my-10'>Your Reviews</h1>
			<div className='flex flex-wrap gap-5 justify-around'>
				{userReviews?.length < 1 ? (
					<h1 className='text-3xl text-red-600 font-bold'>
						no rivews were added
					</h1>
				) : (
					userReviews?.map((data, idx) => (
						<MySingleReview key={data._id} data={data} index={idx} />
					))
				)}
			</div>
		</div>
	);
};

export default UserReviews;
