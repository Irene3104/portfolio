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
      "What stands out about Seoyoon isn't just her engineering. It's the breadth of experience she brings from outside of IT. When we started building SAIXAN, she had no background in accounting or how Japanese P&L structures work. Honestly, I wasn't sure how long it would take her to get up to speed. But she picked it up much faster than I expected, asked the right questions, and translated our messy internal logic into a system that actually works the way we run the business. She delivered the whole platform on her own, from architecture to deployment, and kept improving it based on feedback from our internal teams and external clients. She's already a strong developer, but what I value most is her potential to keep growing. She understands the business side, not just the code, and that's rare. Whenever I bring up a new idea, she thinks about it from both an operational and a technical angle before she answers, which makes her easy to work with at the management level too.",
    name: "Shohei Takarabe",
    role: "CEO, TEN-X Co., Ltd.",
    initials: "ST",
    source: "Reference available on request",
  },
  {
    quote:
      "Working with Seoyoon as a client was honestly easy in the best way. She built exactly what I asked for, but she also thought about how my staff would actually use it and suggested features I hadn't even considered. She delivered on time, no fuss, no surprises. Bee-Time genuinely changed how I run my stores. We used to track everyone's hours with a card-and-ink machine and calculate wages by hand across multiple locations. Now it's all in one place. We saved on hardware costs and got hours of admin time back every week. If I had to sum up her work in one line: clean, accurate, and on point.",
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
