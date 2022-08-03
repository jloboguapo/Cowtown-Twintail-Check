import React, { useState, useEffect } from 'react';

const Caller = () => {
  const [decks, setDecks] = useState('');
  const [decksFromFirstApi, setDecksFromFirstApi] = useState(null);
  const [decksFromSecondApi, setDecksFromSecondApi] = useState(null);

  const deckCheck = decksFromFirstApi && decksFromSecondApi;
  const deckArray = deckCheck && decksFromFirstApi.concat(decksFromSecondApi);
  const joinedDecks =
    deckCheck && deckArray.length > 2
      ? [
          deckArray.slice(0, -2).join(', the '),
          deckArray.slice(-2).join(', and the '),
        ].join(', the ')
      : deckCheck && deckArray.join(' and the ');

  const firstApi =
    'https://www.cowtownskateboards.com/skateboarding/decks-cid-90?Start=1&Sortby=Newest&Brand=Krooked&Size=Show%20All%20Sizes';
  const secondApi =
    'https://www.cowtownskateboards.com/skateboarding/decks-cid-90?Start=17&SortBy=Newest&Brand=Krooked&Size=Show%20All%20Sizes';

  const callMyCowtownBoys = async api => {
    const proxy = `https://corsproxy.io/?`;
    const response = await fetch(`${proxy}${api}`, {
      headers: {
        Accept: 'text/html',
      },
    });
    const data = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, 'text/html');
    const productNames = Array.from(doc.querySelectorAll('.product-shortname'))
      .filter(name => name.innerText.toLowerCase().includes('twin'))
      .map(name => name.innerText);

    api === firstApi
      ? productNames.length
        ? setDecksFromFirstApi(productNames)
        : setDecksFromFirstApi([])
      : productNames.length
      ? setDecksFromSecondApi(productNames)
      : setDecksFromSecondApi([]);
  };

  useEffect(() => {
    callMyCowtownBoys(firstApi);
    callMyCowtownBoys(secondApi);
  }, []);

  useEffect(() => {
    deckCheck && setDecks(joinedDecks);
  }, [deckCheck]);

  return <h2>{(decks && `the ${decks}`) || 'No decks yet!'}</h2>;
};

export default Caller;
