import { Box } from "@mui/material";
import type { TFunction } from "i18next";
import Image from "../../../assets/home-about-Areka.svg";
import BodyText from "../../../components/BodyText";

const AboutArekaSection = ({ t }: { t: TFunction }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: { sm: 10, lg: 20 },
      }}
    >
      <Box
        component="img"
        src={Image}
        alt={t("homePage.AboutArekaSection.imageAlt")}
        sx={{
          display: { xs: "none", md: "block" },
          width: "35%",
          height: "auto",
        }}
        loading="eager"
        decoding="async"
      />
      <Box>
        <BodyText>{t("homePage.AboutArekaSection.p1")}</BodyText>
        <BodyText sx={{ mt: 2 }}>{t("homePage.AboutArekaSection.p2")}</BodyText>
        <BodyText sx={{ mt: 2, color: "secondary.main" }}>
          {t("homePage.AboutArekaSection.p3")}
        </BodyText>
      </Box>
    </Box>
  );
};
export default AboutArekaSection;
