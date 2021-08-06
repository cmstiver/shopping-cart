import React from 'react';

function Shop(props) {
  const itemsInShop = [
    {
      name: 'Item #1',
      price: 2.99,
      key: '1',
    },
    {
      name: 'Item #2',
      price: 199.99,
      key: '2',
    },
    {
      name: 'Item #3',
      price: 10000,
      key: '3',
    },
  ];

  function sendToCart(e) {
    const array = [...itemsInShop];
    const index = array
      .map((item) => item.key)
      .indexOf(e.target.parentNode.getAttribute('data-key'));
    if (index !== -1) {
      props.addToCart(array[index]);
    }
  }

  return (
    <div>
      {itemsInShop.map((item) => (
        <div key={item.key} data-key={item.key}>
          <div>{item.name}</div>
          <div>{item.price}</div>
          <button type="button" onClick={sendToCart}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Shop;
