import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Contact from '../../components/Contact/Contact';
import './Signup.scss';
import bcrypt from 'bcryptjs';
import { postSignup } from '../../hooks/postSignup.js';
import useFetch from '../../hooks/useFetch';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        MillionDollarPosters
      </Link>{' '}
      {/* {new Date().getFullYear()} */}
      2023
      {'.'}
    </Typography>
  );
}

const theme = createTheme({
    palette: {
        primary: {
        main: '#000000',
        darker: '#000000',
        },
        secondary: {
        main: '#ffffff',
        },
    },
});

export default function SignUp() {

  const { data, loading, error } = useFetch(
    // "/users-permissions/roles"
    `/posters?populate=*&`
  );

  console.log(data);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [updates, setUpdates] = useState(false);
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const data = new FormData(event.currentTarget);

    const saltRounds = 10;
    const password = data.get('password');
    const hashedPassword = bcrypt.hashSync(password, saltRounds);
    let consent = '';

    if(updates){
      consent = 'yes';
    } else {
      consent = 'no';
    }

    console.log({
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      username: data.get('username'),
      email: data.get('email'),
      password: hashedPassword,
      updates: consent,
    });

    await postSignup(firstName, lastName, username, email, password, consent);

    setFirstName('');
    setLastName('');
    setUsername('');
    setEmail('');
    setPassword('');

    setSubmitted(true);
  };

  // Before posting the username to the back-end, we must also check if the username is available.
  // After a user signs up, we must verify their email address.
  // Current problem is cannot fetch user roles.

  return (
    <div className="loginContainer">
        <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: '100vh' }}>
            <CssBaseline />
            <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
                backgroundImage: 'url(https://source.unsplash.com/random)',
                backgroundRepeat: 'no-repeat',
                backgroundColor: (t) =>
                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Box
                sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                }}
            >

                <h1>
                    $M
                </h1>

                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>

                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <Grid container spacing={2}>
                   <Grid item xs={12} sm={6}>
                     <TextField
                      margin="normal"
                      autoComplete="given-name"
                      name="firstName"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                      value={firstName}
                      onChange={e => setFirstName(e.target.value)}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="family-name"
                      value={lastName}
                      onChange={e => setLastName(e.target.value)}
                    />
                  </Grid>
                </Grid>

                  <TextField
                      margin="normal"
                      name="username"
                      required
                      fullWidth
                      id="username"
                      label="Username"
                      autoFocus
                      value={username}
                      onChange={e => setUsername(e.target.value)}
                    />

                  <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      autoFocus
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                  />

                  <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                  />
                  <FormControlLabel
                      name="updates"
                      id="updates"
                      control={<Checkbox value="remember" color="primary" />}
                      label="I would like to receive updates via email."
                      value={updates}
                      onChange={() => setUpdates(!updates)}
                  />

                  <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                      color={theme.darker}
                  >
                      SIGN UP
                  </Button>

                  <Grid container>
                      <Grid item>
                      <Link href="/sign-in" variant="body2">
                          {"Already have an account? Sign in"}
                      </Link>
                      </Grid>
                  </Grid>
                  <Copyright sx={{ mt: 5 }} />
                </Box>
            </Box>
            </Grid>
        </Grid>

        </ThemeProvider>

        <Contact className="contactContainer"/>
    </div>

  );
}