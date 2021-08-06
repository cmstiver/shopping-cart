import React from 'react';

function importAll(r) {
  const images = {};
  r.keys().forEach((item, index) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
}
const images = importAll(require.context('../imgs/items', false, /\.(png|jpe?g|svg)$/));

console.log(images['25-100 Piece Stationery Grab Bag.jpg'].default);

function Shop(props) {
  const itemsInShop = [
    {
      name: '25-100 Piece Stationery Grab Bag',
      price: 2.99,
      key: '1',
    },
    {
      name: 'A Letter from the Stars',
      price: 199.99,
      key: '2',
    },
    {
      name: 'Sticker Grab Bag',
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
          <img src={images[`${item.name}.jpg`].default} alt={item.name} />
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
