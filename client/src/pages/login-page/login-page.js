import "./login-page.css";
import signInImage from "../../assets/img/signin-image.jpg";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  let userToken = "";

  const handleLogSubmit = (evt) => {
    evt.preventDefault();

    const user = {
      username: evt.target.username.value,
      password: evt.target.password.value,
    };

    fetch("http://localhost:3005/youtube/login", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "Application/json",
      },
    })
      .then((res) => {
        if (res.status === 201) {
          return res.json();
        }
        return Promise.reject(res);
      })
      .then(async (data) => {
        alert("You're logged in");
        const { token } = data;
        userToken = token;
        localStorage.setItem("token", userToken);
        navigate("/youtube");
      })
      .catch((err) => {
        alert("Something went wrong");
      });
  };

  return (
    <div class="container">
      <div class="wrapper sign-in">
        <form onSubmit={handleLogSubmit} class="site-form">
          <h1 class="title">Sign in</h1>
          <label>
            <span class="zmdi zmdi-account"></span>
            <input
              name="username"
              type="text"
              id="usernameInput"
              placeholder="Your name"
            />
          </label>
          <label>
            <span class="zmdi zmdi-lock"></span>
            <input
              name="password"
              type="password"
              id="passwordInput"
              placeholder="Password"
            />
            <button
              class="zmdi zmdi-eye"
              id="showButton"
              type="button"
            ></button>
          </label>
          <input type="submit" value="Log in" id="submitButton" />
        </form>
        <Link to={"/registration"} class="sign-link">
          Create an account
        </Link>
        <img src={signInImage} alt="signin-image" class="signin-image" />
      </div>
    </div>
  );
};
