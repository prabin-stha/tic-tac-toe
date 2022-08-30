import { useContext } from 'react';

import GameContext from '../store/GameContext';

import styles from './Heading.module.css';

const Heading = () => {
	const gameCtx = useContext(GameContext);
	let text;
	if (gameCtx.winner === 'Player1') text = 'Player1 (X) is the winner!';
	if (gameCtx.winner === 'Player2') text = 'Player2 (O) is the winner!';
	if (gameCtx.winner === 'draw') text = 'DRAW!';
	if (!gameCtx.winner)
		text = `${gameCtx.turn.player}'s Turn (${
			gameCtx.turn.player === 'Player1' ? 'X' : 'O'
		})`;

	return (
		<div className={styles.header}>
			<h1 className={styles.heading}>Tic-Tac-Toe</h1>
			<h2 className={styles.subHeading}>{text}</h2>
		</div>
	);
};

export default Heading;
