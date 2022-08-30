import ButtonType from '../enum/ButtonType';

interface IGameAction {
	type: string;
	payload?: {
		box?:
			| 'boxOne'
			| 'boxTwo'
			| 'boxThree'
			| 'boxFour'
			| 'boxFive'
			| 'boxSix'
			| 'boxSeven'
			| 'boxEight'
			| 'boxNine';
		symbol?: 'x' | 'o' | null;
		target?: any;
		index?: number;
		buttonType?: ButtonType;
	};
}
export default IGameAction;
