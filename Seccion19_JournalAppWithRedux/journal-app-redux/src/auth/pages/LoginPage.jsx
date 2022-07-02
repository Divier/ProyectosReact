import { Google } from "@mui/icons-material";
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom"; //Se coloca alias para que no entre en conflicto con Link de material
import { useForm } from "../../hooks/useForm";
import { AuthLayout } from "../layout/AuthLayout";
import { useDispatch, useSelector } from "react-redux";
import { checkAuthentication, checkAuthenticationGoogle, startLoginUserWithEmailPassword } from '../../store/auth';
import { useMemo } from "react";

export const LoginPage = () => {

  const {email, password, onInputChange} = useForm({email:'abc@abc.com', password:'123456'});

  const dispatch = useDispatch();
  const {status, errorMessage} = useSelector(state => state.authR);

  const isAuthenticating = useMemo(() => status === 'checking', [status]);

  const onSubmit = () => {
    dispatch(startLoginUserWithEmailPassword(email, password));
  }

  const onSubmitGoogle = () => {
    dispatch(checkAuthenticationGoogle());
  }

  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit} className='animate__animated animate__fadeIn animate__faster'>
        <Grid container>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="corre@google.com"
              fullWidth
              name='email'
              value={email}
              onChange={onInputChange}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="contraseña"
              fullWidth
              name='password'
              value={password}
              onChange={onInputChange}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} display={!!errorMessage ? "" : "none"}>
              <Alert severity="error">{errorMessage}</Alert>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Button disabled={isAuthenticating} variant="contained" fullWidth onClick={onSubmit}>
                Login
              </Button>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Button disabled={isAuthenticating} variant="contained" fullWidth onClick={onSubmitGoogle}>
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>

            <Grid container direction="row" justifyContent="end">
              <Link component={RouterLink} color="inherit" to="/auth/register">
                <Typography sx={{ mt: 1 }}>Crear una cuenta</Typography>
              </Link>
            </Grid>

          </Grid>

        </Grid>
      </form>
    </AuthLayout>
  );
};
