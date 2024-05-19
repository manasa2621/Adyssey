import React, { FC } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Radio from '@mui/material/Radio'
import Button from '@mui/material/Button'

const SignUpForm: FC = () => {
  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        p: 2,
        width: '100%',
        maxWidth: 400,
        bgcolor: 'background.paper',
        border: '1px solid #ccc',
        borderRadius: 2,
        boxShadow: 24,
      }}
    >
      <TextField label="First Name" variant="outlined" required />
      <TextField label="Last Name" variant="outlined" required />
      <TextField label="Email" type="email" variant="outlined" required />
      <TextField label="Company Name" variant="outlined" required />
      <FormControl component="fieldset">
        <FormLabel component="legend">I am a</FormLabel>
        <RadioGroup name="role" >
          <FormControlLabel value="Brand" control={<Radio />} label="Brand" />
          <FormControlLabel value="Agency" control={<Radio />} label="Agency" />
          <FormControlLabel value="Truck Owner/Operator" control={<Radio />} label="Truck Owner/Operator" />
          <FormControlLabel value="Truck Leasing Company" control={<Radio />} label="Truck Leasing Company" />
        </RadioGroup>
      </FormControl>
      <Button variant="contained" type="submit">
        Submit
      </Button>
    </Box>
  )
}

export default SignUpForm
