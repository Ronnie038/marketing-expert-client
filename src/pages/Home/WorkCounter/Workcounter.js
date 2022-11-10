import React from 'react';
import './WorkCounter.css';
import "../About/About.css"

const Workcounter = () => {
	return (
		<div>
			<section className='section section-work-data'>
				<h1 className='common-heading'>Counter</h1>
				<div className='custom_container custom_grid custom_grid-four-colum'>
					<div className=''>
						<h2 className='counter-numbers' data-number='2000'>
							600+
						</h2>
						<p>Project completed</p>
					</div>
					<div className=''>
						<h2 className='counter-numbers ' data-number='6000'>
							600+
						</h2>
						<p>Happy clients</p>
					</div>
					<div className=''>
						<h2 className='counter-numbers ' data-number='5000'>
							5000+
						</h2>
						<p>Cups of coffe</p>
					</div>
					<div className=''>
						<h2 className='counter-numbers ' data-number='3000'>
							3000+
						</h2>
						<p>Proffesional</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Workcounter;
