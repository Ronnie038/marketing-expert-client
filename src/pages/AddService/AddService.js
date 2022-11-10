import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/authProvider/Authprovider';
import { dynamicTitle } from '../DynamicTitle/DynamicTitle';

const AddService = () => {
	dynamicTitle('add-your-service');
	const [serviceInput, setServiceInput] = useState({});
	const [error, setError] = useState('');
	const { LogOut, setReviewUpdate, allServices, setAllServices } =
		useContext(AuthContext);

	const handleBlur = (e) => {
		const name = e.target.name;
		setServiceInput({ ...serviceInput, [name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// let facilityIntoArray;
		// if (serviceInput.facility.includes(',')) {
		// 	facilityIntoArray = serviceInput?.facility?.split(',');
		// } else if (serviceInput.facility.includes(' ')) {
		// 	facilityIntoArray = serviceInput?.facility?.split(' ');
		// }
		// serviceInput.facility = facilityIntoArray;
		serviceInput.date = Date.now().toString();

		fetch('https://marketing-expert-server.vercel.app/services', {
			method: 'post',
			headers: {
				'content-type': 'application/json',
				authorization: `Bearer ${localStorage.getItem('auth-token')}`,
			},
			body: JSON.stringify(serviceInput),
		})
			.then((res) => {
				if (res.status === 401 || res.status === 401) {
					toast.error('permission forbidded');
					LogOut();
					return;
				} else {
					setReviewUpdate((prev) => !prev);
					return res.json();
				}
			})
			.then((data) => {
				if (data) {
					toast.success('service was succesfully added');

					e.target.reset();
				}
			})
			.catch((err) => console.log(err));

		// e.target.reset();
	};

	return (
		<div>
			<h3 className='text-5xl '>add Your service</h3>

			<div data-theme='dark '>
				<div className='card card-side px-10 shadow-2xl border max-w-xl rounded-2xl mx-auto mt-20'>
					<div className='card-body px-10 rounded' data-theme=''>
						<form onSubmit={handleSubmit} className=''>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text font-bold'>Service Name</span>
								</label>
								<input
									onBlur={handleBlur}
									type='text'
									placeholder='Service Name'
									className='input input-bordered'
									required
									name='name'
								/>
							</div>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text font-bold'>price</span>
								</label>
								<input
									onBlur={handleBlur}
									type='number'
									placeholder='price'
									className='input input-bordered'
									required
									name='price'
								/>
							</div>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text font-bold'>Image URL</span>
								</label>
								<input
									onBlur={handleBlur}
									type='text'
									placeholder='img_url'
									className='input input-bordered'
									required
									name='img_url'
								/>
							</div>

							<div className='form-control'>
								<label className='label'>
									<span className='label-text font-bold'>Description</span>
								</label>
								<textarea
									onBlur={handleBlur}
									type='text'
									placeholder='description'
									className='input input-bordered'
									required
									name='description'
								/>
							</div>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text font-bold'>
										Facility ......use coma after a facility
									</span>
								</label>
								<textarea
									onBlur={handleBlur}
									type='text'
									placeholder='facility'
									className='input input-bordered'
									name='facility'
									required
								/>
							</div>
							<div className='form-control mt-6'>
								<button
									type='submit'
									className=' border mt-3 p-3 rounded-2xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 hover:bg-white hover:text-black font-bold duration-300 '
								>
									Submit
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddService;
