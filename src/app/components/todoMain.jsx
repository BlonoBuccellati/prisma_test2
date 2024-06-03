'use client';
import { Provider } from 'react-redux';
import store from '../store';
import Button from './Button';
const TodoMain = () => {
  return (
    <>
      <Provider store={store}>
        <Button />
      </Provider>
    </>
  );
};

export default TodoMain;
