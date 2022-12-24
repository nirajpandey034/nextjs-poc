import React from 'react';
import {
  TextField,
  Button,
  Container,
  Stack,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { schema } from '../UserLoginSchema';

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack direction="column" spacing={2} mt={5}>
          <TextField
            label="Email"
            type="email"
            error={errors.email ? true : false}
            {...register('email')}
          ></TextField>
          {errors.email && (
            <p style={{ color: 'red' }}>{errors.email.message}</p>
          )}
          <TextField
            label="Password"
            type="password"
            error={errors.password ? true : false}
            {...register('password')}
          ></TextField>
          {errors.password && (
            <p style={{ color: 'red' }}>{errors.password.message}</p>
          )}
          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              label="Remeber Password?"
              {...register('rememberCred')}
            />
          </FormGroup>
          <Button type="submit" variant="contained">
            Login
          </Button>
        </Stack>
      </form>
    </Container>
  );
}

export default LoginForm;
