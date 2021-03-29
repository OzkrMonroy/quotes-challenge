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
  margin-bottom: 8rem;
  padding-left: 3.4rem;
  color: #333;
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