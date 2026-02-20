import { Box } from "@mui/material";
import certificateImage from "../../../assets/certificate.svg";
import type { TFunction } from "i18next";
import Title from "../../../components/Title";

const CertificationSection = ({ t }: { t: TFunction }) => {
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
      <Title>{t("aboutPage.certificationSection.title")}</Title>
      <Box
        component="img"
        src={certificateImage}
        alt={t("aboutPage.certificationSection.imageAlt")}
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
export default CertificationSection;
