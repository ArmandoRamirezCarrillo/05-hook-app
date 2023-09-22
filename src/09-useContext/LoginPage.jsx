import { useContext } from 'react'
import { userContext } from './context/UserContext';

export const LoginPage = () => {
    
    const {user, setUser} = useContext(userContext);
    
    return (
        <>
            <h1>LoginPage</h1>
            <pre>
                {JSON.stringify(user, null, 3)}
            </pre>
            <button className='btn btn-primary' onClick={() => setUser({id:1, name: 'Armando', email: 'armando@armando.com'}) }>Establecer usuario</button>
        </>
      )
}
