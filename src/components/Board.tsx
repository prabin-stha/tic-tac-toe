import { useContext, useEffect } from 'react';

import GameContext from '../store/GameContext';

import Box from './Box';

import styles from './Board.module.css';

const Board = () => {
	const gameCtx = useContext(GameContext);

	useEffect(() => {
		gameCtx.check();
	}, [gameCtx.turn]);

	const clickHandler = (e: any, index: number) => {
		gameCtx.mark(e, index);
	};

	return (
		<div className={styles.boxContainer}>
			<Box clickHandler={clickHandler} index={0} />
			<Box clickHandler={clickHandler} index={1} />
			<Box clickHandler={clickHandler} index={2} />
			<Box clickHandler={clickHandler} index={3} />
			<Box clickHandler={clickHandler} index={4} />
			<Box clickHandler={clickHandler} index={5} />
			<Box clickHandler={clickHandler} index={6} />
			<Box clickHandler={clickHandler} index={7} />
			<Box clickHandler={clickHandler} index={8} />
		</div>
	);
};

export default Board;
