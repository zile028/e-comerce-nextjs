import React from 'react';
import { css } from '@emotion/react';

const feature = css`
  margin-left: 50px;
  margin-top: 70px;
  margin-bottom: 60px;
  h2 {
    font-size: 2.3rem;
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

function Header() {
  return (
    <div>
      <header css={header}>
        <article css={article}>
          <h1>Online outdoor shop, buy online outdoor clothing & trekking</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            libero placeat excepturi distinctio. Mollitia quis voluptatem quod
            id maxime dolorum.
          </p>
          <button>Order now</button>
        </article>
      </header>
      <section css={feature}>
        <h2>Most Popular Products</h2>
      </section>
    </div>
  );
}

export default Header;
