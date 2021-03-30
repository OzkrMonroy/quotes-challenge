import { useEffect, useState } from "react";
import RandomQuote from "../randomQuote/random-quote.component";
import Spinner from "../spinner/spinner.component";
import { AppContainer, GetRandomQuoteButton } from "./random-quote-page.styles";

const RandomQuotePage = () => {
  const [quote, setQuote] = useState(null);

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
		const response = await fetch(
			"https://quote-garden.herokuapp.com/api/v3/quotes/random"
		);
		const quote = await response.json();
		setQuote(quote);
		sessionStorage.setItem("randomQuote", JSON.stringify(quote));
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
				<Spinner/>
			)}
		</AppContainer>
	);
}

export default RandomQuotePage