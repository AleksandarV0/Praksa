import React from 'react';

import { useLocation, Link } from 'react-router-dom';

const Navbar = () => {
	const currentLocation = useLocation();

	const applyActiveClassToTab = (path) => {
		return currentLocation.pathname === path ? 'btn nav active' : 'btn nav';
	};

	const applyActiveClassToMainPage = () => {
		if (
			currentLocation.pathname.includes('/days') ||
			currentLocation.pathname === '/index'
		) {
			return 'btn nav active';
		} else {
			return 'btn nav';
		}
	};

	return (
		<nav>
			<ul className='menu'>
				<li>
					<Link to='/index' className={applyActiveClassToMainPage()}>
						TimeSheet
					</Link>
				</li>

				<li>
					<Link to='/clients' className={applyActiveClassToTab('/clients')}>
						Clients
					</Link>
				</li>
				<li>
					<Link to='/projects' className={applyActiveClassToTab('/projects')}>
						Projects
					</Link>
				</li>
				<li>
					<Link
						to='/categories'
						className={applyActiveClassToTab('/categories')}>
						Categories
					</Link>
				</li>
				<li>
					<Link
						to='/team-members'
						className={applyActiveClassToTab('/team-members')}>
						Team members
					</Link>
				</li>
				<li className='last'>
					<Link to='/reports' className={applyActiveClassToTab('/reports')}>
						Reports
					</Link>
				</li>
			</ul>
			<div className='mobile-menu'>
				<a href='/' className='menu-btn'>
					<i className='zmdi zmdi-menu'></i>
				</a>
				<ul>
					<li>
						<Link to='/index' className={applyActiveClassToTab('/index')}>
							TimeSheet
						</Link>
					</li>
					<li>
						<Link to='/clients' className={applyActiveClassToTab('/clients')}>
							Clients
						</Link>
					</li>
					<li>
						<Link to='/projects' className={applyActiveClassToTab('/projects')}>
							Projects
						</Link>
					</li>
					<li>
						<Link
							to='/categories'
							className={applyActiveClassToTab('/categories')}>
							Categories
						</Link>
					</li>
					<li>
						<Link
							to='/team-members'
							className={applyActiveClassToTab('/team-members')}>
							Team members
						</Link>
					</li>
					<li className='last'>
						<Link to='/reports' className={applyActiveClassToTab('/reports')}>
							Reports
						</Link>
					</li>
				</ul>
			</div>
			<span className='line'></span>
		</nav>
	);
};

export default Navbar;
