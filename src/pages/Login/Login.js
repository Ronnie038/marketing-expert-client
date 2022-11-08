import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
	return (
		<div data-theme=' '>
			<div
				className='card card-side px-10 shadow-xl max-w-xl mx-auto mt-20'
				data-theme='synthwave'
			>
				<div className='card-body px-10 rounded'>
					<form className=''>
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
							<label className='label text-left'>
								new here ?
								<Link
									to='/register'
									className='  link-hover text-red-400 font-bold'
								>
									Register
								</Link>
							</label>
						</div>
						<div className='form-control mt-6'>
							<button className='btn btn-info'>Login</button>
						</div>
						<div className=''>
							<p>or</p>
							<p>Sign up with</p>
							<button>Google</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
