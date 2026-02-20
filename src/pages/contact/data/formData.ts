export type ContactField = {
  name: string;
  labelKey: string;
  placeholderKey: string;
  multiline?: boolean;
  rows?: number;
};

export const contactFormFields: ContactField[] = [
  {
    name: "name",
    labelKey: "contactPage.formSection.fields.name.label",
    placeholderKey: "contactPage.formSection.fields.name.placeholder",
  },
  {
    name: "email",
    labelKey: "contactPage.formSection.fields.email.label",
    placeholderKey: "contactPage.formSection.fields.email.placeholder",
  },
  {
    name: "message",
    labelKey: "contactPage.formSection.fields.message.label",
    placeholderKey: "contactPage.formSection.fields.message.placeholder",
    multiline: true,
    rows: 4,
  },
];
