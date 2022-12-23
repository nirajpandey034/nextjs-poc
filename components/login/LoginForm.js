import React from 'react';
import { TextField, Typography, Button, Container, Stack } from '@mui/material';

function LoginForm() {
  return (
    <Container maxWidth="sm">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log('submitted');
        }}
      >
        <Stack direction="column" spacing={2} mt={5}>
          <TextField label="username"></TextField>
          <TextField label="password"></TextField>
          <Button type="submit">Login</Button>
        </Stack>
      </form>
    </Container>
  );
}

export default LoginForm;
