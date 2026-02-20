import { createTheme, alpha } from "@mui/material/styles";
import { Colors } from "./colors";

type Mode = "light" | "dark";
import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    icon: {
      main: string;
      secondary: string;
    };
  }

  interface PaletteOptions {
    icon?: {
      main: string;
      secondary: string;
    };
  }
}

export function getTheme(mode: Mode = "light") {
  return createTheme({
    palette: {
      mode,

      primary: { main: Colors.primary },
      secondary: { main: Colors.secondary },

      background: {
        paper: Colors.primary,
        default: "#ffffff",
      },

      text: {
        primary: "#424242",
        secondary: "#ffffff",
      },

      divider: alpha("#0F172A", 0.1),

      icon: {
        main: Colors.primary,
        secondary: "#ffffff",
      },
    },

    typography: {
      fontFamily: `"Saira Semi Condensed", "Roboto", "Helvetica", "Arial", sans-serif`,
      subtitle1: { fontSize: 18, lineHeight: 1.7, textAlign: "justify" },
      button: { textTransform: "none", fontWeight: 500 },
    },

    shape: { borderRadius: 8 },

    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: { backgroundImage: "none" },
        },
      },
    },
  });
}
