import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import AuthProvider from "./Context/Context";
import Details from "./Components/Details/Details";
import PrivateRoute from "./Components/PrivetRoute/PrivetRoute";
import Doctor from "./Components/Doctor/Doctor";
import NotFound from "./Components/NotFound/NotFound";
import Signup from "./Components/Signup/Signup";
import About from "./Components/About/About";

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/doctor">
              <Doctor></Doctor>
            </Route>
            <PrivateRoute path="/details/:key">
              <Details></Details>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <Signup></Signup>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
