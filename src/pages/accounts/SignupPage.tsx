import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import AuthContainer from "../../components/auth/AuthContainer";
import Link from "../../components/ui/Link";
import { auth } from "../../firebase";

const emptyFormField = () => ({
  value: "",
  error: false,
});

const SignupPage = () => {
  const [email, setEmail] = useState(emptyFormField());
  const [password, setPassword] = useState(emptyFormField());
  const [confirmPassword, setConfirmPassword] = useState(emptyFormField());
  const [loading, setLoading] = useState(false);
  const [signupError, setSignupError] = useState("");

  const onEmailChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setSignupError("");
    setEmail({
      value: ev.target.value,
      error: false,
    });
  };

  const onPasswordChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setSignupError("");
    setPassword({
      value: ev.target.value,
      error: false,
    });
  };

  const onConfirmPasswordChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setSignupError("");
    setConfirmPassword({
      value: ev.target.value,
      error: false,
    });
  };

  const onLogin = () => {
    setSignupError("");

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

    if (
      confirmPassword.value === "" ||
      confirmPassword.value !== password.value
    ) {
      valid = false;
      setConfirmPassword({
        value: password.value,
        error: true,
      });
    }

    if (!valid) {
      return;
    }

    setLoading(true);
    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((credential) => {
        console.log(credential);
      })
      .catch(() => {
        setSignupError("Could not create account.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <AuthContainer>
      <TextField
        label="Email"
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
      <TextField
        label="Confirm password"
        type="password"
        size="small"
        value={confirmPassword.value}
        error={confirmPassword.error}
        helperText={confirmPassword.error ? "Must match password" : " "}
        onChange={onConfirmPasswordChange}
      />
      <Box position="relative">
        <Button
          size="large"
          variant="contained"
          onClick={onLogin}
          disabled={loading}
          fullWidth
        >
          Sign up
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
        visibility={signupError ? "visible" : "hidden"}
      >
        {signupError || "No error"}
      </Typography>
      <Box display="flex" justifyContent="center" pt={1}>
        Have an account? &nbsp; <Link href="/accounts/login">Sign in</Link>
      </Box>
    </AuthContainer>
  );
};

export default SignupPage;
