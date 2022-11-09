import React from 'react';
import Header from '../../Shared/Header';

const Hero = () => {
	return (
		<div className=''>
			<div
				className='hero min-h-screen'
				style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}
			>
				<div className='hero-overlay bg-opacity-60'></div>
				<div className='hero-content text-left text-neutral-content'>
					<div className='max-w-md'>
						<h1 className='mb-2 text-2xl font-bold'>Hello there</h1>
						<h1 className='text-5xl my-3'>My name Is Israfil</h1>
						<h1 className='text-2xl'> I am a digital marketer</h1>
						<p className='mb-5'>
							I am providing the best digital marketing services, if you are
							looking for For the passionate, dedicated, problem solving
							person... here you are at the right place
						</p>
						<button className='btn btn-primary'>Explore</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
