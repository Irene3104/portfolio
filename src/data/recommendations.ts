export interface Recommendation {
  quote: string;
  name: string;
  role: string;
  initials: string;
  source?: string;
}

export const recommendations: Recommendation[] = [
  {
    quote:
      "Seoyoon built our entire SAIXAN platform single-handedly — from architecture to deployment. Her ability to own the full stack while integrating AI features was exceptional.",
    name: "Shohei Takarabe",
    role: "CEO, TEN-X Co., Ltd.",
    initials: "ST",
    source: "Reference available on request",
  },
  {
    quote:
      "Bee-Time transformed how we manage staff across 5 stores. Seoyoon delivered a reliable, polished product and continues to improve it based on our real-world feedback.",
    name: "Eugene Jun",
    role: "Director, JUNCAFE OPERA PTY LTD",
    initials: "EJ",
    source: "Reference available on request",
  },
  {
    quote:
      "Seoyoon's bilingual coordination between our Korean engineers and Japanese clients dramatically improved our workflow. Her technical skills in C++ and DICOM were equally strong.",
    name: "Junseop Kim",
    role: "Assistant Manager, Genoray Flexlab",
    initials: "JK",
    source: "Reference available on request",
  },
];
