import logo from './logo.svg'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './store/slices/counter/counterSlice';

function App() {

  const {miCounter} = useSelector(state => state.miCounter);
  const dispatch = useDispatch();
  const amount = 2;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>count is: {miCounter}</p>
        <p>
          <button type="button" onClick={() => dispatch(increment())}>
            Incrementar
          </button>
          <button type="button" onClick={() => dispatch(decrement())}>
            Decrementar
          </button>
          <button type="button" onClick={() => dispatch(incrementByAmount({amount}))}>
            Incrementar de a {amount}
          </button>
        </p>
      </header>
    </div>
  )
}

export default App
