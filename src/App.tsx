import { useState } from 'react';
import './App.css';
import CartList from './screens/CartList';
import ItemList from './screens/ItemList';
import { useAppSelector } from './store/hooks';
import icon from './docs/icon.png'

function App() {
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const cartList = useAppSelector(state => state.item.cartItems);

  return (
    <div className="App">
      <div className='flex header p-5 mb-5 mt- text-start text-slate-500 md:text-3xl text-2xl font-bold bg-slate-300 ps-12'>
        <img src={icon} alt='icon' className='w-10 h-10 mx-5' />
        <h1 className='text-slate-700'>Ceylon Cart</h1>
      </div>
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
