import React from 'react';
import Head from 'next/head';

import LoginForm from '../../../components/login/loginForm';
function login({ name }) {
  return (
    <>
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
