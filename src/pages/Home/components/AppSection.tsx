import { Box, Typography } from "@mui/material";
import type { TFunction } from "i18next";
import appImg from "../../../assets/areka-app.svg";
import Title from "../../../components/Title";

const AppSection = ({ t }: { t: TFunction }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 5,
        width: 1,
      }}
    >
      <Box>
        <Title>{t("homePage.appSection.title")}</Title>
        <Typography
          component="h1"
          textAlign="justify"
          lineHeight={1.5}
          variant="h5"
          mt={1}
        >
          {t("homePage.appSection.subtitle")}
        </Typography>
      </Box>
      <Box
        component="img"
        src={appImg}
        alt={t("homePage.appSection.imageAlt")}
        sx={{
          width: { xs: "100%", sm: "90%", md: "70%", lg: "70%" },
          height: "auto",
        }}
        loading="eager"
        decoding="async"
      />
    </Box>
  );
};
export default AppSection;
