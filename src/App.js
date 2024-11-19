import "./App.css";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./components/pages/Checkout";
import Login from "./components/pages/Login";
import Payment from "./components/pages/Payment";
import { useEffect } from "react";
import { auth } from "./components/pages/firebase";
import { useStateValue } from "./components/StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51KceBjKoJalBr4mde2EA4bpfvJkRT5vq5xNeBNvPanRMQlLpksY7hUxeTifDYA9ERWxxEQRX11qKzqo4HwtbDjlc00zFaM8wpg"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // only run once when app component loads

    auth.onAuthStateChanged((authUser) => {
      console.log(`The user is: ${authUser}`);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="payment"
            element={
              <>
                <Header />

                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          ></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          ></Route>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
