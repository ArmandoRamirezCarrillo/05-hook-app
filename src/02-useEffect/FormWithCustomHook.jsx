// import { useEffect } from "react"
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  
  const {formState, onInputChamge, onResetForm, username, email, password} = useForm({
    username: '',
    email: '',
    password: ''
  });

  // const {username, email, password} = formState

  // const [formState, setFormState] = useState({
  //   username: '',
  //   email: '',
  //   password: ''
  // });

  // const {username, email, password} = formState;

  // const onInputChamge = ({target}) => {
  //   const {name, value} = target;
  //   setFormState({
  //     ...formState,
  //     [name]: value
  //   });
  // }

  // useEffect(()=>{
    // console.log("UseEffect Called!");
  // },[]);

  // useEffect(()=>{
    // console.log("formState changed!!");
  // },[formState]);

  // useEffect(()=>{
    // console.log("email changed!!");
  // },[email]);

  return (
    <>
        <h1>Formulario con Custom hook</h1>
        <hr />
        <input type="text" className="form-control" placeholder="userName" name="username" value={username} onChange={onInputChamge} />
        <input type="email" className="form-control mt-2" placeholder="armando@google.com" name="email"  value={email} onChange={onInputChamge}/>
        <input type="password" className="form-control mt-2" placeholder="Password" name="password"  value={password} onChange={onInputChamge}/>
        <button onClick={ onResetForm } className="btn btn-primary mt-2">Reset</button>
    </>
  )
}
