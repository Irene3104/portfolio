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
      "What stands out about Seoyoon isn't just her engineering — it's the breadth of experience she brings from outside of IT. When we started building SAIXAN, she had no background in accounting or how Japanese P&L structures work, but she picked it up remarkably fast and delivered exactly what we needed. She's already a strong developer, but what I value most is her potential to keep growing, and how well she understands the business side, not just the code.",
    name: "Shohei Takarabe",
    role: "CEO, TEN-X Co., Ltd.",
    initials: "ST",
    source: "Reference available on request",
  },
  {
    quote:
      "Working with Seoyoon as a client was honestly easy in the best way. She built exactly what I asked for, but she also thought about how my staff would actually use it and suggested features I hadn't even considered. She delivered on time, no fuss, no surprises. Bee-Time genuinely changed how I run my stores — we used to track everyone's hours with a card-and-ink machine and calculate wages by hand across multiple locations. Now it's all in one place. We saved on hardware costs and got hours of admin time back every week. If I had to sum up her work in one line: clean, accurate, and on point.",
    name: "Eugene Jun",
    role: "CEO, JUNCAFE OPERA PTY LTD",
    initials: "EJ",
    source: "Reference available on request",
  },
  {
    quote: "",
    name: "Stephen Han",
    role: "",
    initials: "SH",
    source: "Reference available on request",
  },
];
