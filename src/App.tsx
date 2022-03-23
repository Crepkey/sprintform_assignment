import "./App.css";
import styled from "styled-components";
import PageTitle from "./comps/common/PageTitle";

const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100vh;
	width: 100vw;
`;

function App() {
	return (
		<MainContainer>
			<PageTitle text={"FIZZ BUZZ FINDER"} />
		</MainContainer>
	);
}

export default App;
