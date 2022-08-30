import { createContext } from 'react';

import ButtonType from '../enum/ButtonType';
import IGameContext from '../interface/IGameContext';

const GameContext = createContext<IGameContext>({
	turn: {
		player: 'Player1',
		symbol: 'x',
	},
	winner: null,
	mark: (e, index) => {},
	check: () => {},
	initialStart: false,
	buttonVisible: true,
	buttonClick: (type: ButtonType) => {},
	boxFilled: [],
});

export default GameContext;
