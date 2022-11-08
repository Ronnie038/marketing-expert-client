import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/authProvider/Authprovider';
import MySingleReview from './MySingleReview';

const MyReviews = () => {
	const { user, myReviews } = useContext(AuthContext);
	// const [myReviews, setMyReviews] = useState([]);

	return (
		<div data-theme='light' className=' min-h-screen'>
			<h1 className='text-5xl my-10'>Your Reviews</h1>
			<div className='flex flex-wrap gap-5 justify-around'>
				{myReviews?.map((data, idx) => (
					<MySingleReview key={data._id} data={data} index={idx} />
				))}
			</div>
		</div>
	);
};

export default MyReviews;
