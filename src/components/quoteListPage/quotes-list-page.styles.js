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