import React from 'react';
import Head from 'next/head';

function login({ name }) {
  return (
    <>
      <Head>
        <title>User Login</title>
        <meta name="description" content="Login Page" />
      </Head>
      <p>Login page {name}</p>
    </>
  );
}

export function getServerSideProps() {
  return {
    props: { name: 'Niraj Pandey' },
  };
}

export default login;
