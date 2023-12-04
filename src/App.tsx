import './App.css';
import CartList from './screens/CartList';
import ItemList from './screens/ItemList';
import { useAppSelector } from './store/hooks';

function App() {
  const cartList = useAppSelector(state => state.item.cartItems);
  console.log("heeeee", cartList);

  return (
    <div className="App">
      {cartList.length > 0 ? (
        <div className='flex flex-row'>
          <div>
            <ItemList />
          </div>
          <div className='cart-nav'>
            <CartList cartList={cartList}/>
          </div>
        </div>
      ) : (
        <ItemList />
      )}
    </div>
  );
}

export default App;
