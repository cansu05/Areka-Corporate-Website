import { NavLink, useParams } from "react-router-dom";
import type { NavItem } from "../config/navigation";
import { useTranslation } from "react-i18next";

const Links = ({ data }: { data: NavItem[] }) => {
  const { lng } = useParams<{ lng: "tr" | "en" }>();
  const { t } = useTranslation();
  const lang = lng ?? "tr";
  return (
    <>
      {data.map(({ key, paths }) => (
        <NavLink
          key={key}
          to={paths[lang]}
          end={paths[lang] === ""}
          style={({ isActive }) => ({
            color: "#fff",
            textDecoration: "none",
            fontWeight: isActive ? 600 : 300,
            fontSize: 18,
          })}
        >
          {t(key)}
        </NavLink>
      ))}
    </>
  );
};
export default Links;
