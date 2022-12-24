import React from 'react';
import {
  TextField,
  Button,
  Container,
  Grid,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from '@mui/material';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { schema } from '../UserRegistrationSchema';

import ErrorText from '../../Error/ErrorText';

function RegistrationForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });
  const submitHandler = (data) => {
    console.log(data);
    reset();
  };
  return (
    <Container maxWidth="md">
      <form onSubmit={handleSubmit(submitHandler)}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <TextField
              label="First Name"
              type="text"
              {...register('firstName')}
              error={errors.firstName ? true : false}
            ></TextField>
            {errors.firstName && <ErrorText msg={errors.firstName.message} />}
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Last Name"
              type="text"
              {...register('lastName')}
              error={errors.lastName ? true : false}
            ></TextField>
            {errors.lastName && <ErrorText msg={errors.lastName.message} />}
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Email"
              type="email"
              {...register('email')}
              error={errors.email ? true : false}
            ></TextField>
            {errors.email && <ErrorText msg={errors.email.message} />}
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Phone"
              type="number"
              {...register('phone')}
              error={errors.phone ? true : false}
            ></TextField>
            {errors.phone && <ErrorText msg={errors.phone.message} />}
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              type="date"
              {...register('dob')}
              error={errors.dob ? true : false}
            ></TextField>
            {errors.dob && <ErrorText msg={errors.dob.message} />}
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Password"
              type="password"
              {...register('password')}
              error={errors.password ? true : false}
            ></TextField>
            {errors.password && <ErrorText msg={errors.password.message} />}
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Confirm Password"
              type="password"
              {...register('cpassword')}
              error={errors.cpassword ? true : false}
            ></TextField>
            {errors.cpassword && <ErrorText msg={errors.cpassword.message} />}
          </Grid>
          <Grid item xs={6}>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox size="medium" {...register('isGay')} />}
                label="Are you gay?"
              />
            </FormGroup>
            {errors.isGay && <ErrorText msg={errors.isGay.message} />}
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default RegistrationForm;
