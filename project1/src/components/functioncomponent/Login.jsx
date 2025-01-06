import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const login = async(event)=>{
    event.preventDefault()
    var req = await axios.post("http://localhost:3001/login",{
      email,password
    })
    console.log(req.data)
    var isLoginSuccessful = req.data.isLoggedIn
    console.log(isLoginSuccessful);
    if(isLoginSuccessful){
      navigate('/use-memo')
    }
    else{
      console.log("Inside Else");
      var message = req.data.message
      console.log(message);
      alert(message);
    }
  } 
  return (
    <form onSubmit={login}>
      <h2>Login</h2>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;