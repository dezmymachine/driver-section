import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  Container,
  Stack,
  TextField,
  Box,
  Button,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import Switch from "@mui/material/Switch";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import { auth } from "../config/firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  //set form data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  //onchange events
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      //destructure email and password as form data
      const { email, password } = formData;
      const results = await signInWithEmailAndPassword(auth, email, password);
      const authInfo = {
        userID: results.user.uid,
        userEmail: results.user.email,
        isAuth: true,
      };
      localStorage.setItem("auth", JSON.stringify(authInfo));
      navigate("/addtrip");
      setFormData({ email: "", password: "" });
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };
  return (
    <form onSubmit={handleSubmit} style={{ padding: "2rem" }}>
      <Stack spacing={{ xs: 3 }}>
        <div style={{ marginBottom: "30px" }}>
          <Typography variant="h3">Connexion</Typography>
          <Typography>Entrez vos identifiants pour continuer</Typography>
        </div>

        <TextField
          required
          name="email"
          fullWidth
          id="outlined-required-email"
          label="E-mail ou Nom d'utilisateur"
          value={formData.email}
          onChange={handleChange}
        />
        <OutlinedInput
          id="outlined-adornment-password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />

        <Box justifyContent="space-between">
          <Typography>
            J'accepte les conditions générales d'utilisation
          </Typography>
          <div>
            <Switch />
          </div>
        </Box>
        <Button
          fullWidth
          variant="contained"
          type="submit"
          sx={{ padding: "1rem", background: "#001023",textTransform:"none" }}
        >
          S'inscrire
        </Button>
      </Stack>
    </form>
  );
};

export default Login;
