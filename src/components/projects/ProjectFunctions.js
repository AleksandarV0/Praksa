import React from 'react';

import SearchBar from '../common/SearchBar';

const ProjectFunctions = () => {
	return (
		<>
			<div className='grey-box-wrap reports'>
				<a href='#new-member' className='link new-member-popup'>
					Create new project
				</a>
				<SearchBar />
			</div>
			<div className='new-member-wrap'>
				<div id='new-member' className='new-member-inner'>
					<h2>Create new project</h2>
					<ul className='form'>
						<li>
							<label>Project name:</label>
							<input type='text' className='in-text' />
						</li>
						<li>
							<label>Description:</label>
							<input type='text' className='in-text' />
						</li>
						<li>
							<label>Customer:</label>
							<select>
								<option>Select customer</option>
								<option>Adam Software NV</option>
								<option>Clockwork</option>
								<option>Emperor Design</option>
							</select>
						</li>
						<li>
							<label>Lead:</label>
							<select>
								<option>Select lead</option>
								<option>Sasa Popovic</option>
								<option>Sladjana Miljanovic</option>
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

export default ProjectFunctions;
