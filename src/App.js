import logo from './logo.svg';
import './App.css';
import { useReducer, useState } from 'react'

function reducer({state}){
  switch(state){
    case 'PRESSED_ONCE':
      return {
        state: 'PRESSED_TWO'
      }
    case 'PRESSED_TWO':
      return {
        state: 'PRESSED_THREE'
      }
    case 'PRESSED_THREE':
      return {
        state: 'PRESSED_ONCE'
      }
  }
}

const Button = (props) => {
  const [counter, setCounter] = useState(0)

  const [state, dispatch] = useReducer(reducer, { 
    state: 'PRESSED_ONCE'
  })
  return (
    <div
      style={{
        color: props.color,
        textDecoration: props.underline ? 'underline' : undefined
      }}
      onClick={() => setCounter((c) => c + props.increment)}
    >
      <div onClick={() => dispatch()}>I am a button</div>
      <div>{state.state}</div>

    </div>
  )
}

function App() {
  const props = {
    increment: 2,
    underline: true,
    color: 'black'
  }

  //  jsx code -> React.createElement('Button)
  return (
    <div className="App">
      <Button {...props} color="blue"/>
      <Button {...props} color="black"/>
      <Button {...props} color="green"/>
    </div>
  );
}

export default App;
