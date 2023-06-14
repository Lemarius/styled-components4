import { useState } from 'react';
import { StyledH1, StyledSpan } from '../result/styles';
import {
	StyledLabel,
	StyledInput,
	StyledInputCont,
	StyledTextCont,
	StyledSeparator,
	StyledSeparatorLine,
	StyledSeparatorImg,
	StyledSeparatorContImg
} from './styles';

const Container = ({ day, month, year, setDay, setMonth, setYear }) => {
	const handleTodayDate = () => {
		const todayDate = new Date();
		const inputDate = new Date(year, month - 1, day);

		const todayDay = todayDate.getDate();
		const todayMonth = todayDate.getMonth() + 1;
		const todayYear = todayDate.getFullYear();

		let monthResult;
		let dayResult;
		let yearResult = todayYear - inputDate.getFullYear();

		if (todayDay >= day) {
			dayResult = todayDay - day;
		} else {
			dayResult = 31 + todayDay - day;
			monthResult--;
		}
		if (day === todayDay && month === todayMonth) {
			monthResult++;
			yearResult++;
		}

		if (todayMonth >= month) {
			monthResult = todayMonth - month;
		} else {
			monthResult = 12 + todayMonth - month;
			yearResult--;
		}

		setDays(dayResult);
		setMonths(monthResult);
		setYears(yearResult);
	};

	const [days, setDays] = useState('--');
	const [months, setMonths] = useState('--');
	const [years, setYears] = useState('--');

	return (
		<>
			<StyledTextCont>
				<StyledInputCont>
					<StyledLabel>DAY</StyledLabel>
					<StyledInput
						placeholder='DD'
						onChange={e => setDay(e.target.value)}
					></StyledInput>
				</StyledInputCont>
				<StyledInputCont>
					<StyledLabel>MONTH</StyledLabel>
					<StyledInput
						placeholder='MM'
						onChange={e => setMonth(e.target.value)}
					></StyledInput>
				</StyledInputCont>
				<StyledInputCont>
					<StyledLabel>YEAR</StyledLabel>
					<StyledInput
						placeholder='YYYY'
						onChange={e => setYear(e.target.value)}
					></StyledInput>
				</StyledInputCont>
			</StyledTextCont>
			<StyledSeparator>
				<StyledSeparatorLine />
				<StyledSeparatorContImg
					onClick={() =>
						handleTodayDate(day, month, year, setDay, setMonth, setYear)
					}
				>
					<StyledSeparatorImg src='./images/icon-arrow.svg' />
				</StyledSeparatorContImg>
			</StyledSeparator>
			<StyledH1>
				<StyledSpan>{years}</StyledSpan> years
			</StyledH1>
			<StyledH1>
				<StyledSpan>{months}</StyledSpan> months
			</StyledH1>
			<StyledH1>
				<StyledSpan>{days}</StyledSpan> days
			</StyledH1>
		</>
	);
};

export default Container;
