import React, { useState, useEffect } from 'react';

const Caller = () => {
  const [decks, setDecks] = useState('Searching for decks');
  const [quantity, setQuantity] = useState(0);

  const deckCheck = Array.isArray(decks);
  const deckArray = deckCheck && decks;
  const joinedDecks =
    deckCheck && deckArray.length > 2
      ? [
          deckArray.slice(0, -2).join(', the '),
          deckArray.slice(-2).join(', and the '),
        ].join(', the ')
      : deckCheck && deckArray.join(' and the ');

  const callMyCowtownBoys = async () => {
    const response = await fetch(
      'https://corsproxy.io/?https://www.cowtownskateboards.com/skateboarding/decks-cid-90?viewall=1'
    );
    const data = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, 'text/html');

    const getProductNames = shortname =>
      Array.from(doc.querySelectorAll('.product-shortname'))
        .filter(name => name.innerText.toLowerCase().includes(shortname))
        .filter(name => name.innerText.includes(8.5))
        .map(name => name.innerText);

    const productNamesIncludingTwin = getProductNames('twin');
    const productNamesIncludingHunny = getProductNames('hunny');

    const productNames = Array.from(
      productNamesIncludingTwin.concat(productNamesIncludingHunny)
    );

    setDecks(productNames);
    setQuantity(productNames.length);
  };

  useEffect(() => {
    callMyCowtownBoys();
  }, []);

  useEffect(() => {
    deckCheck && setDecks(`The ${joinedDecks}`);
  }, [deckCheck]);

  return (
    <h2>
      {(decks && `Found ${quantity} decks:\n\n\n${decks}`) || 'No decks yet!'}
    </h2>
  );
};

export default Caller;
