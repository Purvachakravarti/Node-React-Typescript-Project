// src/theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Adjust based on screenshot
    },
    secondary: {
      main: "#ff4081", // Adjust based on screenshot
    },
    background: {
      default: "#f5f5f5", // Background color of the app
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif", // Ensure the font matches
    h4: {
      fontWeight: 600,
      fontSize: "1.5rem",
    },
    body1: {
      fontSize: "1rem",
    },
    body2: {
      fontSize: "0.875rem",
    },
  },
});

export default theme;
