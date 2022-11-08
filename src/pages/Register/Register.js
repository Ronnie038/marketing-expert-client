import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
	return (
		<div data-theme='light'>
			<div className='hero min-h-screen bg-base-200'>
				<div className='hero-content flex-col lg:flex-row-reverse'>
					<div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
						<form className='card-body'>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Name</span>
								</label>
								<input
									type='text'
									placeholder='Name'
									className='input input-bordered'
								/>
							</div>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Email</span>
								</label>
								<input
									type='text'
									placeholder='email'
									className='input input-bordered'
								/>
							</div>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Password</span>
								</label>
								<input
									type='text'
									placeholder='password'
									className='input input-bordered'
								/>

								<label className='label'>
									Already have an account
									<Link
										to='/login'
										className=' text-red-400 label-text-alt link link-hover'
									>
										Login
									</Link>
								</label>
							</div>

							<div className='form-control mt-6'>
								<button className='btn btn-primary'>Register</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;