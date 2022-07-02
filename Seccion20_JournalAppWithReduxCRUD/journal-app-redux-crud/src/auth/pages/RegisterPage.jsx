import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { Link as RouterLink } from "react-router-dom"; //Se coloca alias para que no entre en conflicto con Link de material
import { useForm } from "../../hooks/useForm";
import validator from "validator";
import { useMemo, useState } from "react";
import { startCreatingUserWithEmailPassword } from "../../store/auth/thunks";
import { useDispatch, useSelector } from "react-redux";

const formData = {
  displayName: "",
  email: "hhh@hhh.com",
  password: "",
};

const formValidations = {
  displayName: [(val) => val.trim().length > 0, "El nombre es requerido"],
  email: [(val) => val.trim().length > 0 && validator.isEmail(val), "El email es requerido y debe ser valido"],
  password: [(val) => val.trim().length >= 6, "El password es requerido"]
};

export const RegisterPage = () => {
  
  const [formSubmitted, setFormSubmitted] = useState(false);

  const dispatch = useDispatch();
  const { status, errorMessage } = useSelector( state => state.authR );
  const isCheckingAuthentication = useMemo( () => status === 'checking', [status]);

  const {
    formState,
    displayName,
    email,
    password,
    onInputChange,
    isFormValid,
    displayNameValid,
    emailValid,
    passwordValid,
  } = useForm(formData, formValidations);

  const sendForm = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    if (!isFormValid) {
      return;
    }
    dispatch( startCreatingUserWithEmailPassword(formState) );
  };

  return (
    <AuthLayout title="Crear Cuenta">
      <form onSubmit={sendForm} className='animate__animated animate__fadeIn animate__faster'>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre"
              type="test"
              placeholder="nombre"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmitted}
              helperText={displayNameValid}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="corre@google.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmitted}
              helperText={emailValid}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} display={!!errorMessage ? "" : "none"}>
              <Alert severity="error">{errorMessage}</Alert>
            </Grid>

            <Grid item xs={12}>
              <Button
                disabled={isCheckingAuthentication}
                type="submit"
                variant="contained"
                fullWidth
                onClick={sendForm}
              >
                Crear Cuenta
              </Button>
            </Grid>

            <Grid container direction="row" justifyContent="end">
              <Link component={RouterLink} color="inherit" to="/auth/login">
                <Typography sx={{ mt: 1 }}>¿Ya tienes una cuenta?</Typography>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
