import React from 'react';
import Head from 'next/head';

function register() {
  return (
    <>
      <Head>
        <title>User Registration</title>
        <meta name="description" content="Login Page" />
      </Head>
      <form>
        <input placeholder="name" type="text"></input>
        <input placeholder="email" type="email"></input>
        <input placeholder="password" type="password"></input>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export function getServerSideProps() {
  return {
    props: { name: 'Niraj Pandey' },
  };
}
export default register;
