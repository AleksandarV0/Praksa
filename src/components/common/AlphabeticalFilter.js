import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../services/redux/actions/alphabetFilterActions';

const AlphabeticalFilter = ({
	currentLetter,
	selectLetter,
	clearLetter,
	allLetters,
}) => {
	const latinAlphabet = [
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'g',
		'h',
		'i',
		'j',
		'k',
		'l',
		'm',
		'n',
		'o',
		'p',
		'q',
		'r',
		's',
		't',
		'u',
		'v',
		'w',
		'x',
		'y',
	];

	useEffect(() => {
		return () => {
			clearLetter();
		};
	}, []);

	const returnElementClass = (letter) => {
		if (currentLetter === letter) {
			return 'active';
		}
		if (!allLetters.includes(letter)) {
			return 'disabled';
		}

		return '';
	};

	// ! active klasa za active element
	// ? disabled klasa za element koji nema
	return (
		<div className='alpha'>
			<ul>
				{latinAlphabet.map((letter) => (
					<li className={returnElementClass(letter)} key={letter}>
						<Link
							to='/clients'
							onClick={() => {
								if (currentLetter !== letter) {
									selectLetter(letter);
								} else {
									clearLetter();
								}
							}}>
							{letter}
						</Link>
					</li>
				))}
				<li className={`last ${returnElementClass('z')}`}>
					<Link
						to='/clients'
						onClick={() => {
							if (currentLetter !== 'z') {
								selectLetter('z');
							} else {
								clearLetter();
							}
						}}>
						z
					</Link>
				</li>
			</ul>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		currentLetter: state.alphabetFilterReducer.currentLetter,
		allLetters: state.alphabetFilterReducer.allAvailableLetters,
	};
};

const mapActionToProps = {
	selectLetter: actions.selectLetter,
	clearLetter: actions.clearLetter,
};

export default connect(mapStateToProps, mapActionToProps)(AlphabeticalFilter);
