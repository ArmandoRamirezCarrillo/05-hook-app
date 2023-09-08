import { useMemo } from 'react';
import { useState } from 'react'
import { useCounter } from '../hooks'

const hevayStuff = (iterationNumber = 100) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log('Ahi vamos');
  }

  return `${iterationNumber} iteraciones realizadas`;
}

export const MemoHook = () => {
  
    const { counter, increment } = useCounter(4000)
    const [show, setShow] = useState(true)

  const meorizeValue = useMemo(() => hevayStuff(counter), [counter])

    return (
    <>

        <h1>Counter <small>{counter}</small></h1>
        <hr />
        <h4>{meorizeValue}</h4>
        <button className="btn btn-primary" onClick={() => increment()}>+1</button>

        <button className='btn btn-outline-primary' onClick={() => setShow(!show)}>{JSON.stringify(show)}</button>

    </>
  )
}
