import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Navbar from "./navbar.jsx";
import Nav1 from "./nav1.jsx";
import First from "./Props Example/First.jsx";
// import Profile from "./profile.jsx";
import Profile from "./StateExamples/profile.jsx";
import Second from "./Props Example/Second.jsx";
// import Home from './Home.jsx'
// import { Second } from './Home.jsx'

// let myObj = {
//   address: "ktm",
//   age: 23,
//   fullName: "rams"
// }
// let profile = {
//   username:"Samit Shrestha",
//   email:"shrestha@gmail.com",
//   age:18,
//   address:"Bhaktapur",
// };
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Navbar /> */}
    <Nav1 />
    {/* <First address={"BKT"} age={33} fullName="motorcycle" /> */}
    {/* <First {...myObj} /> */}
    <Profile />
    {/* <App /> */}
    {/* <Second /> */}
    {/* <Home />   */}
  </StrictMode>
);
