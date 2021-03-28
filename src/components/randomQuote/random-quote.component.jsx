import { Quote, QuoteContainer, QuoteFooterLink, QuoteFooterContainer } from "../styledComponents/quote.styles";

const RandomQuote = ({quote}) => {
  const {quoteText, quoteAuthor, quoteGenre } = quote.data[0];

  return (
    <QuoteContainer>
      <Quote marginBottom={2}>"{quoteText}"</Quote>
      <QuoteFooterLink to={`/${encodeURI(quoteAuthor)}`}>
        <QuoteFooterContainer>
          <p>{quoteAuthor}</p>
          <span>{quoteGenre}</span>
        </QuoteFooterContainer>
      </QuoteFooterLink>
    </QuoteContainer>
  )
}

export default RandomQuote;