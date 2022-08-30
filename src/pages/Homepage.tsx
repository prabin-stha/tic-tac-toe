import GameProvider from '../store/GameProvider';

import Board from '../components/Board';
import Button from '../components/Button';
import Heading from '../components/Heading';

const Homepage: React.FC = () => {
	return (
		<GameProvider>
			<main className='container'>
				<Heading />
				<Board />
				<Button />
			</main>
		</GameProvider>
	);
};

export default Homepage;
