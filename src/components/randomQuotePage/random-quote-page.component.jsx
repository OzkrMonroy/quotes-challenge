import { useEffect, useState } from "react";
import RandomQuote from "../randomQuote/random-quote.component";
import { AppContainer, GetRandomQuoteButton } from "./random-quote-page.styles";

const RandomQuotePage = () => {
  const [quote, setQuote] = useState(null);

	useEffect(() => {
    const quoteFromLS = JSON.parse(localStorage.getItem("randomQuote"));
    if(quoteFromLS){
      setQuote(quoteFromLS)
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
    localStorage.setItem("randomQuote", JSON.stringify(quote));
		console.log("I'm executing");
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
				<p>Cargando</p>
			)}
		</AppContainer>
	);
}

export default RandomQuotePage