import React, {useEffect, useState} from "react";
import Layout from "../components/Layout";
import {getLocalStorage, setLocalStorage} from "../util/localStorage";
import {css} from "@emotion/react";
import "../styles/globals.css";

export const dietContext = React.createContext();
export const changeDietCounterContext = React.createContext()

const cookie = (isOpen) => css`
  height: ${isOpen ? "100px" : 0};
  overflow: hidden;
  transition: all 200ms ease-in;
`;

function MyApp({Component, pageProps}) {
    const [areCookiesAccepted, setAreCookiesAccepted] = useState(false);
    const [dietCounter, setDietCounter] = useState(0);

    function cookiesBanerButtonHandler() {
        setLocalStorage("areCookiesAccepted", true);
        setAreCookiesAccepted(true);
    }

    function incrementDiet(num) {
        setDietCounter(dietCounter + num)
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
            <dietContext.Provider value={dietCounter}>
                <changeDietCounterContext.Provider value={incrementDiet}>
                    <Layout>
                        <Component {...pageProps} />;
                    </Layout>
                </changeDietCounterContext.Provider>
            </dietContext.Provider>
        </div>
    );
}

export default MyApp;
