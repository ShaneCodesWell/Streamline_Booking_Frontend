// components/LoginPopup.tsx
import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, useTheme, Box } from '@mui/material';
import Image from 'next/image'; // Assuming you're using Next.js

function Login() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="contained" onClick={handleOpen} 
        sx={{ textTransform: 'none' }} className="bg-blue-500 text-white py-1 px-4 rounded">
            Log In
      </Button>
      <Dialog open={open} onClose={handleClose}
        sx={{
          '& .MuiDialog-paper': {
            padding: theme.spacing(0),
            backgroundColor: '#ffffff',
            borderRadius: '24px',
            boxShadow: '0 3px 15px rgba(0,0,0,0.15)',
            maxWidth: '800px',
            display: 'flex',
            flexDirection: 'row',
            overflow: 'hidden',
          },
        }}
      >
        {/* Left Image Section */}
        <Box sx={{ width: '40%', backgroundImage: 'url(/assets/images/popup-banner.png)', backgroundSize: 'cover', position: 'relative' }}>
          <Box sx={{ position: 'absolute', top: 15, left: 30 }}>
            <Image src="/assets/images/logo-icon.png" alt="Logo" width={60} height={60} />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', color: '#fff', padding: 4 }}>
            <h2 className="font-semibold text-3xl">Welcome Back!</h2>
            <p className ="text-base pt-2">Let’s get you back in.</p>
            </Box>
        </Box>

        {/* Right Form Section */}
        <Box sx={{ width: '60%', padding: theme.spacing(2), position: 'relative' }}>
          <Button onClick={handleClose} sx={{ position: 'absolute', top: 16, right: 16, color: '#888' }}>&times;</Button>
          <DialogTitle sx={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: theme.spacing(1), color: 'var(--text-color)' }}>Log In to your account</DialogTitle>
          <DialogContent>
            <Box component="form">
            <TextField
                autoFocus
                margin="dense"
                id="email"
                label="Email"
                type="email"
                fullWidth
                variant="standard"
                sx={{
                    marginBottom: 1,
                    '& input': {
                    fontSize: '0.875rem', // Set the font size (default is usually 1rem)
                    },
                    '& label': {
                    fontSize: '0.75rem', // Optionally adjust the label font size as well
                    },
                }}
                />
              <TextField
                margin="dense"
                id="password"
                label="Password"
                type="password"
                fullWidth
                variant="standard"
                sx={{
                    marginBottom: 4,
                    '& input': {
                    fontSize: '0.875rem', // Set the font size (default is usually 1rem)
                    },
                    '& label': {
                    fontSize: '0.75rem', // Optionally adjust the label font size as well
                    },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: '#1e90ff',
                  color: '#fff',
                  padding: theme.spacing(1.5),
                  borderRadius: '8px',
                  '&:hover': {
                    backgroundColor: '#1c7ed6',
                  },
                }}
              >
                Log In
              </Button>
            </Box>
          </DialogContent>
          <Box sx={{ textAlign: 'center', marginTop: theme.spacing(2), color: '#888' }}>
            <p>Don’t have an Account? <a href="#" className="text-blue-500 hover:underline">Sign Up</a></p>
            <Box sx={{ display: 'flex', alignItems: 'center', marginY: theme.spacing(2) }}>
              <hr className="flex-grow border-gray-300" />
              <span className="px-3">Or log in with</span>
              <hr className="flex-grow border-gray-300" />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Button className="p-2 border rounded-full">
                <Image src="/assets/images/cl-4.png" alt="Icon 1" width={40} height={40} />
              </Button>
            </Box>
          </Box>
        </Box>
      </Dialog>
    </div>
  );
}

export default Login;
