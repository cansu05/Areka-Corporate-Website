import { Grid } from "@mui/material";
import { legalNavItems, navItems, socialNavItems } from "../config/navigation";
import Links from "./Links";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LinkContainer from "./LinkContainer";

const FooterItems = () => {
  const { t } = useTranslation();
  return (
    <Grid container columnGap={5} rowGap={3} sx={{ width: 1 }}>
      <Grid size={{ md: 3 }}>
        <LinkContainer>
          <Links data={navItems} />
        </LinkContainer>
      </Grid>
      <Grid size={{ md: 3 }}>
        <LinkContainer>
          <Links data={legalNavItems} />
        </LinkContainer>
      </Grid>
      <Grid size={{ md: 3 }}>
        <LinkContainer>
          {socialNavItems.map(({ key, url }) => (
            <NavLink
              key={key}
              to={url}
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
        </LinkContainer>
      </Grid>
    </Grid>
  );
};
export default FooterItems;
