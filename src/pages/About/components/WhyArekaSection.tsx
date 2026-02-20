import { Box, Paper } from "@mui/material";
import Image from "../../../assets/why-Areka.svg";
import type { TFunction } from "i18next";
import Title from "../../../components/Title";
import ListText from "../../../components/ListText";
const WhyArekaSection = ({ t }: { t: TFunction }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        gap: { xs: 3, sm: 3, md: 8, lg: 12 },
      }}
    >
      <Box
        component="img"
        src={Image}
        alt={t("aboutPage.whyArekaSection.imageAlt")}
        sx={{
          display: { xs: "none", md: "block" },
          width: { md: "30%", lg: "30%" },
          height: "auto",
        }}
        loading="eager"
        decoding="async"
      />

      <Paper sx={{ bgcolor: "white", padding: 3 }}>
        <Title>{t("aboutPage.whyArekaSection.title")}</Title>
        <Box
          component="ul"
          sx={{
            pl: 3,
            listStyleType: "disc",
            mt: 3,
          }}
        >
          <ListText>{t("aboutPage.whyArekaSection.p1")}</ListText>
          <ListText>{t("aboutPage.whyArekaSection.p2")}</ListText>
          <ListText>{t("aboutPage.whyArekaSection.p3")}</ListText>
          <ListText>{t("aboutPage.whyArekaSection.p4")}</ListText>
          <ListText>{t("aboutPage.whyArekaSection.p5")}</ListText>
          <ListText>{t("aboutPage.whyArekaSection.p6")}</ListText>
          <ListText>{t("aboutPage.whyArekaSection.p7")}</ListText>
        </Box>
      </Paper>
    </Box>
  );
};
export default WhyArekaSection;
