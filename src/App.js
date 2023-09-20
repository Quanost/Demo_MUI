import React from "react";
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import Message from './component/Message'
import SignIn from './Page/SignIn';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './Page/SignUp';

function App() {
  return (
    <>
      {/* <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera />
          <Typography variant="h6">
            Photo Album
          </Typography>
        </Toolbar>
      </AppBar> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" >
            <Route index element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
