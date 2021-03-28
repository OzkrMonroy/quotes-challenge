import styled from "@emotion/styled";
import device from "../../utils/cssBreakpoints";

export const AppContainer = styled.div`
	min-height: 100vh;
	padding-top: 2.5rem;
	display: flex;
	align-items: center;
	justify-content: center;

	@media ${device.mobileL} {
		min-height: 120vh;
	}
	@media ${device.tablet}{
		padding-top: 0;
		min-height: 100vh;
	}
`
export const GetRandomQuoteButton = styled.button`
	position: fixed;
	top: 1rem;
	right: 3rem;
	border: none;
	background: transparent;
	color: #333;
	font-size: 0.85rem;
	font-family: "Raleway", sans-serif;
	cursor: pointer;
`