import ButtonType from '../enum/ButtonType';

interface IGameContext {
	turn: {
		player: 'Player1' | 'Player2';
		symbol: 'x' | 'o';
	};
	winner: 'Player1' | 'Player2' | 'draw' | null;
	mark: (e: any, index: number) => void;
	check: () => void;
	initialStart: boolean;
	buttonVisible: boolean;
	buttonClick: (type: ButtonType) => void;
	boxFilled: any;
}

export default IGameContext;
