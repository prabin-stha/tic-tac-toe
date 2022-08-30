import { useContext } from 'react';

import ButtonType from '../enum/ButtonType';
import GameContext from '../store/GameContext';

import styles from './Button.module.css';

const Button = () => {
	const gameCtx = useContext(GameContext);

	const isNewGame = !gameCtx.initialStart;
	const visible = gameCtx.buttonVisible;

	let type: ButtonType = ButtonType.RESET;
	if (!gameCtx.initialStart) {
		type = ButtonType.NEWGAME;
	}

	let buttonStyle: React.CSSProperties;
	if (visible) {
		buttonStyle = { visibility: 'visible' };
	} else {
		buttonStyle = { visibility: 'hidden' };
	}

	return (
		<button
			onClick={() => gameCtx.buttonClick(type)}
			className={styles.button}
			style={buttonStyle}
		>
			{isNewGame ? 'New Game' : 'Reset'}
		</button>
	);
};

export default Button;
