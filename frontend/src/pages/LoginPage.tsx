import React, { useState } from "react";
import { login } from "../api/auth";
import { Box, Typography, Alert, TextField, Button } from "@mui/material";
import { LoginFormValues, loginSchema } from "../validations/loginValidation";

const LoginPage = () => {
  const [formValues, setFormValues] = useState<LoginFormValues>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loginError, setLoginError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = loginSchema.safeParse(formValues);

    if (!result.success) {
      // Collect errors into a readable format
      const formattedErrors: Record<string, string> = {};
      result.error.errors.forEach((error) => {
        if (error.path[0]) {
          formattedErrors[error.path[0] as string] = error.message;
        }
      });
      setErrors(formattedErrors);
      return;
    }

    // Clear errors and handle login logic
    setErrors({});
    await login(formValues.email, formValues.password)
      .then(() => {
        alert("Login successful");
        window.location.href = "/invoices"; // Redirect after login
      })
      .catch((err) => {
        setLoginError(err.message);
      });
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        margin: "auto",
        marginTop: 8,
        padding: 4,
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: "#fff",
      }}
    >
      <Typography variant="h5" sx={{ textAlign: "center", marginBottom: 2 }}>
        Login
      </Typography>

      {loginError && <Alert severity="error">{loginError}</Alert>}

      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          name="email"
          value={formValues.email}
          onChange={handleInputChange}
          error={!!errors.email}
          helperText={errors.email}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          value={formValues.password}
          onChange={handleInputChange}
          error={!!errors.password}
          helperText={errors.password}
          fullWidth
          margin="normal"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ marginTop: 2 }}
        >
          Login
        </Button>
      </form>
    </Box>
  );
};

export default LoginPage;
