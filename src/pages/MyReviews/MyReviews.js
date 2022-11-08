import React from 'react';

const MyReviews = () => {
	return (
		<div data-theme='dark' className=' min-h-screen'>
			<h1 className='text-5xl my-10'>Your Reviews</h1>
			<div className='overflow-x-auto'>
				<table className='table w-full'>
					<thead>
						<tr>
							<th></th>
							<th>Name</th>
							<th>Review</th>
							<th>Control</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th>1</th>
							<td>Cy Ganderton</td>
							<td>Quality Control Specialist</td>
							<td>
								<button>Edit</button>
								<button className='mx-5'>Delete</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default MyReviews;
