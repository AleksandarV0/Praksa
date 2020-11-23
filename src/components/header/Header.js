import React from 'react';

import UserMenu from './UserMenu';
import Navbar from './Navbar';

import logo from '../../assets/img/logo.png';

const Header = () => {
	return (
		<header className='header'>
			<div className='top-bar'></div>
			<div className='wrapper'>
				<a href='/timesheet' className='logo'>
					<img src={logo} alt='VegaITSourcing Timesheet' />
				</a>
				<UserMenu />
				<Navbar />
			</div>
		</header>
	);
};

export default Header;
