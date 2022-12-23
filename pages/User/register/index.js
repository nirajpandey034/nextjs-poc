import React from 'react';
import Head from 'next/head';

function register() {
  return (
    <>
      <Head>
        <title>User Registration</title>
        <meta name="description" content="Login Page" />
      </Head>
      <p>Registration page</p>
    </>
  );
}

export function getServerSideProps() {
  return {
    props: { name: 'Niraj Pandey' },
  };
}
export default register;
