import "./App.css";
import styled from "styled-components";
import PageTitle from "./comps/common/PageTitle";
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
	display: flex;
`;

const Card = styled.div`
	display: flex;
	width: 80px;
	height: 80px;
	border: 1px solid ${colors.cardBorder};
	border-radius: 5px;
	padding: 10px;
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
			</CardContainer>
		</MainContainer>
	);
}

export default App;
