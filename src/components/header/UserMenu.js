import React, { Component, useState } from 'react';

const UserMenu = () => {
	const [isMenuHovered, setIsMenuHovered] = useState(false);

	return (
		<ul className='user right'>
			<li onMouseLeave={() => setIsMenuHovered(false)}>
				<a href='/' onMouseOver={() => setIsMenuHovered(true)}>
					Sladjana Miljanovic
				</a>
				<div
					className='invisible'
					style={{ display: isMenuHovered ? 'block' : 'none' }}></div>
				<div
					className='user-menu'
					style={{ display: isMenuHovered ? 'block' : 'none' }}
					onMouseOver={() => setIsMenuHovered(true)}>
					<ul>
						<li>
							<a href='/' className='link'>
								Change password
							</a>
						</li>
						<li>
							<a href='/' className='link'>
								Settings
							</a>
						</li>
						<li>
							<a href='/' className='link'>
								Export all data
							</a>
						</li>
					</ul>
				</div>
			</li>
			<li className='last'>
				<a href='/'>Logout</a>
			</li>
		</ul>
	);
};

export default UserMenu;
