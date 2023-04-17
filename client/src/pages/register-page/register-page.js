import "./register-page.css";
import signUpImg from "../../assets/img/signup-image.jpg";
import { useRef, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const [img, setImg] = useState("");

  const handleLoginSubmit = (evt) => {
    evt.preventDefault();

    const imageInput = document.getElementById("uploadInput");
    const imageFile = imageInput.files[0];

    const formData = new FormData();
    formData.append("username", evt.target.username.value);
    formData.append("password", evt.target.password.value);
    formData.append("img", imageFile);

    fetch("http://localhost:3005/youtube/registration", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        console.log("Image uploaded successfully");
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
      });
  };

  return (
    <div class="container">
      <div class="wrapper">
        <h1 class="title">Registration Page</h1>
        <form onSubmit={handleLoginSubmit} action="#" class="site-form">
          <label>
            <span class="zmdi zmdi-account"></span>
            <input
              type="text"
              id="usernameInput"
              placeholder="Your name"
              name="username"
              required
            />
          </label>
          <label>
            <span class="zmdi zmdi-lock"></span>
            <input
              type="password"
              id="passwordInput"
              name="password"
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
            <input name="img" type="file" id="uploadInput" accept="image/*" />
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
