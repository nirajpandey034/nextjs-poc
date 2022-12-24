import React from 'react';
import Head from 'next/head';
import RegistrationForm from '../../../components/User/register/RegistrationForm';

function register() {
  return (
    <>
      <Head>
        <title>User Registration</title>
        <meta name="description" content="Login Page" />
      </Head>
      <RegistrationForm />
    </>
  );
}

export function getServerSideProps() {
  return {
    props: { name: 'Niraj Pandey' },
  };
}
export default register;
