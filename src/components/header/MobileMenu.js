import React from 'react';

import { NavLink, useLocation } from 'react-router-dom';

function MobileMenu() {
	return (
		<div className='mobile-menu'>
			<a href='/' className='menu-btn'>
				<i className='zmdi zmdi-menu'></i>
			</a>
			<ul>
				<li>
					<NavLink to='/index' className='btn nav'>
						TimeSheet
					</NavLink>
				</li>
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
		</div>
	);
}

export default MobileMenu;
