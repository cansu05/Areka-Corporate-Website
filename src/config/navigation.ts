export type NavItem = {
  id: number;
  key: string;
  paths: {
    tr: string;
    en: string;
  };
};

export type SocialLink = {
  id: number;
  key: string;
  url: string;
};

export const navItems: NavItem[] = [
  {
    id: 1,
    key: "nav.home",
    paths: { tr: "", en: "" },
  },
  {
    id: 2,
    key: "nav.about",
    paths: { tr: "hakkimizda", en: "about" },
  },
  {
    id: 3,
    key: "nav.manifesto",
    paths: { tr: "manifesto", en: "manifesto" },
  },
  {
    id: 4,
    key: "nav.contact",
    paths: { tr: "iletisim", en: "contact" },
  },
];

export const legalNavItems: NavItem[] = [
  {
    id: 1,
    key: "footer.legal.terms",
    paths: { tr: "kullanim-kosullari", en: "terms-of-use" },
  },
  {
    id: 2,
    key: "footer.legal.privacy",
    paths: { tr: "gizlilik-politikasi", en: "privacy-policy" },
  },
  {
    id: 3,
    key: "footer.legal.distanceSales",
    paths: {
      tr: "mesafeli-satis-sozlesmesi",
      en: "distance-sales-agreement",
    },
  },
];

export const socialNavItems: SocialLink[] = [
  {
    id: 1,
    key: "footer.social.linkedin",
    url: "linkedin.com/company/Areka-carbon-hub/",
  },

  {
    id: 2,
    key: "footer.social.instagram",
    url: "https://www.instagram.com/Arekacarbonhub/",
  },
];
