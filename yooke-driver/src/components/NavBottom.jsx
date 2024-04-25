import React from "react";
import { BottomNavigation } from "@mui/material";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import NearMeIcon from "@mui/icons-material/NearMe";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import PersonIcon from "@mui/icons-material/Person";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

//creating a custom theme to implement colors from figma file
const theme = createTheme({
  palette: {
    ochre: {
      main: "#001023",
      light: "#FFFFFF",
      dark: "#A29415",
      contrastText: "#22CEA6",
    },
  },
});

const NavBottom = () => {
  const navigate = useNavigate();
  const goToTrips = () => {
    navigate("/completed-trips");
  };
  const goToHome = () => {
    navigate("/");
  };
  const [value, setValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BottomNavigation
        sx={{
          width: "100%",
          position: "absolute",
          bottom: "0",
        }}
        value={value}
        showLabels
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Accueil"
          onClick={goToHome}
          icon={<HomeIcon />}
          sx={{
            "&.Mui-selected": {
              color: theme.palette.ochre.contrastText,
            },
          }}
        />

        <BottomNavigationAction
          label="Trajet"
          onClick={goToTrips}
          icon={<NearMeIcon />}
          sx={{
            "&.Mui-selected": {
              color: theme.palette.ochre.contrastText,
            },
          }}
        />
        <BottomNavigationAction
          label="Portefeuille"
          icon={<AccountBalanceWalletIcon />}
          sx={{
            "&.Mui-selected": {
              color: theme.palette.ochre.contrastText,
            },
          }}
        />
        <BottomNavigationAction
          label="Compte"
          icon={<PersonIcon />}
          sx={{
            "&.Mui-selected": {
              color: theme.palette.ochre.contrastText,
            },
          }}
        />
      </BottomNavigation>
    </ThemeProvider>
  );
};

export default NavBottom;
