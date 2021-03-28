import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import device from '../../utils/cssBreakpoints';

export const QuoteContainer = styled.div`
  width: 90%;
	display: flex;
	align-items: center;
	flex-direction: column;

  @media ${device.mobileL} {
    width: 80%;
  }
  @media ${device.laptop}{
    width: 40%;
  }
`
export const Quote = styled.p`
  width: 100%;
	font-size: 1.5rem;
	text-align: justify;
	padding-left: 2rem;
	border-left: 0.4rem solid #f7df94;
	margin: 0;
	margin-bottom: ${props => props.marginBottom ? `${props.marginBottom}rem` : '0rem'};
	line-height: 2.1rem;
	padding-right: 1.5rem;

  @media ${device.mobileL}{
    padding-left: 3rem;
  }
`

export const QuoteFooterLink = styled(Link)`
  display: block;
	width: 100%;
	padding-left: 1.2rem;
  text-decoration: none;
  color: #333;

  &:hover div {
    background: #333;
    color: white;
    cursor: pointer;
  }

  @media ${device.mobileL}{
    padding-left: 2.2rem;
  }
`

export const QuoteFooterContainer = styled.div`
  padding-top: 1.5rem;
	padding-bottom: 1.5rem;
	padding-left: 1.2rem;
	transition: all 0.2s ease-in;

  & p {
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1.5rem;
  }
  & span {
	  color: #828282;
  }
`