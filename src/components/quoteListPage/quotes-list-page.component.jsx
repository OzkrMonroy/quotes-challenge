import { useEffect, useState } from 'react';
import { Quote } from "../styledComponents/quote.styles"
import { QuoteListContainer, TitleList } from './quotes-list-page.styles'

const QuotesListPage = ({match}) => {
  const { quoteAuthor } = match.params;
  const [quotes, setQuotes] = useState(null)

  useEffect(() => {
    getQuoteByAuthor();
  }, [])

  const getQuoteByAuthor = async () => {
    const url = `https://quote-garden.herokuapp.com/api/v3/quotes?author=${quoteAuthor}&page=1&limit=10`
    const response = await fetch(url);
    const quotesData = await response.json();
    setQuotes(quotesData)
    console.log(quotesData);
  };

  return (
    <QuoteListContainer>
      <TitleList>{quoteAuthor}</TitleList>
      {quotes ? (quotes.data.map(quote => (
        <Quote key={quote._id} marginBottom={4}>"{quote.quoteText}"</Quote>
      ))) : (<p>Cargando</p>)}
    </QuoteListContainer>
  )
}

export default QuotesListPage