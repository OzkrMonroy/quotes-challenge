import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import device from "../../utils/cssBreakpoints";

const ErrorContainer = styled.div`
  min-height: ${props => props.minHeight === "error" ? 'auto': '100vh'};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & p {
    text-align: center;
  }
`

const ErrorImage = styled.img`
  display: inline-block;
  width: 65%;
  object-position: center;
  object-fit:cover;
  margin-bottom: 1rem;

  @media ${device.mobileL}{
    width: 50%;
  }
  @media ${device.laptop}{
    width: 30%;
  }
`
const ErrorLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: #333;
  text-align: center;
`

const Error = ({typeError}) => {
  const image = typeError === 1 ? "error" : "404";
  const description = typeError === 1 ? "Ha ocurrido un error. Intenta recargar la página" : "Parece que te has perdido, pulsa en volver.";

  return(
    <ErrorContainer minHeight={image}>
      <ErrorImage src={`/${image}.svg`} alt="No se ha podido obtener una respuesta"/>
      <p>{description}</p>
      {typeError !== 1 && <ErrorLink to="/">Volver</ErrorLink>}
    </ErrorContainer>
  )
}

export default Error