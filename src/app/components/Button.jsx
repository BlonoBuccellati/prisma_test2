import { useDispatch, useSelector } from 'react-redux';
import { add, minus } from '../store/modules/counter';
const Button = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const clickHandler = () => {
    const action = calcType === '+' ? add(2) : minus(2);
    dispatch(action);
  };
  return (
    <div>
      <button onClick={clickHandler}>button</button>
    </div>
  );
};
export default Button;
