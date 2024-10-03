import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import AuthContainer from "../../components/AuthContainer";
import Link from "../../components/ui/Link";
import { auth } from "../../firebase";

const emptyFormField = () => ({
  value: "",
  error: false,
});

const LoginPage = () => {
  const [email, setEmail] = useState(emptyFormField());
  const [password, setPassword] = useState(emptyFormField());
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState("");

  const onEmailChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setLoginError("");
    setEmail({
      value: ev.target.value,
      error: false,
    });
  };

  const onPasswordChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setLoginError("");
    setPassword({
      value: ev.target.value,
      error: false,
    });
  };

  const onLogin = () => {
    setLoginError("");

    let valid = true;
    if (email.value === "") {
      valid = false;
      setEmail({
        value: email.value,
        error: true,
      });
    }

    if (password.value === "") {
      valid = false;
      setPassword({
        value: password.value,
        error: true,
      });
    }

    if (!valid) {
      return;
    }

    setLoading(true);
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((credential) => {
        console.log(credential);
      })
      .catch(() => {
        setLoginError("The username/password is not correct.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <AuthContainer>
      <TextField
        label="Email address"
        size="small"
        value={email.value}
        error={email.error}
        helperText={email.error ? "Required" : " "}
        onChange={onEmailChange}
      />
      <TextField
        label="Password"
        type="password"
        size="small"
        value={password.value}
        error={password.error}
        helperText={password.error ? "Required" : " "}
        onChange={onPasswordChange}
      />
      <Box position="relative">
        <Button
          size="large"
          variant="contained"
          onClick={onLogin}
          disabled={loading}
          fullWidth
        >
          Sign in
        </Button>
        {loading && (
          <CircularProgress
            size={24}
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              marginTop: "-12px",
              marginLeft: "-12px",
            }}
          />
        )}
      </Box>
      <Typography
        component="span"
        color="red"
        visibility={loginError ? "visible" : "hidden"}
      >
        {loginError || "No error"}
      </Typography>
      <Box display="flex" justifyContent="space-between" pt={1}>
        <Link href="/accounts/forgot-password">Forgot password?</Link>
        <Link href="/accounts/signup">Sign up</Link>
      </Box>
    </AuthContainer>
  );
};

export default LoginPage;
