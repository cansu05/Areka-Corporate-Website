import { Box, Container } from "@mui/material";
import Seo from "../components/Seo";
import BodyText from "../components/BodyText";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import ListText from "../components/ListText";

const PrivacyPage = () => {
  const { t } = useTranslation();
  const { lng } = useParams<{ lng: "tr" | "en" }>();

  const lang = lng ?? "tr";
  const slug = lang === "tr" ? "gizlilik-politikasi" : "privacy-policy";

  return (
    <Container maxWidth="xl" sx={{ placeItems: "center", marginY: 10 }}>
      <Seo
        title={t("privacyPage.seo.title")}
        description={t("privacyPage.seo.description")}
        canonical={`/${lang}/${slug}`}
      />
      <Box sx={{ placeItems: "start" }}>
        <BodyText sx={{ mt: 2 }}>{t("privacyPage.intro")}</BodyText>
        {/* SECTİON 1 */}
        <BodyText sx={{ mt: 2, fontWeight: 600, fontSize: 20 }}>
          {t("privacyPage.section1.title")}
        </BodyText>
        <BodyText sx={{ mb: 1 }}>{t("privacyPage.section1.p1")}</BodyText>
        <Box
          component="ul"
          sx={{
            pl: 3,
            listStyleType: "disc",
          }}
        >
          <ListText>{t("privacyPage.section1.b1")}</ListText>
          <ListText>{t("privacyPage.section1.b2")}</ListText>
          <ListText>{t("privacyPage.section1.b3")}</ListText>
        </Box>

        {/* SECTİON 2 */}
        <BodyText sx={{ mt: 2, fontWeight: 600, fontSize: 20 }}>
          {t("privacyPage.section2.title")}
        </BodyText>
        <BodyText sx={{ mb: 1 }}>{t("privacyPage.section2.p1")}</BodyText>
        <Box
          component="ul"
          sx={{
            pl: 3,
            listStyleType: "disc",
          }}
        >
          <ListText>{t("privacyPage.section2.b1")}</ListText>
          <ListText>{t("privacyPage.section2.b2")}</ListText>
          <ListText>{t("privacyPage.section2.b3")}</ListText>
          <ListText>{t("privacyPage.section2.b4")}</ListText>
        </Box>

        {/* SECTİON 3 */}
        <BodyText sx={{ mt: 2, fontWeight: 600, fontSize: 20 }}>
          {t("privacyPage.section3.title")}
        </BodyText>

        <BodyText>{t("privacyPage.section3.p1")}</BodyText>
        <BodyText>{t("privacyPage.section3.p2")}</BodyText>
        <BodyText>{t("privacyPage.section3.p3")}</BodyText>

        {/* SECTİON 4 */}
        <BodyText sx={{ mt: 2, fontWeight: 600, fontSize: 20 }}>
          {t("privacyPage.section4.title")}
        </BodyText>
        <BodyText>{t("privacyPage.section4.p1")}</BodyText>
        <BodyText>{t("privacyPage.section4.p2")}</BodyText>

        {/* SECTİON 5 */}
        <BodyText sx={{ mt: 2, fontWeight: 600, fontSize: 20 }}>
          {t("privacyPage.section5.title")}
        </BodyText>
        <BodyText>{t("privacyPage.section5.p1")}</BodyText>
        <BodyText>{t("privacyPage.section5.p2")}</BodyText>

        {/* SECTİON 6 */}
        <BodyText sx={{ mt: 2, fontWeight: 600, fontSize: 20 }}>
          {t("privacyPage.section6.title")}
        </BodyText>
        <BodyText sx={{ mb: 1 }}>{t("privacyPage.section6.p1")}</BodyText>
        <Box
          component="ul"
          sx={{
            pl: 3,
            listStyleType: "disc",
          }}
        >
          <ListText>{t("privacyPage.section6.b1")}</ListText>
          <ListText>{t("privacyPage.section6.b2")}</ListText>
          <ListText>{t("privacyPage.section6.b3")}</ListText>
          <ListText>{t("privacyPage.section6.b5")}</ListText>
        </Box>
        <BodyText>{t("privacyPage.section6.p2")}</BodyText>

        {/* SECTİON 7 */}
        <BodyText sx={{ mt: 2, fontWeight: 600, fontSize: 20 }}>
          {t("privacyPage.section7.title")}
        </BodyText>
        <BodyText>{t("privacyPage.section7.p1")}</BodyText>

        {/* SECTİON 8 */}
        <BodyText sx={{ mt: 2, fontWeight: 600, fontSize: 20 }}>
          {t("privacyPage.section8.title")}
        </BodyText>
        <BodyText>{t("privacyPage.section8.p1")}</BodyText>
        <BodyText>{t("privacyPage.section8.p2")}</BodyText>

        <BodyText sx={{ mt: 2 }}>{t("privacyPage.lastUpdated")}</BodyText>
      </Box>
    </Container>
  );
};
export default PrivacyPage;
