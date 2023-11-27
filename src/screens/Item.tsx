import React from 'react';
import { useAppSelector } from '../store/hooks';
// import { decrement, increment } from '../features/item/itemSlice';

const Items = () => {
    // const dispatch = useAppDispatch();
    // const value = useAppSelector((state) => state.item.value);

    // const handleIncrease = () => {
    //   dispatch(increment());
    // }

  const items = useAppSelector((state) => state.item.items)
console.log(items)
  return (
    <div>

        {/* <button onClick={() => dispatch(decrement())}>helooo {value}</button>
        <button onClick={handleIncrease}>{value}</button> */}
    </div>
  )
}

export default Items