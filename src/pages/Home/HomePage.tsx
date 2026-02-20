import Hero from "./components/Hero";
import AppSection from "./components/AppSection";
import { useTranslation } from "react-i18next";
import AboutArekaSection from "./components/AboutArekaSection";
import IndividualImpactSection from "./components/IndividualImpactSection";
import Seo from "../../components/Seo";
import { useParams } from "react-router-dom";
import PageContainer from "../../components/PageContainer";

const HomePage = () => {
  const { t } = useTranslation();
  const { lng } = useParams<{ lng: "tr" | "en" }>();
  const lang = lng === "en" ? "en" : "tr";

  return (
    <>
      <Seo
        title={t("homePage.seo.title")}
        description={t("homePage.seo.description")}
        canonical={`/${lang}`}
        ogImage="/og/app-areka.png"
      />
      <Hero />
      <PageContainer>
        <AppSection t={t} />
        <AboutArekaSection t={t} />
        <IndividualImpactSection t={t} />
      </PageContainer>
    </>
  );
};
export default HomePage;
