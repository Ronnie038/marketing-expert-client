import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className=' sticky top-0 z-10 '>
			<div className='navbar bg-base-100 px-10'>
				<div className='flex-1'>
					<Link to='/' className='btn btn-ghost normal-case text-xl'>
						Home
					</Link>
				</div>
				<div className='flex-none'>
					<Link to='/login'>Login</Link>
				</div>
				<div className='flex-none ml-10'>
					<Link>My Reviews</Link>
				</div>
				<div className='flex-none ml-10'>
					<Link>Add service</Link>
				</div>
			</div>
		</div>
	);
};

export default Header;
