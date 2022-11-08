import { updateProfile } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { auth, AuthContext } from '../../context/authProvider/Authprovider';

const Register = () => {
	const { createUser } = useContext(AuthContext);
	const [userInput, setUserInput] = useState({});
	const [error, setError] = useState('');
	console.log(error);
	console.log(userInput);

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
		console.log(user.name);
		createUser(user.email, user.password)
			.then((result) => {
				console.log(result.user);
				updateProfile(auth.currentUser, {
					displayName: user.name,
				});
			})
			.catch((err) => setError(err.code));
	};
	return (
		<div data-theme='dark '>
			<div
				className='card card-side px-10 shadow-xl max-w-xl mx-auto mt-20'
				data-theme='synthwave'
			>
				<div className='card-body px-10 rounded'>
					<form onSubmit={handleSubmit} className=''>
						<div className='form-control'>
							<label className='label'>
								<span className='label-text'>Name</span>
							</label>
							<input
								type='text'
								onBlur={handleBlur}
								placeholder='Name'
								className='input input-bordered'
								name='name'
								required
							/>
						</div>
						<div className='form-control'>
							<label className='label'>
								<span className='label-text'>Email</span>
							</label>
							<input
								type='email'
								onBlur={handleBlur}
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
								type='text'
								onBlur={handleBlur}
								name='password'
								placeholder='password'
								className='input input-bordered'
								required
							/>

							<label className='label text-left text-red-600'>
								{error.slice(5)}
							</label>
							<label className='label text-left'>
								Already have an acount?
								<Link
									to='/login'
									className='  link-hover text-red-400 font-bold'
								>
									Login
								</Link>
							</label>
						</div>
						<div className='form-control mt-6'>
							<button type='submit' className='btn btn-info'>
								Register
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

export default Register;
