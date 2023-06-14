import { StyledH1, StyledSpan } from './styles';

const Result = ({ day, month, year }) => {
	return (
		<>
			<StyledH1>
				<StyledSpan>{day}</StyledSpan> years
			</StyledH1>
			<StyledH1>
				<StyledSpan>{month}</StyledSpan> months
			</StyledH1>
			<StyledH1>
				<StyledSpan>{year}</StyledSpan> days
			</StyledH1>
		</>
	);
};

export default Result;
