/* Utils */
import { breakePoints } from "../utils/utils";

/* Styles */
import styled from "styled-components";
import { colors } from "../utils/colors";

const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	padding: 20px 0;
`;

const Title = styled.div`
	display: flex;
	text-align: center;
	justify-content: center;
	font-size: 1.7rem;
	font-weight: 500;
	color: ${colors.title};
	width: 100%;
`;

const TitleLine = styled.div`
	border-top: 3px ${colors.red} solid;
	margin-top: 10px;
	width: 40px;
`;

interface PageTitleProps {
	children: string;
}

export default function PageTitle({ children }: PageTitleProps) {
	return (
		<MainContainer>
			<Title>{children}</Title>
			<TitleLine />
		</MainContainer>
	);
}
