import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Contact from '../../components/Contact/Contact';
import './Signup.scss';

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

export default function SignIn() {

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

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
                {/* <Avatar sx={{ m: 1, bgcolor: 'black' }}>
                    <LockOutlinedIcon />
                </Avatar> */}

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
                  />
                  <FormControlLabel
                      control={<Checkbox value="remember" color="primary" />}
                      label="I would like to receive updates via email."
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

                  {/* <button className="loginButton">
                      SIGN UP
                  </button> */}

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








// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Contact from '../../components/Contact/Contact';
// import './Signup.scss';

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         MillionDollarPosters
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const theme = createTheme({
//   palette: {
//     primary: {
//     main: '#000000',
//     darker: '#000000',
//     },
//     secondary: {
//     main: '#ffffff',
//     },
// },
// });

// export default function SignUp() {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get('email'),
//       password: data.get('password'),
//     });
//   };

//   return (
//     <div className="signupContainer">

//       <div className="signup">
//         <ThemeProvider theme={theme}>
//           <Container component="main" maxWidth="xs">
//             <CssBaseline />
//             <Box
//               sx={{
//                 marginTop: 8,
//                 display: 'flex',
//                 flexDirection: 'column',
//                 alignItems: 'center',
//               }}
//             >
//               <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
//                 <LockOutlinedIcon />
//               </Avatar>
//               <Typography component="h1" variant="h5">
//                 Sign up
//               </Typography>
//               <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
//                 <Grid container spacing={2}>
//                   <Grid item xs={12} sm={6}>
//                     <TextField
//                       autoComplete="given-name"
//                       name="firstName"
//                       required
//                       fullWidth
//                       id="firstName"
//                       label="First Name"
//                       autoFocus
//                     />
//                   </Grid>

//                   <Grid item xs={12} sm={6}>
//                     <TextField
//                       required
//                       fullWidth
//                       id="lastName"
//                       label="Last Name"
//                       name="lastName"
//                       autoComplete="family-name"
//                     />
//                   </Grid>

//                   <Grid item xs={12}>
//                     <TextField
//                       required
//                       fullWidth
//                       id="email"
//                       label="Email Address"
//                       name="email"
//                       autoComplete="email"
//                     />
//                   </Grid>

//                   <Grid item xs={12}>
//                     <TextField
//                       name="firstName"
//                       required
//                       fullWidth
//                       id="username"
//                       label="Username"
//                       autoFocus
//                     />
//                   </Grid>

//                   <Grid item xs={12}>
//                     <TextField
//                       required
//                       fullWidth
//                       name="password"
//                       label="Password"
//                       type="password"
//                       id="password"
//                       autoComplete="new-password"
//                     />
//                   </Grid>

//                   <Grid item xs={12}>
//                     <FormControlLabel
//                       control={<Checkbox value="allowExtraEmails" color="primary" />}
//                       label="I would like to receive updates via email."
//                     />
//                   </Grid>
//                 </Grid>

//                 {/* <Button
//                   type="submit"
//                   fullWidth
//                   variant="contained"
//                   sx={{ mt: 3, mb: 2 }}
//                 >
//                   Sign Up
//                 </Button> */}

//                 <button className='signupButton'>
//                   SIGN UP
//                 </button>

//                 <Grid container>
//                   <Grid item>
//                     <Link href="/log-in" variant="body2">
//                       Already have an account? Sign in
//                     </Link>
//                   </Grid>
//                 </Grid>
//               </Box>
//             </Box>
//             <Copyright sx={{ mt: 5 }} />
//           </Container>
//         </ThemeProvider>
//       </div>

//       <Contact/>
//     </div>
//   );
// }