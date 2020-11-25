import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import * as paginationActions from '../../services/redux/actions/paginationActions';

const Pagination = ({
	entityCount,
	currentPage,
	selectPage,
	nextPage,
	resetPage,
	componentName,
}) => {
	useEffect(() => {
		return () => {
			resetPage();
		};
	}, []);
	if (entityCount == undefined || entityCount <= 5) {
		return null;
	}

	const allPages = [];
	for (let i = 1; i < Math.ceil(entityCount / 5) + 1; i++) {
		allPages.push(i);
	}

	return (
		<div className='pagination'>
			<ul>
				{allPages.map((pageNumber) => (
					<li key={pageNumber}>
						<Link
							to='/clients'
							onClick={() => {
								if (currentPage !== pageNumber) {
									selectPage(pageNumber);
								}
							}}>
							{pageNumber}
						</Link>
					</li>
				))}

				<li className='last'>
					<Link
						to='/clients'
						onClick={() => {
							if (currentPage < allPages[allPages.length - 1]) {
								nextPage();
							}
						}}>
						Next
					</Link>
				</li>
			</ul>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		currentPage: state.paginationReducer.currentPage,
		entityCount: state.paginationReducer.entityToDisplayCount,
	};
};

const mapActionToProps = {
	selectPage: paginationActions.selectPage,
	nextPage: paginationActions.nextPage,
	resetPage: paginationActions.reset,
};

export default connect(mapStateToProps, mapActionToProps)(Pagination);
