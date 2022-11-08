import React from 'react';
import { FaEdit } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';

const MySingleReview = () => {
	return (
		<div data-theme='dark'>
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
								<button className='text-2xl text-green-500'>
									<FaEdit />
								</button>
								<button className='mx-5 text-red-500 text-2xl'>
									<AiFillDelete />
								</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default MySingleReview;
