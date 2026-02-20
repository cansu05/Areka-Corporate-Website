import { Container, Typography, Box } from "@mui/material";
import ArekaUnicorn from "../assets/areka-unicorn.svg";
import Seo from "../components/Seo";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import BodyText from "../components/BodyText";

const ArekaManifestoPage = () => {
  const { t } = useTranslation();
  const { lng } = useParams<{ lng: "tr" | "en" }>();

  const lang = lng ?? "tr";
  const slug = lang === "tr" ? "manifesto" : "manifesto";

  return (
    <Container maxWidth="xl" sx={{ placeItems: "center", marginY: 10 }}>
      <Seo
        title={t("manifesto.seo.title")}
        description={t("manifesto.seo.description")}
        canonical={`/${lang}/${slug}`}
        ogImage="/og/areka-unicorn-og.jpg"
      />

      <Box
        component="img"
        src={ArekaUnicorn}
        alt={t("manifesto.imageAlt")}
        sx={{
          width: { xs: "100%", sm: "60%", lg: "50%" },
          height: "auto",
        }}
        loading="eager"
        decoding="async"
      />

      <Typography
        component="h1"
        variant="h3"
        sx={{ mt: 3, fontSize: 26, fontWeight: "600" }}
      >
        {t("manifesto.title")}
      </Typography>
      <Box sx={{ placeItems: "start" }}>
        <BodyText sx={{ mt: 2 }}>{t("manifesto.p1")}</BodyText>
        <BodyText sx={{ mt: 2 }}>{t("manifesto.p2")}</BodyText>
        <BodyText sx={{ mt: 2 }}>{t("manifesto.p3")}</BodyText>

        <BodyText sx={{ mt: 2 }}>
          <span style={{ color: "#0E7C5A", fontWeight: "bold", fontSize: 18 }}>
            {t("manifesto.subtitle")}
          </span>{" "}
          {t("manifesto.p4")}
        </BodyText>
        <BodyText sx={{ mt: 2 }}>{t("manifesto.p5")}</BodyText>
        <BodyText sx={{ mt: 2 }}>{t("manifesto.p6")}</BodyText>
        <BodyText sx={{ mt: 2 }}>{t("manifesto.p7")}</BodyText>
        <BodyText sx={{ mt: 2 }}>{t("manifesto.p8")}</BodyText>
      </Box>
    </Container>
  );
};

export default ArekaManifestoPage;
