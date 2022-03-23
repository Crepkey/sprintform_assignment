import { useEffect, useState } from "react";

/* Comps */
import PageTitle from "./comps/PageTitle";

/* Utils */
import range from "lodash/range";

/* Interfaces */
import { fizzBuzzValues } from "./utils/interfaces";

/* Styles */
import styled from "styled-components";
import Card from "./comps/common/Card";

const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100vh;
	width: 100vw;
`;

const CardContainer = styled.div`
	display: grid;
	grid-gap: 30px;
	justify-content: center;
	grid-template-columns: repeat(auto-fill, 50px);
	width: 90%;
	min-height: 0;
	min-width: 0;
	overflow: auto;
	margin-bottom: 30px;
`;

const inputNumbers: number[] = range(1, 101, 1);

function App() {
	const [fizzBuzzValues, setFizzBuzzValues] = useState<fizzBuzzValues[]>([]);

	useEffect(() => {
		const fizzBuzzValues: fizzBuzzValues[] = calculateFizzBuzz(inputNumbers);
		setFizzBuzzValues(fizzBuzzValues);
	}, []);

	function calculateFizzBuzz(numbers: number[]): fizzBuzzValues[] {
		const result: fizzBuzzValues[] = [];
		for (const num of numbers) {
			if (num % 5 === 0 && num % 3 === 0) {
				result.push("Fizz Buzz");
				continue;
			}
			if (num % 5 === 0) {
				result.push("Buzz");
				continue;
			}
			if (num % 3 === 0) {
				result.push("Fizz");
				continue;
			}
			result.push(num);
		}

		return result;
	}

	/* With this line of code we can skip a useless render when the fizzBuzzValues array is empty */
	if (fizzBuzzValues.length === 0) return null;

	return (
		<MainContainer>
			<PageTitle>FIZZ BUZZ FINDER</PageTitle>
			<CardContainer>
				{fizzBuzzValues.map((num: fizzBuzzValues, index: number) => (
					/* 
            I know it's weird that I've used the index number as a key
            but in that case this is not a problem because it's unique and I am going to modify the list at all.
            But it's anti pattern in real apps.
          */
					<Card key={index} value={num} />
				))}
			</CardContainer>
		</MainContainer>
	);
}

export default App;
