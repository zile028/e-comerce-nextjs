import React, { useContext, useEffect, useState } from "react";
import { css } from "@emotion/react";
// import Products from '../products';
import Link from "next/link";

// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';

const topbar = css`
  text-align: center;
  border-top: 5px solid #3a8bcd;
  border-bottom: 1px solid #f6f6f6;
  padding: 20px 0;
  a {
    font-size: 3rem;
    color: #1e1e1e;
    font-weight: bolder;
    text-shadow: 0 0 1px #4a4a4a;
  }
  i {
    font-size: 3rem;
    color: #3a8bcd;
  }
`;
const feature = css`
  margin-left: 50px;
  margin-top: 70px;
  margin-bottom: 60px;
  h2 {
    font-size: 2.3rem;
  }
`;
const nav = css`
padding: 15px 0;
text-align: center;

ul li {
  display: inline-block;
  margin: 0 30px;
   a {
    color: #4a4a4a;
  text-transform: uppercase;
  font-size: 1.1rem;
  font-weight: 600;
  a:hover {
  color:red;}
  .active {
  color:#fff
}
  }
}
}
`;

const article = css`
 width: 40%;
  background-color: rgba(255, 255, 255, 0.7);
  margin-left: 15%;
  padding: 40px;



  h1 {
    font-size: 2.5rem;
    font-weight: bolder;
  }
  p {
    font-size: 1.2rem;
  }
  button {
    background: #3a8bcd;
  border: none;
  color: #fff;
  border-radius: 15px;
  border: none;
  padding: 15px 30px;
  font-size: 1rem;
  text-transform: uppercase;
  }

}`;

const header = css`
  background-image: url(header.jpg);
  width: 100%;
  background-size: cover;
  background-position: center top;
  padding: 200px 0;
`;

export default function NavBar() {
  return (
    <div>
      <section css={topbar}>
        <a href="index.html">
          <i className="fas fa-hiking" /> Hiking shop
        </a>
      </section>

      <nav css={nav}>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>

          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/animals">
              <a>Products</a>
            </Link>
          </li>
          <Link href="/cart">
            <a data-cy="shopping-cart">
              <img
                className="shoppingCartStyle"
                src="/shopping_cart.png"
                alt="shopping cart"
              />
              <span>0</span>
            </a>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

// export default NavBar;
