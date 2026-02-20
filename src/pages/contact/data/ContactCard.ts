export type ContactCardItemProps = {
  id: string;
  icon: string;
  titleKey: string;
  descriptionKey: string;
  valueKey: string;
};

export const contactCards: ContactCardItemProps[] = [
  {
    id: "message",
    icon: "mail",
    titleKey: "contactPage.contactCardSection.message.title",
    descriptionKey: "contactPage.contactCardSection.message.description",
    valueKey: "contactPage.contactCardSection.message.value",
  },
  {
    id: "location",
    icon: "home",
    titleKey: "contactPage.contactCardSection.location.title",
    descriptionKey: "contactPage.contactCardSection.location.description",
    valueKey: "contactPage.contactCardSection.location.address",
  },
];
