import Layout from "../components/Layout";
import "../styles/globals.css";
import { css } from "@emotion/react";
import React, { useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../util/localStorage";

export const dietContext = React.createContext();

const cookie = (isOpen) => css`
  height: ${isOpen ? "100px" : 0};
  overflow: hidden;
  transition: all 200ms ease-in;
`;

function MyApp({ Component, pageProps }) {
  const [areCookiesAccepted, setAreCookiesAccepted] = useState(false);

  function cookiesBanerButtonHandler() {
    setLocalStorage("areCookiesAccepted", true);
    setAreCookiesAccepted(true);
  }

  useEffect(() => {
    if (getLocalStorage("areCookiesAccepted")) {
      setAreCookiesAccepted(getLocalStorage("areCookiesAccepted"));
    }
  }, []);

  return (
    <div>
      <div css={cookie(!areCookiesAccepted)}>
        cookie banner{" "}
        <button
          onClick={() => {
            cookiesBanerButtonHandler();
          }}
        >
          yes
        </button>
      </div>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </div>
  );
}

export default MyApp;
