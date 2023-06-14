import { useState } from 'react';
import Container from './components/container/Container';
import {
	StyledContainer,
	StyledContainerWrapper
} from './components/container/styles';
import { GlobalStyles } from './styles/globalStyles';

const App = () => {
	const [day, setDay] = useState('--');
	const [month, setMonth] = useState('--');
	const [year, setYear] = useState('--');

	return (
		<>
			<GlobalStyles />
			<StyledContainerWrapper>
				<StyledContainer>
					<Container
						day={day}
						month={month}
						year={year}
						setDay={setDay}
						setMonth={setMonth}
						setYear={setYear}
					/>
				</StyledContainer>
			</StyledContainerWrapper>
		</>
	);
};

export default App;
