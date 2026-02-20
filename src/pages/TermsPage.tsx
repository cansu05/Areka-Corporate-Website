import { Box, Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import BodyText from "../components/BodyText";
import Seo from "../components/Seo";

const TermsPage = () => {
  const { t } = useTranslation();
  const { lng } = useParams<{ lng: "tr" | "en" }>();

  const lang = lng ?? "tr";
  const slug = lang === "tr" ? "kullanim-kosullari" : "terms-of-use";

  return (
    <Container maxWidth="xl" sx={{ placeItems: "center", marginY: 10 }}>
      <Seo
        title={t("termsPage.seo.title")}
        description={t("termsPage.seo.description")}
        canonical={`/${lang}/${slug}`}
      />
      <Box sx={{ placeItems: "start" }}>
        <BodyText sx={{ mt: 2 }}>{t("termsPage.p1")}</BodyText>
        <BodyText sx={{ mt: 2 }}>{t("termsPage.p2")}</BodyText>
        <BodyText sx={{ mt: 2 }}>{t("termsPage.p3")}</BodyText>

        <BodyText sx={{ mt: 2 }}>{t("termsPage.p4")}</BodyText>
        <BodyText sx={{ mt: 2 }}>{t("termsPage.p5")}</BodyText>
        <BodyText sx={{ mt: 2 }}>{t("termsPage.p6")}</BodyText>
        <BodyText sx={{ mt: 2 }}>{t("termsPage.p7")}</BodyText>
      </Box>
    </Container>
  );
};
export default TermsPage;
