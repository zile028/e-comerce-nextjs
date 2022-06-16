import React from 'react';
import { css } from '@emotion/react';
import Link from 'next/link';
import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout(props) {
  return (
    <div>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
}
