/* eslint-disable @typescript-eslint/explicit-function-return-type */

import React, { FC, useState } from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { StyledButton } from '@/components/styled-button'
import SignUpForm from './signUpForm'

const AuthNavigation: FC = () => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <Box sx={{ '& button:first-child': { mr: 2 } }}>
      {/* <StyledButton variant="outlined">
        Sign In
      </StyledButton> */}
      <StyledButton onClick={handleOpen}>Sign Up</StyledButton>
      <Modal open={open} onClose={handleClose} aria-labelledby="sign-up-modal" aria-describedby="sign-up-form">
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '90%',
            maxWidth: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          <SignUpForm />
        </Box>
      </Modal>
    </Box>
  )
}

export default AuthNavigation
