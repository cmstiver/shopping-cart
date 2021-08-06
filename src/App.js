import React, { useState } from 'react';
import {
  BrowserRouter, Switch, Route, Link,
} from 'react-router-dom';
import Cart from './components/Cart';
import Homepage from './components/Homepage';
import Shop from './components/Shop';
import banner from './imgs/banner.jpg';
import './style/style.scss';

const App = () => {
  const [itemsInCart, setCart] = useState([]);

  function changeQuantity(e) {
    const array = [...itemsInCart];
    const index = array
      .map((item) => item.key)
      .indexOf(e.target.parentNode.parentNode.getAttribute('data-key'));
    if (index !== -1) {
      if (e.target.textContent === '+') {
        array[index].quantity += 1;
      } else if (array[index].quantity <= 1) {
        array.splice(index, 1);
      } else {
        array[index].quantity -= 1;
      }
    }
    setCart(array);
  }

  function addToCart(newItem) {
    if (itemsInCart.some((itemInCart) => itemInCart.key === newItem.key)) {
      return;
    }
    const itemToAdd = { ...newItem, quantity: 1 };
    setCart((prevCart) => [...prevCart, itemToAdd]);
  }

  return (
    <BrowserRouter>
      <div id="top">
        <img src={banner} alt="banner" />
        <nav id="topnav">
          <div className="link">
            <Link to="/shopping-cart/">Home</Link>
          </div>
          <div className="link">
            <Link to="/shopping-cart/shop">Shop</Link>
          </div>
          <div className="link">
            <Link to="/shopping-cart/cart">
              Cart (
              {itemsInCart.length}
              )
            </Link>
          </div>
        </nav>
      </div>
      <div id="main">
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/shop">
            <Shop addToCart={addToCart} />
          </Route>
          <Route exact path="/cart">
            <Cart itemsInCart={itemsInCart} changeQuantity={changeQuantity} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
