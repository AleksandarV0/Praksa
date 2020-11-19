import React, { Component } from 'react';
import ClientDetails from './ClientDetails';
import $ from 'jquery';

export default class AllClients extends Component {
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
			<div className='accordion-wrap clients'>
				{[0, 1, 2].map((example) => (
					<ClientDetails key={Math.random()} />
				))}
			</div>
		);
	}
}
