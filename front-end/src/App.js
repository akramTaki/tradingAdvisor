import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "./Components/Login";
import Dashboard from "./routes/dashboard";
import SideBar from "./Components/SideBar";
import Market from "./routes/market";
import Account from "./routes/account";
import Portfolio from "./routes/portfolio";
import Trading from "./routes/trading";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="App">
        <LoginPage />
      </div>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <div className="App">
        <SideBar />
        <Dashboard />
      </div>
    ),
  },
  {
    path: "/market",
    element: (
      <div className="App">
        <SideBar />
        <Market />
      </div>
    ),
  },
  {
    path: "/account",
    element: (
      <div className="App">
        <SideBar />
        <Account />
      </div>
    ),
  },
  {
    path: "/portfolio",
    element: (
      <div className="App">
        <SideBar />
        <Portfolio />
      </div>
    ),
  },
  {
    path: "/trading",
    element: (
      <div className="App">
        <SideBar />
        <Trading />
      </div>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
