import React, { useContext, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/authProvider/Authprovider';
import { toast } from 'react-hot-toast';
import { dynamicTitle } from '../DynamicTitle/DynamicTitle';
import { fetching } from '../Loader/Loader';
import { setAuthToken } from '../../ServicesApi/auth';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
	dynamicTitle('login-page');

	const { logIn, loading, setLoading, googleSignIn } = useContext(AuthContext);

	const [userInput, setUserInput] = useState({});
	const [error, setError] = useState('');
	const location = useLocation();
	const navigate = useNavigate();
	const from = location?.state?.from?.pathname || '/';

	const handleBlur = (e) => {
		const name = e.target.name;
		setUserInput({ ...userInput, [name]: e.target.value });
	};

	const handleSubmit = (e) => {
		setLoading(true);
		e.preventDefault();
		handleSignUpWithEmailAndPassword(userInput);
		e.target.reset();
	};

	const handleSignUpWithEmailAndPassword = (user) => {
		logIn(user.email, user.password)
			.then((result) => {
				const curUser = {
					email: result.user.email,
				};

				setAuthToken(curUser);

				toast.success('You have succesfully loged in');
				navigate(from, { replace: true });
			})
			.catch((err) => setError(err.code))
			.finally(() => {
				setLoading((prev) => (prev = false));
			});
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
							<label className='label text-left text-red-500'>
								{error?.slice(5)}
							</label>
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
							<div
								onClick={() =>
									googleSignIn()
										.then(() => {
											navigate(from, { replace: true });
										})
										.catch((err) => console.log(err))
								}
								className='btn btn-sm flex justify-center my-2 items-center rounded-md bg-red-600'
							>
								<FaGoogle /> <span className='ml-2'>Google</span>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
