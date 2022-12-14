import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/authProvider/Authprovider';
import { FaUser } from 'react-icons/fa';

const Header = () => {
	const { user, LogOut } = useContext(AuthContext);
	// console.log(user);
	// console.log(user);

	const userSignout = () => {
		LogOut();
	};
	return (
		<div className=' sticky top-0 z-10  '>
			<div className='tabs'>
				<div className='navbar bg-base-100 px-3 py-3'>
					<div className='navbar-start'>
						<div className='dropdown'>
							<label tabIndex={0} className='btn btn-ghost lg:hidden'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-5 w-5'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M4 6h16M4 12h8m-8 6h16'
									/>
								</svg>
							</label>
							<ul
								tabIndex={0}
								className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
							>
								{user ? (
									<>
										<li>
											<Link to='/addService' className='tab tab-bordered'>
												Add Service
											</Link>
										</li>

										<li>
											<Link to='/userReviews' className='tab tab-bordered  '>
												Your Review
											</Link>
										</li>

										<li>
											<button
												onClick={userSignout}
												className='tab tab-bordered'
											>
												SignOut
											</button>
										</li>
									</>
								) : (
									<li>
										<Link to='/login' className='tab tab-bordered tab-active'>
											Login
										</Link>
									</li>
								)}
							</ul>
						</div>

						<Link
							to='/'
							className='btn btn-ghost normal-case text-xl tab tab-bordered font-serif'
						>
							Marketing Expert
						</Link>
						<Link
							to='/blog'
							className='btn btn-ghost normal-case text-xl tab tab-bordered font-serif'
						>
							Blog
						</Link>
					</div>
					<div className='navbar-center hidden lg:flex'>
						<ul className='menu menu-horizontal p-0'>
							{user ? (
								<>
									<li>
										<Link to='/addService' className='tab tab-bordered py-1'>
											Add Service
										</Link>
									</li>

									<li>
										<Link to='/userReviews' className='tab tab-bordered py-1'>
											Your Review
										</Link>
									</li>

									<li>
										<button
											onClick={() => LogOut()}
											className='tab tab-bordered py-1'
										>
											SignOut
										</button>
									</li>
								</>
							) : (
								<li>
									<Link to='/login'>Login</Link>
								</li>
							)}
						</ul>
					</div>

					{!user ? (
						<>
							<FaUser className='ml-auto mr-5' />
						</>
					) : (
						<>
							<div className='dropdown dropdown-end ml-auto mr-5'>
								<>
									<label
										tabIndex={0}
										className='btn btn-ghost btn-circle avatar'
									></label>
								</>
								<label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
									<div className='w-10 rounded-full'>
										<img
											src={`${user?.photoURL ? user.photoURL : <FaUser />}`}
										/>
									</div>
								</label>
								<ul
									tabIndex={0}
									className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
								>
									<li>
										<Link className='justify-between'>
											{user?.displayName}
											<span className='badge'>New</span>
										</Link>
									</li>
									<li>
										<p>{user?.email.split('@')[0]}</p>
									</li>
									<li>
										<button onClick={() => LogOut()}>Logout</button>
									</li>
								</ul>
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default Header;
