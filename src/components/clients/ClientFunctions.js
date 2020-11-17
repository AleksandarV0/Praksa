import React from 'react';

import SearchBar from '../common/SearchBar';

const ClientFunctions = () => {
	return (
		<>
			<div className='grey-box-wrap reports'>
				<a href='#new-member' className='link new-member-popup'>
					Create new client
				</a>
				<SearchBar />
			</div>
			<div className='new-member-wrap'>
				<div id='new-member' className='new-member-inner'>
					<h2>Create new client</h2>
					<ul className='form'>
						<li>
							<label>Client name:</label>
							<input type='text' className='in-text' />
						</li>
						<li>
							<label>Address:</label>
							<input type='text' className='in-text' />
						</li>
						<li>
							<label>City:</label>
							<input type='text' className='in-text' />
						</li>
						<li>
							<label>Zip/Postal code:</label>
							<input type='text' className='in-text' />
						</li>
						<li>
							<label>Country:</label>
							<select>
								<option>Select country</option>
							</select>
						</li>
					</ul>
					<div className='buttons'>
						<div className='inner'>
							<a href='/' className='btn green'>
								Save
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ClientFunctions;
