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
	outline: none;
	background: transparent;
	color: #333;
	font-size: 0.85rem;
	font-family: "Raleway", sans-serif;
	cursor: pointer;

	&::after {
    content: '';
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    background-image: url('/sync.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
		margin-left: .3rem;
  }
`