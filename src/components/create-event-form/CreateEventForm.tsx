import React from 'react';
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import S from './styles';

const CreateEventForm = () => {
  return (
    <div>
      <Typography variant='h3'>Create Shfll Event</Typography>
      <S.FormContainer>
        <TextField label='Title' required variant='outlined' sx={{ display: 'block' }} />
        <DateTimePicker
          label='Date & Time'
          defaultValue={dayjs('2023-12-31T00:00')}
          sx={{ display: 'block' }}
        />
        <TextField
          label='Description'
          variant='outlined'
          multiline
          rows='3'
          minRows='3'
          maxRows='3'
          sx={{ display: 'block' }}
        />
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select label='Type'>
            <MenuItem value={'straight'}>Straight</MenuItem>
            <MenuItem value={'queer'}>Queer</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label='Min Age'
          type='number'
          InputLabelProps={{
            shrink: true,
          }}
          sx={{ display: 'block' }}
        />
        <TextField
          label='Max Age'
          type='number'
          InputLabelProps={{
            shrink: true,
          }}
          sx={{ display: 'block' }}
        />
        <TextField label='RSVPify Link' variant='outlined' sx={{ display: 'block' }} />
        <TextField label='Venue Name' variant='outlined' sx={{ display: 'block' }} />
        <TextField label='Address Line 1' variant='outlined' sx={{ display: 'block' }} />
        <TextField label='Address Line 2' variant='outlined' sx={{ display: 'block' }} />
        <TextField label='City' variant='outlined' sx={{ display: 'block' }} />
        <TextField label='State' variant='outlined' sx={{ display: 'block' }} />
        <TextField
          label='Zip Code'
          type='number'
          InputLabelProps={{
            shrink: true,
          }}
          sx={{ display: 'block' }}
        />
        <Button variant='contained'>Create</Button>
      </S.FormContainer>
    </div>
  );
};

export default CreateEventForm;
