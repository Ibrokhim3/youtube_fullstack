import "./login-page.css";
import signInImage from "../../assets/img/signin-image.jpg";

export const Login = () => {
  return (
    <div class="container">
      <div class="wrapper sign-in">
        <form action="#" class="site-form">
          <h1 class="title">Sign in</h1>
          <label>
            <span class="zmdi zmdi-account"></span>
            <input type="text" id="usernameInput" placeholder="Your name" />
          </label>
          <label>
            <span class="zmdi zmdi-lock"></span>
            <input type="password" id="passwordInput" placeholder="Password" />
            <button
              class="zmdi zmdi-eye"
              id="showButton"
              type="button"
            ></button>
          </label>
          <input type="submit" value="Log in" id="submitButton" />
        </form>
        <a href="./register.html" class="sign-link">
          Create an account
        </a>
        <img src={signInImage} alt="signin-image" class="signin-image" />
      </div>
    </div>
  );
};
