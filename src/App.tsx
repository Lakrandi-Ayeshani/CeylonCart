import { useState } from 'react';
import './App.css';
import CartList from './screens/CartList';
import ItemList from './screens/ItemList';
import { useAppSelector } from './store/hooks';

function App() {
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const cartList = useAppSelector(state => state.item.cartItems);
  console.log("cartList", cartList);

  return (
    <div className="App">
      {cartList.length > 0 ? (
        <div className='flex flex-row'>
          <div>
            <ItemList totalPrice={totalPrice} setTotalPrice={setTotalPrice} styleClass="with-cart"/>
          </div>
          <div className='cart-nav'>
            <CartList cartList={cartList} totalPrice={totalPrice} setTotalPrice={setTotalPrice}/>
          </div>
        </div>
      ) : (
        <ItemList totalPrice={totalPrice} setTotalPrice={setTotalPrice} styleClass="without-cart"/>
      )}
    </div>
  );
}

export default App;
