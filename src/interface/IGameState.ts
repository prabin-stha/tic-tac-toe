interface IGameState {
	turn: {
		player: 'Player1' | 'Player2';
		symbol: 'x' | 'o';
	};
	boxFilled: any;
	winner: 'Player1' | 'Player2' | 'draw' | null;
	boxFilledCount: number;
	initialStart: boolean;
	buttonVisible: boolean;
}

export default IGameState;
