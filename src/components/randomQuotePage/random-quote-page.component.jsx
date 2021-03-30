import { useEffect, useState } from "react";
import getQuotesData from "../../utils/getQuotesData";
import Error from "../error/error-component";
import RandomQuote from "../randomQuote/random-quote.component";
import Spinner from "../spinner/spinner.component";
import { AppContainer, GetRandomQuoteButton } from "./random-quote-page.styles";

const RandomQuotePage = () => {
  const [quote, setQuote] = useState(null);
	const [error, setError] = useState(false);

	useEffect(() => {
    const quoteFromSS = JSON.parse(sessionStorage.getItem("randomQuote"));
    if(quoteFromSS){
      setQuote(quoteFromSS)
    }else {
      getRandomQuote();
    }
	}, []);

	const getRandomQuote = async () => {
    setQuote(null)
		const { quotesData, error } = await getQuotesData("https://quote-garden.herokuapp.com/api/v3/quotes/random")
		setQuote(quotesData);
		setError(error)
		sessionStorage.setItem("randomQuote", JSON.stringify(quotesData));
	};

	return (
		<AppContainer>
			<GetRandomQuoteButton
				type="button"
				onClick={getRandomQuote}
			>
				Get random quote
			</GetRandomQuoteButton>
			{quote ? (
				<RandomQuote quote={quote}/>
			) : (
				<>
					{error ? <Error typeError={1}/> : <Spinner/>}
				</>
			)}
		</AppContainer>
	);
}

export default RandomQuotePage