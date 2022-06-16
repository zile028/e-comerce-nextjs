import React from 'react';
import Layout from '../components/Layout';
import Head from 'next/head';

function about() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
        <script
          src="https://code.jquery.com/jquery-3.6.0.slim.js"
          integrity="sha256-HwWONEZrpuoh951cQD1ov2HUK5zA5DwJ1DNUXaM6FsY="
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="css/owl.carousel.min.css" />
        <link rel="stylesheet" href="css/owl.theme.default.min.css" />
      </Head>
      <main>
        <h1>About page</h1>
      </main>
    </div>
  );
}

export default about;
