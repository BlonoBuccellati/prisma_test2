import { useDispatch, useSelector } from 'react-redux';
import { add, minus } from '../store/modules/counter';
const Button = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const clickHandler = () => {
    const action = calcType === '+'
  }
  return (
    <div>
      <button>button</button>
    </div>
  );
};
export default Button;
