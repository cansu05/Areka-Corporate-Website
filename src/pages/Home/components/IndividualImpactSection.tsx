import { Box } from "@mui/material";
import type { TFunction } from "i18next";
import Image1 from "../../../assets/climate1.svg";
import Image2 from "../../../assets/climate2.svg";
import Title from "../../../components/Title";
import BodyText from "../../../components/BodyText";

const IndividualImpactSection = ({ t }: { t: TFunction }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 5,
      }}
    >
      <Title>{t("homePage.individualImpact.title")}</Title>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 3, sm: 10, lg: 20 },
        }}
      >
        <Box>
          <BodyText>{t("homePage.individualImpact.p1")}</BodyText>
          <BodyText sx={{ mt: 2 }}>
            {t("homePage.individualImpact.p2")}
          </BodyText>
        </Box>
        <Box
          component="img"
          src={Image1}
          alt={t("homePage.individualImpact.imageAlt1")}
          sx={{
            width: { xs: "70%", sm: "40%", md: "35%" },
            height: "auto",
          }}
          loading="eager"
          decoding="async"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 3, sm: 10, lg: 20 },
        }}
      >
        <Box
          component="img"
          src={Image2}
          alt={t("homePage.individualImpact.imageAlt2")}
          sx={{
            width: { xs: "70%", sm: "40%", md: "35%" },
            height: "auto",
          }}
          loading="eager"
          decoding="async"
        />
        <Box>
          <BodyText>{t("homePage.individualImpact.p3")}</BodyText>
          <BodyText sx={{ mt: 2 }}>
            {t("homePage.individualImpact.p4")}
          </BodyText>
        </Box>
      </Box>
    </Box>
  );
};
export default IndividualImpactSection;
