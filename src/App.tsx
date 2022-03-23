import styled from "styled-components";
import PageTitle from "./comps/PageTitle";
import { colors } from "./utils/colors";
import { breakePoints } from "./utils/utils";

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

const Card = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
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

function App() {
	return (
		<MainContainer>
			<PageTitle>FIZZ BUZZ FINDER</PageTitle>
			<CardContainer>
				<Card>1</Card>
				<Card>Fizz</Card>
				<Card>3</Card>
				<Card>Buzz</Card>
				<Card>1</Card>
				<Card>Fizz Buzz</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>3</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>3</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>3</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>3</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>3</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>3</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>3</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>3</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>3</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>3</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>3</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>3</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
				<Card>1</Card>
			</CardContainer>
		</MainContainer>
	);
}

export default App;
