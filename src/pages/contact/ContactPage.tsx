import PageContainer from "../../components/PageContainer";
import ContactCardSection from "./components/ContactCardSection";
import MapSection from "./components/MapSection";
import { useParams } from "react-router-dom";
import Seo from "../../components/Seo";
import { useTranslation } from "react-i18next";
import FormSection from "./components/FormSection";

const ContactPage = () => {
  const { t } = useTranslation();
  const { lng } = useParams<{ lng: "tr" | "en" }>();

  const lang = lng ?? "tr";
  const slug = lang === "tr" ? "iletisim" : "contact";

  return (
    <>
      <Seo
        title={t("contactPage.seo.title")}
        description={t("contactPage.seo.description")}
        canonical={`/${lang}/${slug}`}
      />
      <FormSection t={t} />
      <PageContainer>
        <ContactCardSection t={t} />
        <MapSection />
      </PageContainer>
    </>
  );
};
export default ContactPage;
