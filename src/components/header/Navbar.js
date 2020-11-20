import React from 'react';

import MobileMenu from './MobileMenu';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
	const currentLocation = useLocation();
	const isDaySelectedInTimeSheet = () => {
		if (currentLocation.pathname.includes('/days')) {
			return (
				<li>
					<NavLink to='/timesheet' className='btn nav active'>
						TimeSheet
					</NavLink>
				</li>
			);
		} else {
			return (
				<li>
					<NavLink to='/timesheet' className='btn nav'>
						TimeSheet
					</NavLink>
				</li>
			);
		}
	};

	return (
		<nav>
			<ul className='menu'>
				{isDaySelectedInTimeSheet()}
				{/* <li>
					<NavLink to='/timesheet' className='btn nav'>
						TimeSheet
					</NavLink>
				</li> */}

				<li>
					<NavLink to='/clients' className='btn nav'>
						Clients
					</NavLink>
				</li>
				<li>
					<NavLink to='/projects' className='btn nav'>
						Projects
					</NavLink>
				</li>
				<li>
					<NavLink to='/categories' className='btn nav'>
						Categories
					</NavLink>
				</li>
				<li>
					<NavLink to='/team-members' className='btn nav'>
						Team members
					</NavLink>
				</li>
				<li className='last'>
					<NavLink to='/reports' className='btn nav'>
						Reports
					</NavLink>
				</li>
			</ul>
			<MobileMenu />

			<span className='line'></span>
		</nav>
	);
};

export default Navbar;
