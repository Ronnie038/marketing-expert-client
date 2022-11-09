import React from 'react';
import './About.css';
import {
	FaFacebook,
	FaCalendar,
	FaLocationArrow,
	FaBusinessTime,
} from 'react-icons/fa';

const About = () => {
	return (
		<>
			<div className=' relative text-dark ' data-theme='dark'>
				<section className='section-resume section '>
					<div className='custom_container custom_grid custom_grid-two-colum p-10'>
						<div className='resume-img'>
							<img
								src='https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWVuc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
								alt='my resume pic'
								data-src='https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWVuc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
								loading='lazy'
								className='lazy-img'
							/>
						</div>

						<div className='resume-data'>
							<h2 className='common-heading'>resume</h2>
							<p className='resume-para'>my work experience</p>

							<div className='resume-data-subsection'>
								<div className='resume-data-left'>
									<h3>Online educator on Youtuber</h3>
									<div className='custom_grid custom_grid-two-col'>
										<p>
											<FaBusinessTime />
											IsrafilWebEye, Inc.
										</p>
										<p>
											<FaLocationArrow />
											Bangladesh
										</p>
									</div>
								</div>

								<div className='resume-data-right'>
									<p className='resume-data-button'>fulltime</p>
									<p>
										<FaCalendar />
										<span>April 2023 - Present </span>
									</p>
								</div>
							</div>

							<div className='resume-data-subsection'>
								<div className='resume-data-left'>
									<h3>Senior Front End Developer</h3>
									<div className='custom_grid custom_grid-two-col'>
										<p>
											<FaFacebook /> Facebook, Inc.
										</p>
										<p>
											<FaLocationArrow /> San Francisco
										</p>
									</div>
								</div>

								<div className='resume-data-right'>
									<p className='resume-data-button'>fulltime</p>
									<p>
										<FaCalendar /> November 2022 - Present
									</p>
								</div>
							</div>

							<div className='resume-data-subsection'>
								<div className='resume-data-left'>
									<h3>Senior Front End Developer</h3>
									<div className='custom_grid custom_grid-two-col'>
										<p>
											<FaFacebook /> Facebook, Inc.
										</p>
										<p>
											<FaLocationArrow /> San Francisco
										</p>
									</div>
								</div>

								<div className='resume-data-right'>
									<p className='resume-data-button'>fulltime</p>
									<p>
										<FaCalendar /> November 2021 - Present
									</p>
								</div>
							</div>

							<div className='resume-data-subsection'>
								<div className='resume-data-left'>
									<h3>Senior Front End Developer</h3>
									<div className='custom_grid custom_grid-two-col'>
										<p>
											<FaFacebook /> Facebook, Inc.
										</p>
										<p>
											<FaFacebook /> San Francisco
										</p>
									</div>
								</div>

								<div className='resume-data-right'>
									<p className='resume-data-button'>fulltime</p>
									<p>
										<FaCalendar /> November 2021 - Present
									</p>
								</div>
							</div>

							<div className='resume-data-bottom-subsection'>
								<p className='resume-para'>Education</p>

								<div className='resume-data-subsection margin-small'>
									<div className='resume-data-left'>
										<h3>Master in Computer Science</h3>
										<div className='custom_grid custom_grid-two-col'>
											<p>
												<FaCalendar /> Wadia College, Inc.
											</p>
											<p>
												<FaLocationArrow /> Pune, MH
											</p>
										</div>
									</div>

									<div className='resume-data-right'>
										<p className='resume-data-button'> Masters</p>
										<p>
											<FaCalendar />
											<span>May 2026 - 2027 </span>
										</p>
									</div>
								</div>

								<div className='resume-data-subsection '>
									<div className='resume-data-left'>
										<h3>Bachelor in Computer Science</h3>
										<div className='custom_grid custom_grid-two-col'>
											<p>
												<FaBusinessTime /> Daffodil university, Inc.
											</p>
											<p>
												<FaLocationArrow /> Dhaka, Dhanmondi
											</p>
										</div>
									</div>

									<div className='resume-data-right'>
										<p className='resume-data-button'> Bachelor </p>
										<p>
											<FaCalendar />
											<span>May 2023 - 2026 </span>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default About;
