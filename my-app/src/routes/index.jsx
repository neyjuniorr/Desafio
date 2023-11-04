import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Home from '../pages/Home';
import Signin from "../pages/Signin";
import Signup from "../pages/Signup"


const Private = ({ Item }) => {
  const { signed } = useAuth();

  return signed > 0 ? <Item /> : <Signin />;
};

function AppRoutes() {
  return (
    <BrowserRouter>
    <Fragment>
      <Routes>
        <Route path="/Home" element={<Private Item={Home} />}></Route>
        <Route path="/" element={<Signin />} />
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
      </Fragment>
    </BrowserRouter>
  )
}

export default AppRoutes;