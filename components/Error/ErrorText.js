import React from 'react';
import { Typography } from '@mui/material';

function ErrorText({ msg }) {
  return (
    <Typography style={{ color: 'red' }} component="p">
      {msg}
    </Typography>
  );
}

export default ErrorText;
