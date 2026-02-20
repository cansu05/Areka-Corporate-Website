import Hero from "./components/Hero";
import { useTranslation } from "react-i18next";
import CertificationSection from "./components/CertificationSection";
import PageContainer from "../../components/PageContainer";
import WhyArekaSection from "./components/WhyArekaSection";
import ArekaWorkflowSection from "./components/ArekaWorkflowSection";
import CalculationAreasSection from "./components/CalculationAreasSection";
import Seo from "../../components/Seo";
import OgImage from "../../../public/og/certificate.png";
import { useParams } from "react-router-dom";

const AboutPage = () => {
  const { t } = useTranslation();
  const { lng } = useParams<{ lng: "tr" | "en" }>();

  const lang = lng ?? "tr";
  const slug = lang === "tr" ? "hakkimizda" : "about";

  return (
    <>
      <Seo
        title={t("aboutPage.seo.title")}
        description={t("aboutPage.seo.description")}
        canonical={`/${slug}`}
        ogImage={OgImage}
      />
      <Hero />
      <PageContainer>
        <ArekaWorkflowSection t={t} />
        <CertificationSection t={t} />
        <WhyArekaSection t={t} />
        <CalculationAreasSection t={t} />
      </PageContainer>
    </>
  );
};
export default AboutPage;
