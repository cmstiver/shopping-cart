import React from 'react';

function Cart(props) {
  return (
    <div id="cart-items" className="card">
      {props.itemsInCart.map((item) => (
        <div key={item.key} data-key={item.key}>
          {`${item.name} | $${item.price} | x${item.quantity}`}
          <div className="addsubtract">
            <button type="button" onClick={props.changeQuantity}>
              -
            </button>
            <button type="button" onClick={props.changeQuantity}>
              +
            </button>
          </div>
        </div>
      ))}
      <div id="cart-total">
        Total: $
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
