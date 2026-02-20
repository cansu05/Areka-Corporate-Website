import { Navigate, Outlet, useParams } from "react-router-dom";
import { useEffect } from "react";
import i18n from "../i18n";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { getTheme } from "../config/theme";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const theme = getTheme("light");

const MainLayout = () => {
  const { lng } = useParams<{ lng: "tr" | "en" }>();

  useEffect(() => {
    if (lng === "tr" || lng === "en") {
      if (i18n.language !== lng) i18n.changeLanguage(lng);
    }
  }, [lng]);

  if (lng !== "tr" && lng !== "en") return <Navigate to="/tr" replace />;
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Navbar />
        <Box sx={{ flex: 1 }}>
          <Outlet />
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default MainLayout;
