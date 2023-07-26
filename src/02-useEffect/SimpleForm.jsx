import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {
  
  const [formState, setFormState] = useState({
    username: 'armando',
    email: 'armando@google.com'
  });

  const {username, email} = formState;

  const onInputChamge = ({target}) => {
    const {name, value} = target;
    setFormState({
      ...formState,
      [name]: value
    });
  }

  useEffect(()=>{
    // console.log("UseEffect Called!");
  },[]);

  useEffect(()=>{
    // console.log("formState changed!!");
  },[formState]);

  useEffect(()=>{
    // console.log("email changed!!");
  },[email]);

  return (
    <>
        <h1>Simple Form</h1>
        <hr />
        <input type="text" className="form-control" placeholder="userName" name="username" value={username} onChange={onInputChamge} />
        <input type="email" className="form-control mt-2" placeholder="armando@google.com" name="email"  value={email} onChange={onInputChamge}/>
        {
          (username === 'armando2') && <Message/>
        }
    </>
  )
}
