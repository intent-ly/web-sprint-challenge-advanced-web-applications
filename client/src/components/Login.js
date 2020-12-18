import React, { useState } from "react";
import { axiosWithAuth } from "../utilities/AxiosAuthorization"

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [login, setLogin] = useState(
    {
      username: '',
      password: ''
    }
  )
  
  const handleChange = e => {
    setLogin({
      
        ...login,
        [e.target.name]: e.target.value
      }
    );
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth().post('http://localhost:5000/api/login', login)
      .then(req => {
        localStorage.setItem("token", req.data.payload);
        props.history.push("/bubblepage");
      })
      .catch(err => {
        console.log(err)
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={props.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={props.password}
          onChange={handleChange}
        />
        <button>Log in</button>
      </form>
    </div>
  )

}

export default Login;
