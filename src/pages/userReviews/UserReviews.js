import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/authProvider/Authprovider';
import { dynamicTitle } from '../DynamicTitle/DynamicTitle';
import MySingleReview from './UserSingleReview';

const UserReviews = () => {
	const { user, myReviews } = useContext(AuthContext);
	dynamicTitle(`${user.displayName}-reviews`);

	return (
		<div data-theme='light' className=' min-h-screen'>
			<h1 className='text-5xl my-10'>Your Reviews</h1>
			<div className='flex flex-wrap gap-5 justify-around'>
				{myReviews.length < 1 ? (
					<h1 className='text-3xl text-red-600 font-bold'>
						You don't have reviews
					</h1>
				) : (
					myReviews?.map((data, idx) => (
						<MySingleReview key={data._id} data={data} index={idx} />
					))
				)}
			</div>
		</div>
	);
};

export default UserReviews;
