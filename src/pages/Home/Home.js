import React from 'react';
import Hero from './Hero/Hero';
import Service from '../../../../Services/ServiceSummary';
import Services from '../../../../Services/Services';
import HomepageServices from './HomePageServices/HomepageServices';

const Home = () => {
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
