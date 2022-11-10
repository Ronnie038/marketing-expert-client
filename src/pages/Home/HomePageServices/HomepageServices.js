import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/authProvider/Authprovider';

import HomeServiceSummary from './HomeServiceSummary';

const HomepageServices = () => {
	const [services, setServices] = useState([]);
	const { loading, setLoading } = useContext(AuthContext);

	useEffect(() => {
		fetch('https://marketing-expert-server.vercel.app/services-home')
			.then((res) => res.json())
			.then((data) => setServices(data))
			.catch((err) => console.log(err));

		return () => {};
	}, []);
	return (
		<div className='   p-5'>
			<h1 className='common-heading'>My services</h1>

			<div className='flex flex-wrap justify-around'>
				{services.map((service) => (
					<HomeServiceSummary key={service._id} service={service} />
				))}
			</div>
			<div className='btn btn-secondary text-right'>
				<Link to='/services'>see All</Link>
			</div>
		</div>
	);
};

export default HomepageServices;
