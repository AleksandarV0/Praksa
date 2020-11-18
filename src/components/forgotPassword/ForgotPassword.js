import React from 'react';

import logo from '../../assets/img/logo-large.png';

const ForgotPassword = () => {
	return (
		<div className='wrapper centered'>
			<div className='logo-wrap'>
				<a href='index.html' className='inner'>
					<img src={logo} />
				</a>
			</div>
			<div className='centered-content-wrap'>
				<div className='centered-block'>
					<h1>reset password</h1>
					<ul>
						<li>
							<input
								type='text'
								placeholder='Email'
								className='in-text large'
							/>
						</li>
						<li className='right'>
							<a href='/' className='btn orange'>
								Reset password
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default ForgotPassword;
