import React from 'react';
import Head from 'next/head';

import LoginForm from '../../../components/User/login/loginForm';
function login({ name }) {
  return (
    <>
      <Head>
        <title>User Login</title>
        <meta name="description" content="Login Page" />
      </Head>
      <LoginForm />
    </>
  );
}

export function getServerSideProps() {
  return {
    props: { name: 'Niraj Pandey' },
  };
}

export default login;
