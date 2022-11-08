import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/authProvider/Authprovider';

const Login = () => {
	const { logIn } = useContext(AuthContext);
	const [userInput, setUserInput] = useState({});

	const [error, setError] = useState('');

	const handleBlur = (e) => {
		const name = e.target.name;
		setUserInput({ ...userInput, [name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		handleSignUpWithEmailAndPassword(userInput);
		e.target.reset();
	};

	const handleSignUpWithEmailAndPassword = (user) => {
		logIn(user.email, user.password)
			.then((result) => {
				console.log('login successfull');
			})
			.catch((err) => setError(err.code));
	};
	return (
		<div data-theme=' '>
			<div
				className='card card-side px-10 shadow-xl max-w-xl mx-auto mt-20'
				data-theme='synthwave'
			>
				<div className='card-body px-10 rounded'>
					<form onSubmit={handleSubmit} className=''>
						<div className='form-control'>
							<label className='label'>
								<span className='label-text'>Email</span>
							</label>
							<input
								onBlur={handleBlur}
								type='text'
								placeholder='email'
								className='input input-bordered'
								name='email'
								required
							/>
						</div>
						<div className='form-control'>
							<label className='label'>
								<span className='label-text'>Password</span>
							</label>
							<input
								onBlur={handleBlur}
								type='text'
								placeholder='password'
								className='input input-bordered'
								name='password'
								required
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
							<button type='submit' className='btn btn-info'>
								Login
							</button>
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
