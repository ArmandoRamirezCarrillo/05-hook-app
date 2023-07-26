import { useCounter } from '../hooks/useCounter'

export const CounterWithCustomHook = () => {
  
    const { counter, increment, decrement, reset } = useCounter();
  
    return (
    <>
        <h1 className={(counter < 10 ? 'alert alert-danger' : 'alert alert-success')}>Counter With Hook: {counter}</h1>
        <hr />

        <button className="btn btn-primary"  disabled ={(counter > 50 ? true : false)} onClick={()=>increment(2)}>+1</button>
        <button className="btn btn-light" onClick={reset}>Reset</button>
        <button className="btn btn-danger" disabled ={(counter <= 10 ? true : false)} onClick={()=>decrement(2)}>-1</button>
    </>
  )
}
