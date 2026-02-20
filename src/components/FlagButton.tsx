import { IconButton, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import Icon from "../utils/icon";

const FlagButton = ({ textEn, textTr }: { textEn: string; textTr: string }) => {
  const { i18n } = useTranslation();
  const { lng } = useParams<{ lng: "tr" | "en" }>();
  const navigate = useNavigate();
  const location = useLocation();

  const currentLang = lng ?? "tr";

  const toggleLang = () => {
    const nextLang = currentLang === "tr" ? "en" : "tr";

    i18n.changeLanguage(nextLang);

    const newPath = location.pathname.replace(
      `/${currentLang}`,
      `/${nextLang}`
    );

    navigate(newPath);
  };

  return (
    <IconButton onClick={toggleLang}>
      <Icon name="language" size={26} sx={{ color: "white" }} />
      <Typography
        sx={{ color: "white", fontSize: 18, fontWeight: 300, ml: 0.5 }}
      >
        {currentLang === "tr" ? textEn : textTr}
      </Typography>
    </IconButton>
  );
};

export default FlagButton;
