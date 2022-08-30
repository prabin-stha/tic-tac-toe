import { useContext } from 'react';

import IBox from '../interface/IBox';

import GameContext from '../store/GameContext';

import styles from './Box.module.css';

const Box = ({ index, clickHandler }: IBox) => {
	const gameCtx = useContext(GameContext);
	const gameStart = !gameCtx.buttonVisible;
	const symbol = gameCtx.boxFilled[index];

	let symbolText = '';
	if (symbol === 'x') {
		symbolText = 'X';
	}
	if (symbol === 'o') {
		symbolText = 'O';
	}
	return (
		<button
			onClick={e => {
				clickHandler(e, index);
			}}
			className={styles.box}
			disabled={!gameStart}
		>
			{symbolText}
		</button>
	);
};

export default Box;
