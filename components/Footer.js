import React from 'react';
import { css } from '@emotion/react';
import Link from 'next/link';

const lastArticle = css`
  margin-top: 80px;
  font-size: 1rem;
  color: #3a8bcd;
  font-weight: bold;
`;
const nav = css`
padding: 15px 0;
text-align: center;
margin-top: 30px;

ul li {
  display: inline-block;
  margin: 0 30px;
   a {
    color: #4a4a4a;
  text-transform: uppercase;
  font-size: 1.1rem;
  font-weight: 600;
  .active {
  color:#fff
}
  }
}
}
`;

const container = css`
  text-align: center;
  padding: 100px 0;
  i {
    color: #4a4a4a;
    margin-right: 10px;
    font-size: 2.2rem;
  }
`;

const icons = css`
  color: #000;
  margin-top: 30px;
  a i {
    margin: 0 10px;
    font-size: 2rem;
    margin-left: 20px;
  }
  a i:hover {
    color: #3a8bcd;
  }
`;
const logo = css`
  text-shadow: 0 0 1px #4a4a4a;
  font-size: 2rem;
  color: #3a8bcd;
`;
const subscribe = css`
  margin-top: 50px;
  background-color: #3a8bcd;
  text-align: center;
  color: #fff;
  padding: 100px 0;
  h3 {
    font-size: 2rem;
  }

  p {
    padding: 30px 0;
    font-size: 1.3rem;
  }
  input {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #fff;
    color: #fff;
  }
  input[type='submit'] {
    cursor: pointer;
    background-color: #fff;
    color: black;
    padding: 11px 50px;
    margin-left: 10px;
  }
  input[type='email'] {
    background-color: transparent;
  }
`;

function Footer() {
  return (
    <div>
      <section css={subscribe}>
        <article>
          <h3>Subscribe on Hiking shop now!</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />
            Atque mollitia possimus eius quo explicabo cum at recusandae eos
            aliquid corrupti!
          </p>
          <form>
            <input type="email" placeholder="Your email...." />
            <input type="submit" value="Subscribe" />
          </form>
        </article>
      </section>

      <footer css={container}>
        <article>
          <a css={logo} href="index.html">
            <i className="fas fa-hiking"></i>Hiking shop
          </a>
          <nav css={nav}>
            <ul>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a href="products.html">Products</a>
              </li>
              <li>
                <a href="about.html">About us</a>
              </li>
              <li>
                <a href="contact.html">Contact us</a>
              </li>
            </ul>
          </nav>
          <div css={icons}>
            <span>
              <a href="/">
                <i className="fab fa-facebook-square"></i>
              </a>
            </span>
            <span>
              <a href="/">
                <i className="fab fa-instagram"></i>
              </a>
            </span>
            <span>
              <a href="/">
                <i className="fab fa-pinterest"></i>
              </a>
            </span>
            <span>
              <Link href="/">
                <a>
                  <i className="fab fa-twitter" />
                </a>
              </Link>
            </span>
          </div>
        </article>
        <article>
          <p css={lastArticle}>&copy; Hiking web shop 2022, Upleveled.</p>
        </article>
      </footer>
    </div>
  );
}
export default Footer;
