import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import ManageItems from "./components/ManageItems/ManageItems";
import AddItems from "./components/AddItems/AddItems";
import Footer from "./components/Footer/Footer";
import Update from "./components/Update/Update";

function App() {
  return (
    <div className="mb-5">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/signin" element={<SignIn></SignIn>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route
          path="/forgetpassword"
          element={<ForgotPassword></ForgotPassword>}
        ></Route>
        <Route
          path="/manageitems"
          element={<ManageItems></ManageItems>}
        ></Route>
        <Route path="/additems" element={<AddItems></AddItems>}></Route>
        <Route path="/myitems" element={<AddItems></AddItems>}></Route>
        <Route path="/inventory/:id" element={<Update></Update>}></Route>
      </Routes>
    </div>
  );
}

export default App;
