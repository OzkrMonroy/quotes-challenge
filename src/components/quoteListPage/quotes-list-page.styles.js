import styled from "@emotion/styled"
import device from "../../utils/cssBreakpoints"

export const QuoteListContainer = styled.div`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  padding-top: 4rem;

  @media ${device.mobileL}{
    width: 80%;
  }
  @media ${device.laptop}{
    width: 60%;
  }
`
export const TitleList = styled.h1`
  display: inline-block;
  margin-bottom: 8rem;
  padding-left: 2.4rem;
  color: #333;
  position: relative;
  
  &::after {
    content: ${props => props.counter ? props.counter : '0'};
    font-size: 1rem;
    border-radius: 50%;
    display: inline-block;
    padding: .25rem .68rem .5rem .7rem;
    background: #333;
    color: white;
    position: absolute;
    margin-left: .5rem;
    top: -.5rem;
  }

  @media ${device.mobileL}{
    padding-left: 3.4rem;
  }

`
export const QuotesCountContainer = styled.span`
  font-size: 1rem;
  border-radius: 50%;
  display: inline-block;
  padding: .2rem .55rem;
  background: #333;
  color: white;
  position: absolute;
  top: -.2rem;
  left: 17.5rem;
`

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const PreviousPage = styled.span`
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  background-image: url('/arrow_left.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  cursor: pointer;
`
export const NextPage = styled.span`
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  background-image: url('/arrow_right.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  cursor: pointer;
`