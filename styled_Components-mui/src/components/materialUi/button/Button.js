import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import AddPhotoAlternateSharpIcon from '@mui/icons-material/AddPhotoAlternateSharp';

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">

      <Button variant="contained" color="secondary" size="large" startIcon={<SendIcon/>}>Ekle</Button>
      <Button variant="contained" color="success" size="large" endIcon={<AddPhotoAlternateSharpIcon/>}>Ekle</Button>

    </Stack>
  );
}