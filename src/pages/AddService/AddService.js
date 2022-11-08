import React from 'react';
import { Link } from 'react-router-dom';

const AddService = () => {
	return (
		<div>
			<h3 className='text-5xl '>add Your service</h3>

			<div data-theme='dark '>
				<div className='card card-side px-10 shadow-xl max-w-xl mx-auto mt-20'>
					<div className='card-body px-10 rounded' data-theme='light'>
						<form className=''>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Service Name</span>
								</label>
								<input
									type='text'
									placeholder='Service Name'
									className='input input-bordered'
									name='service'
								/>
							</div>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>price</span>
								</label>
								<input
									type='number'
									placeholder='price'
									className='input input-bordered'
									name='price'
								/>
							</div>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Image URL</span>
								</label>
								<input
									type='text'
									placeholder='img_url'
									className='input input-bordered'
									name='image'
								/>
							</div>

							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Description</span>
								</label>
								<textarea
									type='text'
									placeholder='description'
									className='input input-bordered'
									name='description'
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
