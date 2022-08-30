import React, { useReducer } from 'react';

import GameContext from './GameContext';

import ButtonType from '../enum/ButtonType';
import GameActionType from '../enum/GameActionType';
import IGameAction from '../interface/IGameAction';
import IGameContext from '../interface/IGameContext';
import IGameState from '../interface/IGameState';

const initialState: IGameState = {
	turn: { player: 'Player1', symbol: 'x' },
	boxFilled: [null, null, null, null, null, null, null, null, null],
	winner: null,
	boxFilledCount: 0,
	initialStart: false,
	buttonVisible: true,
};

const reducer: React.Reducer<IGameState, IGameAction> = (
	state,
	action
): IGameState => {
	const { type, payload } = action;
	if (type === GameActionType.CHECK) {
		const box = state.boxFilled;
		// Player1 Wins
		if (box[0] === 'x' && box[1] === 'x' && box[2] === 'x')
			return { ...state, winner: 'Player1', buttonVisible: true };
		if (box[0] === 'x' && box[3] === 'x' && box[6] === 'x')
			return { ...state, winner: 'Player1', buttonVisible: true };
		if (box[0] === 'x' && box[4] === 'x' && box[8] === 'x')
			return { ...state, winner: 'Player1', buttonVisible: true };
		if (box[1] === 'x' && box[4] === 'x' && box[7] === 'x')
			return { ...state, winner: 'Player1', buttonVisible: true };
		if (box[2] === 'x' && box[5] === 'x' && box[8] === 'x')
			return { ...state, winner: 'Player1', buttonVisible: true };
		if (box[3] === 'x' && box[4] === 'x' && box[5] === 'x')
			return { ...state, winner: 'Player1', buttonVisible: true };
		if (box[6] === 'x' && box[7] === 'x' && box[8] === 'x')
			return { ...state, winner: 'Player1', buttonVisible: true };
		if (box[6] === 'x' && box[4] === 'x' && box[2] === 'x')
			return { ...state, winner: 'Player1', buttonVisible: true };

		// Player2 Wins
		if (box[0] === 'o' && box[1] === 'o' && box[2] === 'o')
			return { ...state, winner: 'Player2', buttonVisible: true };
		if (box[0] === 'o' && box[3] === 'o' && box[6] === 'o')
			return { ...state, winner: 'Player2', buttonVisible: true };
		if (box[0] === 'o' && box[4] === 'o' && box[8] === 'o')
			return { ...state, winner: 'Player2', buttonVisible: true };
		if (box[1] === 'o' && box[4] === 'o' && box[7] === 'o')
			return { ...state, winner: 'Player2', buttonVisible: true };
		if (box[2] === 'o' && box[5] === 'o' && box[8] === 'o')
			return { ...state, winner: 'Player2', buttonVisible: true };
		if (box[3] === 'o' && box[4] === 'o' && box[5] === 'o')
			return { ...state, winner: 'Player2', buttonVisible: true };
		if (box[6] === 'o' && box[7] === 'o' && box[8] === 'o')
			return { ...state, winner: 'Player2', buttonVisible: true };
		if (box[6] === 'o' && box[4] === 'o' && box[2] === 'o')
			return { ...state, winner: 'Player2', buttonVisible: true };

		if (state.boxFilledCount === 9)
			return { ...state, winner: 'draw', buttonVisible: true };
	}

	if (type === GameActionType.MARK) {
		console.log(state.boxFilledCount);
		if (payload) {
			payload.target.target.disabled = 'true';
		}
		const newFilledCopy = state.boxFilled.slice();
		if (payload?.index || payload?.index === 0)
			newFilledCopy[payload.index] = state.turn.symbol;

		let newTurn = state.turn;
		if (newTurn.player === 'Player1') {
			newTurn = { player: 'Player2', symbol: 'o' };
		} else if (newTurn.player === 'Player2')
			newTurn = { player: 'Player1', symbol: 'x' };

		return {
			...state,
			boxFilled: newFilledCopy,
			turn: newTurn,
			boxFilledCount: ++state.boxFilledCount,
		};
	}

	if (type === GameActionType.BUTTON_CLICK) {
		const buttonType = payload?.buttonType;

		if (buttonType === ButtonType.NEWGAME) {
			return { ...state, initialStart: true, buttonVisible: false };
		}

		if (buttonType === ButtonType.RESET) {
			console.log('reset');
			return {
				...initialState,
				buttonVisible: false,
				initialStart: true,
			};
		}
	}
	return state;
};

const GameProvider = ({ children }: { children: JSX.Element }) => {
	const [state, dispatch] = useReducer<
		React.Reducer<IGameState, IGameAction>
	>(reducer, initialState);

	const checkForWinner = () => {
		dispatch({ type: GameActionType.CHECK });
	};

	const buttonClick = (type: ButtonType) => {
		dispatch({
			type: GameActionType.BUTTON_CLICK,
			payload: { buttonType: type },
		});
	};

	const markBox = (e: any, index: number) => {
		dispatch({
			type: GameActionType.MARK,
			payload: { target: e, index: index },
		});
	};

	const providerValue: IGameContext = {
		turn: state.turn,
		winner: state.winner,
		buttonVisible: state.buttonVisible,
		mark: markBox,
		initialStart: state.initialStart,
		check: checkForWinner,
		buttonClick: buttonClick,
		boxFilled: state.boxFilled,
	};

	return (
		<GameContext.Provider value={providerValue}>
			{children}
		</GameContext.Provider>
	);
};

export default GameProvider;
