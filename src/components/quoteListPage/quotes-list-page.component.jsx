import { useEffect, useState } from 'react';
import Spinner from '../spinner/spinner.component';
import { Quote } from "../styledComponents/quote.styles"
import { PaginationContainer, PreviousPage, QuoteListContainer, TitleList, NextPage } from './quotes-list-page.styles'

const QuotesListPage = ({match}) => {
  const { quoteAuthor } = match.params;
  const [quotes, setQuotes] = useState(null);
  const [nextPage, setNextPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [quotesCount, setQuotesCount] = useState(0)

  useEffect(() => {
    getQuoteByAuthor(1);
    // eslint-disable-next-line
  }, [])

  const getQuoteByAuthor = async (page) => {
    window.scroll({top: 0, left: 0, behavior: 'smooth'});

    const url = `https://quote-garden.herokuapp.com/api/v3/quotes?author=${quoteAuthor}&page=${page}&limit=10`
    try {
      const response = await fetch(url);
      const quotesData = await response.json();

      const {data, pagination: { currentPage, totalPages }, totalQuotes} = quotesData;

      setQuotes(data)
      setCurrentPage(currentPage);
      setTotalPages(totalPages);
      setQuotesCount(totalQuotes)
    } catch (error) {
      console.log(error);
    }
  };

  const handlePreviousPage = () => {
    const previousPage = nextPage - 1;
    getQuoteByAuthor(previousPage);
    setNextPage(previousPage)
  }

  const handleNextPage = () => {
    const newNextPage = nextPage + 1;
    getQuoteByAuthor(newNextPage)
    setNextPage(newNextPage)
  }

  return (
    <QuoteListContainer>
      <TitleList counter={`'${quotesCount}'`}>
        {quoteAuthor}
      </TitleList>
      {quotes ? (quotes.map(quote => (
        <Quote key={quote._id} marginBottom={4}>"{quote.quoteText}"</Quote>
      ))) : (
        <Spinner/>
      )}
      {quotes && (
        <PaginationContainer>
          {currentPage !== 1 && <PreviousPage onClick={handlePreviousPage}></PreviousPage>}
          <p>{currentPage}/{totalPages}</p>
          {currentPage !== totalPages && <NextPage onClick={handleNextPage}></NextPage>}
        </PaginationContainer>
      )}
    </QuoteListContainer>
  )
}

export default QuotesListPage