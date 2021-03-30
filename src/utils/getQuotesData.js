const getQuotesData = async (url) => {
  try {
    const response = await fetch(url);
    const quotesData = await response.json();
    return {quotesData, error: false};
  } catch (error) {
    console.log(error);
    return {quotesData: null, error: true};
  }
}

export default getQuotesData