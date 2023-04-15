import "./register-page.css";
import signUpImg from "../../assets/img/signup-image.jpg";

export const Register = () => {
  return (
    <div class="container">
      <div class="wrapper">
        <h1 class="title">Registration Page</h1>
        <form action="#" class="site-form">
          <label>
            <span class="zmdi zmdi-account"></span>
            <input
              type="text"
              id="usernameInput"
              placeholder="Your name"
              required
            />
          </label>
          <label>
            <span class="zmdi zmdi-lock"></span>
            <input
              type="password"
              id="passwordInput"
              placeholder="Password"
              required
            />
            <button
              class="zmdi zmdi-eye"
              type="button"
              id="showButton"
            ></button>
          </label>
          <label class="custom-upload">
            <span class="zmdi zmdi-upload"></span>
            <span class="file-name">click upload a avatar picture</span>
            <input type="file" id="uploadInput" accept="image/*" />
          </label>
          <input type="submit" value="Register" id="submitButton" />
        </form>
        <a href="./login.html" class="sign-link">
          I am already member
        </a>
        <img src={signUpImg} alt="signup-image" class="signup-image" />
      </div>
    </div>
  );
};
