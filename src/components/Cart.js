import React from 'react';

function Cart(props) {
  return (
    <div>
      {props.itemsInCart.map((item) => (
        <div key={item.key} data-key={item.key}>
          {`${item.name} | ${item.price} | x${item.quantity}`}
          {' '}
          <button type="button" onClick={props.changeQuantity}>
            -
          </button>
          <button type="button" onClick={props.changeQuantity}>
            +
          </button>
        </div>
      ))}
      <div>
        {parseFloat(
          props.itemsInCart.reduce(
            (accumulator, currentValue) => accumulator + currentValue.price * currentValue.quantity,
            0,
          ),
        ).toFixed(2)}
      </div>
    </div>
  );
}

export default Cart;
