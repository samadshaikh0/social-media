import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "scenes/homePage/index.jsx";
import LoginPage from "scenes/loginPage/index.jsx";
import ProfilePage from "scenes/profilePage/index.jsx";

import { useMemo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material";
import { themeSettings } from "theme.js";
import { useSelector } from "react-redux";


const App = () => {
const mode = useSelector((state)=>state.mode);
const theme = useMemo(()=>createTheme(themeSettings(mode)), [mode]);
const isAuth = Boolean(useSelector((state)=> state.token ))

  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme} >
          <CssBaseline>
            <Routes>
              <Route path="/" element = {<LoginPage/>} />
              <Route path="/home" element = {isAuth ? <HomePage/> : <Navigate to="/" /> } />
              <Route path="/profile/:userId" element = {isAuth ? <ProfilePage/> : <Navigate to="/" /> } />  
            </Routes>
          </CssBaseline>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
