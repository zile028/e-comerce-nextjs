import React, { useEffect, useRef, useState } from "react";
import Router from "next/router";
import { setParsedCookie } from "../util/cookies";

export default function Checkout() {
  const cardSelect = useRef();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [adress, setAdress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const [card, setCard] = useState("");
  const [expiration, setExpiration] = useState("");
  const [secCode, setSecCode] = useState("");
  const [errForm, setErrForm] = useState("");

  useEffect(() => {
    setCard(cardSelect.current.value);
  }, []);

  const validationForm = () => {
    let err = false;
    !firstName && (err = true);
    !lastName && (err = true);
    !email && (err = true);
    !adress && (err = true);
    !city && (err = true);
    !postalCode && (err = true);
    !country && (err = true);
    !expiration && (err = true);
    !secCode && (err = true);
    setErrForm("All fileds is required!");
    return err;
  };

  const clearCookies = () => {
    setParsedCookie("diet", []);
  };

  const checkoutInfo = (e) => {
    e.preventDefault();
    if (!validationForm()) {
      clearCookies();
      Router.push("/thankyou");
    } else {
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 offset-1">
          <form onSubmit={checkoutInfo}>
            <input
              className="form-control mb-2"
              placeholder="firstname"
              onInput={(e) => {
                setFirstName(e.target.value);
              }}
            />
            <input
              className="form-control mb-2"
              placeholder="lastname"
              onInput={(e) => {
                setLastName(e.target.value);
              }}
            />
            <input
              className="form-control mb-2"
              type="email"
              placeholder="email"
              onInput={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              className="form-control mb-2"
              placeholder="address"
              onInput={(e) => {
                setAdress(e.target.value);
              }}
            />
            <input
              className="form-control mb-2"
              placeholder="city"
              onInput={(e) => {
                setCity(e.target.value);
              }}
            />
            <input
              className="form-control mb-2"
              placeholder="postal code"
              onInput={(e) => {
                setPostalCode(e.target.value);
              }}
            />
            <input
              className="form-control mb-2"
              placeholder="country"
              onInput={(e) => {
                setCountry(e.target.value);
              }}
            />
            <select
              ref={cardSelect}
              className="form-control mb-2"
              onChange={(e) => {
                setCard(e.target.value);
              }}
            >
              <option value="PayPal">PayPal</option>
              <option value="MasterCard">MasterCard</option>
              <option value="Visa">Visa</option>
            </select>
            <input
              className="form-control mb-2"
              type="date"
              placeholder="expiration date"
              onInput={(e) => {
                setExpiration(e.target.value);
              }}
            />
            <input
              className="form-control mb-2"
              placeholder="security code"
              onInput={(e) => {
                setSecCode(e.target.value);
              }}
            />
            <button className="btn btn-success">Confirm</button>
          </form>
          {errForm && <div className="alert alert-danger mt-3">{errForm}</div>}
        </div>
      </div>
    </div>
  );
}
