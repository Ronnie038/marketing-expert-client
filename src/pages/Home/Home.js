import React, { useContext } from 'react';
import Hero from './Hero/Hero';
import Service from '../Services/ServiceSummary';
import Services from '../Services/Services';
import HomepageServices from './HomePageServices/HomepageServices';
import { dynamicTitle } from '../DynamicTitle/DynamicTitle';
import { AuthContext } from '../../context/authProvider/Authprovider';

const Home = () => {
	dynamicTitle('home');
	const { loading } = useContext(AuthContext);
	console.log(loading);

	return (
		<div>
			<div className=' relative'>
				<Hero></Hero>
				<HomepageServices />
			</div>
		</div>
	);
};

export default Home;
