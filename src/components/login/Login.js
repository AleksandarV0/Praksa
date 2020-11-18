import React from 'react';

import logo from '../../assets/img/logo-large.png';

const Login = () => {
	return (
		<div className='wrapper centered'>
			<div className='logo-wrap'>
				<a href='index.html' className='inner'>
					<img src={logo} />
				</a>
			</div>
			<div className='centered-content-wrap'>
				<div className='centered-block'>
					<h1>Login</h1>
					<ul>
						<li>
							<input
								type='text'
								placeholder='Email'
								className='in-text large'
							/>
						</li>
						<li>
							<input
								type='password'
								placeholder='Password'
								className='in-pass large'
							/>
						</li>
						<li className='last'>
							<input type='checkbox' className='in-checkbox' id='remember' />
							<label
								className='in-label'
								for='remember'
								style={{ paddingLeft: '4px' }}>
								Remember me
							</label>
							<span className='right'>
								<a href='/' className='link' style={{ paddingRight: '4px' }}>
									Forgot password?
								</a>
								<a href='/' className='btn orange'>
									Login
								</a>
							</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Login;
