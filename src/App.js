import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from './Checkout'
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js"

const promise=loadStripe('pk_test_51LBy3ySGkPRDI6FcFdpWAT4HyGKim3p5ZqhcxX2P8o2kdNGLReRYwvXmoA65U72FDYmwZYOTTd0BcBu7nc9y4kKw00jUl9Cd2I');
function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
        <Route exact path="/payment" stripe={promise} element={<Payment/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/checkout" element={ <Checkout/>}/>
        <Route exact path="/" element={ <Home/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
