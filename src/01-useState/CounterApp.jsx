import { useState } from 'react'

export const CounterApp = () => {
  
  const [state, setCounter] = useState({
    counter1: 0,
    counter2: 0,
    counter3: 0
  });

  const {counter1, counter2, counter3} = state;
  
    return (
    <>
        <h1>Counter1: {counter1}</h1>
        <h1>Counter2: {counter2}</h1>
        <h1>Counter3: {counter3}</h1>
        <hr />

        <button 
            className='btn btn-primary' 
            onClick={
                ()=>setCounter({
                    counter1: counter1+ 1,
                    counter2: counter2 + 2,
                    counter3: counter3 + 3 
                })
            }>+1</button>
    </>
  )
}
