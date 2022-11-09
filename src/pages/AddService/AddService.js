import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { dynamicTitle } from '../DynamicTitle/DynamicTitle';

const AddService = () => {
	dynamicTitle('add-your-service');
	const [serviceInput, setServiceInput] = useState({});
	const [error, setError] = useState('');
	// console.log(error);
	// console.log(serviceInput);

	const handleBlur = (e) => {
		const name = e.target.name;
		setServiceInput({ ...serviceInput, [name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const facilityIntoArray = serviceInput?.facility?.split(',');
		serviceInput.facility = facilityIntoArray;
		console.log(serviceInput);

		fetch('http://localhost:5000/services', {
			method: 'post',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(serviceInput),
		})
			.then((res) => res.json())
			.then((data) => console.log(data))
			.catch((err) => console.log(err));

		// e.target.reset();
	};

	return (
		<div>
			<h3 className='text-5xl '>add Your service</h3>

			<div data-theme='dark '>
				<div className='card card-side px-10 shadow-xl max-w-xl mx-auto mt-20'>
					<div className='card-body px-10 rounded' data-theme='light'>
						<form onSubmit={handleSubmit} className=''>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Service Name</span>
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
									<span className='label-text'>price</span>
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
									<span className='label-text'>Image URL</span>
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
									<span className='label-text'>Description</span>
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
									<span className='label-text'>
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
								<button type='submit' className='btn btn-primary'>
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
