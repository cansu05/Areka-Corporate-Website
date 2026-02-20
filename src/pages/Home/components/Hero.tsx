import { Box, Typography } from "@mui/material";
import HeroImg from "../../../assets/home-hero.png";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        width: "100%",
        height: "800px",
        backgroundImage: `url(${HeroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 6,
        p: { xs: 8, md: 0 },
      }}
    >
      <Typography
        component="h1"
        variant="h3"
        sx={{
          color: "white",
          textAlign: "center",
          fontWeight: "600",
          lineHeight: { xs: 1.4, md: 1.2 },
        }}
      >
        {t("homePage.hero.title")}
      </Typography>
      <Typography
        component="h2"
        variant="h4"
        maxWidth="md"
        sx={{
          display: { xs: "none", md: "block" },
          lineHeight: 1.5,
          textAlign: "center",
          color: "white",
        }}
      >
        {t("homePage.hero.subtitle")}
      </Typography>
    </Box>
  );
};
export default Hero;
