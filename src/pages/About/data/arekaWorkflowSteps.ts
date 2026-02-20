type StepBullets = {
  p1: string;
  p2?: string;
  b1: string;
  b2: string;
  b3?: string;
};

export type ArekaWorkflowStepsProps = {
  step: string;
  title: string;
  bullets: StepBullets;
  bgColor: string;
};

export const ArekaWorkflowSteps: ArekaWorkflowStepsProps[] = [
  {
    step: "01",
    title: "aboutPage.ArekaWorkflowSection.step1.title",
    bullets: {
      p1: "aboutPage.ArekaWorkflowSection.step1.bullets.p1",
      b1: "aboutPage.ArekaWorkflowSection.step1.bullets.b1",
      b2: "aboutPage.ArekaWorkflowSection.step1.bullets.b2",
      b3: "aboutPage.ArekaWorkflowSection.step1.bullets.b3",
    },
    bgColor: "#A2BDB0",
  },
  {
    step: "02",
    title: "aboutPage.ArekaWorkflowSection.step2.title",
    bullets: {
      p1: "aboutPage.ArekaWorkflowSection.step2.bullets.p1",
      b1: "aboutPage.ArekaWorkflowSection.step2.bullets.b1",
      b2: "aboutPage.ArekaWorkflowSection.step2.bullets.b2",
      b3: "aboutPage.ArekaWorkflowSection.step2.bullets.b3",
    },
    bgColor: "#84A495",
  },
  {
    step: "03",
    title: "aboutPage.ArekaWorkflowSection.step3.title",
    bullets: {
      p1: "aboutPage.ArekaWorkflowSection.step3.bullets.p1",
      b1: "aboutPage.ArekaWorkflowSection.step3.bullets.b1",
      b2: "aboutPage.ArekaWorkflowSection.step3.bullets.b2",
      p2: "aboutPage.ArekaWorkflowSection.step3.bullets.p2",
    },
    bgColor: "#6A8E7D",
  },
  {
    step: "04",
    title: "aboutPage.ArekaWorkflowSection.step4.title",
    bullets: {
      p1: "aboutPage.ArekaWorkflowSection.step4.bullets.p1",
      b1: "aboutPage.ArekaWorkflowSection.step4.bullets.b1",
      b2: "aboutPage.ArekaWorkflowSection.step4.bullets.b2",
      b3: "aboutPage.ArekaWorkflowSection.step4.bullets.b3",
    },
    bgColor: "#577667",
  },
  {
    step: "05",
    title: "aboutPage.ArekaWorkflowSection.step5.title",
    bullets: {
      p1: "aboutPage.ArekaWorkflowSection.step5.bullets.p1",
      b1: "aboutPage.ArekaWorkflowSection.step5.bullets.b1",
      b2: "aboutPage.ArekaWorkflowSection.step5.bullets.b2",
      b3: "aboutPage.ArekaWorkflowSection.step5.bullets.b3",
      p2: "aboutPage.ArekaWorkflowSection.step5.bullets.p2",
    },
    bgColor: "#415C4F",
  },
  {
    step: "06",
    title: "aboutPage.ArekaWorkflowSection.step6.title",
    bullets: {
      p1: "aboutPage.ArekaWorkflowSection.step6.bullets.p1",
      b1: "aboutPage.ArekaWorkflowSection.step6.bullets.b1",
      b2: "aboutPage.ArekaWorkflowSection.step6.bullets.b2",
      b3: "aboutPage.ArekaWorkflowSection.step6.bullets.b3",
      p2: "aboutPage.ArekaWorkflowSection.step6.bullets.p2",
    },
    bgColor: "#2D463A",
  },
];
