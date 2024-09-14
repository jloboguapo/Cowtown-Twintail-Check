import React, { useState, useEffect } from 'react';

const Caller = () => {
  const [deals, setDeals] = useState('Searching for deals');
  const [quantity, setQuantity] = useState(0);

  const dealCheck = Array.isArray(deals);
  const dealArray = dealCheck && deals;
  const joinedDeals =
    dealCheck &&
    dealArray
      .map(chars => chars.replace('\n\n', '\n'))
      .map(chars => chars.replace('\n', ''))
      .join('');

  const callMyCowtownBoys = async () => {
    const response = await fetch(
      'https://corsproxy.io/?https://www.cowtownskateboards.com/shoes/mens-cid-10?Start=17&viewall=1&SortBy=PriceL&Brand=Show%20All%20Brands&Size=12'
    );
    const data = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, 'text/html');

    const getDeals = priceRange =>
      Array.from(doc.querySelectorAll('.product-description > .price'))
        .filter(price => price.innerText.match(priceRange))
        .map(price => price.parentElement.innerText);

    const shoes = getDeals(/\n\$[0123].\.../);

    setDeals(shoes);
    setQuantity(shoes.length);
  };

  useEffect(() => {
    callMyCowtownBoys();
  }, []);

  useEffect(() => {
    dealCheck && setDeals(`${joinedDeals}`);
  }, [dealCheck]);

  return (
    <h2>
      {(deals && `Found ${quantity} deals under $40\n\n\n${deals}`) ||
        'No deals right now!'}
    </h2>
  );
};

export default Caller;
