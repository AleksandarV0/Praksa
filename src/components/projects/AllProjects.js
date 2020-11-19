import React, { Component } from 'react';

import ProjectDetails from './ProjectDetails';
import $ from 'jquery';

export default class AllProjects extends Component {
	componentDidMount() {
		var heading = '.accordion-wrap .heading';
		$(heading).click(function () {
			if (!$(this).parent().hasClass('open')) {
				$(this).parent().addClass('open');
				$(this).next().slideDown('normal');
			} else {
				$(this).parent().removeClass('open');
				$(this).next().slideUp('normal');
			}
		});
	}
	render() {
		return (
			<div className='accordion-wrap projects'>
				{[0, 1, 2].map((example) => (
					<ProjectDetails />
				))}
			</div>
		);
	}
}
