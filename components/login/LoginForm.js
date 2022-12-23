import React from 'react';
import { TextField, Typography, Button, Container, Stack } from '@mui/material';

function LoginForm() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log('submitted');
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <TextField label="username"></TextField>
        <TextField label="password"></TextField>
        <Button type="submit">Login</Button>
      </div>
    </form>
  );
}

export default LoginForm;
