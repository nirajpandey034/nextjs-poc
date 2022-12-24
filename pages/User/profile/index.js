import React from 'react';
import Head from 'next/head';
function profile({ name }) {
  return (
    <>
      <Head>
        <title>User Login</title>
        <meta name="description" content="Login Page" />
      </Head>
      {name}
    </>
  );
}

export function getServerSideProps() {
  return {
    props: { name: 'Niraj Pandey' },
  };
}

export default profile;
