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
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from './Orders'

const promise  = loadStripe("pk_test_51LCk3iSG6YLF8goeCnSlQ38KUj95IEr9kFcFXy9iT0w3kEZP7iHrqdBVex7R9CL7qtJrhGO0fmc0ikhQAO4eAqxH007oKiIiQp");
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
        <Route exact path="/payment" element={<Elements stripe={promise}><Payment/></Elements>} />
        {/* <Route exact path="/payment" element={< h1> Heelo</h1>} /> */}
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/orders" element={<Orders/>} />
        <Route exact path="/checkout" element={ <Checkout/>}/>
        <Route exact path="/" element={ <Home/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
