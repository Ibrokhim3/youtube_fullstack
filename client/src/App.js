import "./App.css";
import { Routes } from "./routes/config-routes.js";
import { Admin } from "./pages/admin-page/admin-page";
import { Login } from "./pages/login-page/login-page";
import { Main } from "./pages/main-page/main-page";
import { Register } from "./pages/register-page/register-page.js";

function App() {
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
