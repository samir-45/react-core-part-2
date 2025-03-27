import './App.css'
import Batsman from './batsMan';

function App() {

  function handleClick(){
    alert('I am clicked')
  }

  const adDNumber = (num) => {
    const newNum = num + 5;
    alert(newNum);
  }


  return (
    <>

      <h1>Vite + React</h1>

      <Batsman></Batsman>

{/* 
    <button onClick={handleClick}>Click me</button>

    <button onClick={() => adDNumber(5)}>Add Num</button> */}
    </>
  )
}

export default App
