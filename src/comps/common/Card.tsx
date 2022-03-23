/* Interfaces */
import { ColorCodeType, fizzBuzzValues } from "../../utils/interfaces";

/* Styles */
import styled from "styled-components";
import { colors } from "../../utils/colors";

const MainContainer = styled.div<{ fontColor: string }>`
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	color: ${({ fontColor }) => fontColor};
	border: 1px solid ${colors.cardBorder};
	border-radius: 5px;
	width: 50px;
	height: 50px;
	transition: all 0.3s ease;
	:hover {
		margin-left: 0;
		cursor: pointer;
		border-left: 3px solid ${colors.red};
	}
`;

interface CardProps {
	value: fizzBuzzValues;
}

export default function Card({ value }: CardProps) {
	const fontColor: ColorCodeType = (() => {
		switch (value) {
			case "Fizz":
				return colors.red;
			case "Buzz":
				return colors.blue;
			case "Fizz Buzz":
				return colors.orange;
			default:
				return colors.numberFont;
		}
	})();
	return <MainContainer fontColor={fontColor}>{value}</MainContainer>;
}
