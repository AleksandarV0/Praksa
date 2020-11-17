import React from 'react';

const Navbar = () => {
	return (
		<nav>
			<ul className='menu'>
				<li>
					<a href='index.html' className='btn nav active'>
						TimeSheet
					</a>
				</li>
				<li>
					<a href='clients.html' className='btn nav'>
						Clients
					</a>
				</li>
				<li>
					<a href='projects.html' className='btn nav'>
						Projects
					</a>
				</li>
				<li>
					<a href='categories.html' className='btn nav'>
						Categories
					</a>
				</li>
				<li>
					<a href='team-members.html' className='btn nav'>
						Team members
					</a>
				</li>
				<li className='last'>
					<a href='reports.html' className='btn nav'>
						Reports
					</a>
				</li>
			</ul>
			<div className='mobile-menu'>
				<a href='/' className='menu-btn'>
					<i className='zmdi zmdi-menu'></i>
				</a>
				<ul>
					<li>
						<a href='/'>TimeSheet</a>
					</li>
					<li>
						<a href='/'>Clients</a>
					</li>
					<li>
						<a href='/'>Projects</a>
					</li>
					<li>
						<a href='/'>Categories</a>
					</li>
					<li>
						<a href='/'>Team members</a>
					</li>
					<li className='last'>
						<a href='/'>Reports</a>
					</li>
				</ul>
			</div>
			<span className='line'></span>
		</nav>
	);
};

export default Navbar;
