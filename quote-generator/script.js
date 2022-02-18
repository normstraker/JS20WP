let apiQuotes = [];

// show new quote
function newQuote() {
  // pick a random quote from API quotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  console.log(quote);
}

// get quotes from API
async function getQuotes() {
  const apiUrl = 'https://type.fit/api/quotes';
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    // console.log(apiQuotes[16]);
    newQuote();
  } catch (error) {
    // catch error here
  }
}

// on load
getQuotes();