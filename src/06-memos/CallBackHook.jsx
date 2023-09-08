import { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement'

export const CallBackHook = () => {
  
    const [counter, setcounter] = useState(10);

    const increment = useCallback(
      (value) => {
        setcounter((c) => c + value);
      },
      [],
    )
    
    
    // const increment = () =>{
    //     setcounter(counter + 1);
    // }

    return (
    <>
        <h1>Use Call Hook: {counter}</h1>
        <hr />
        <ShowIncrement increment={increment}></ShowIncrement>
    </>
  )
}
