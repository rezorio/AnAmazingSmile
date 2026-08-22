export type Review = {
  quote: string
  author: string
  source: string
}

/** Curated reviews — Groupon-led quotes intentionally omitted for premium tone */
export const reviews: Review[] = [
  {
    quote:
      'All the doctors and staff are very welcoming, and do an awesome job making you feel comfortable.',
    author: 'Denise Aguayo',
    source: 'Google',
  },
  {
    quote:
      'Very welcoming and nice staff. Very attentive and made me feel comfortable. They made this process as easy as possible.',
    author: 'David Herrera',
    source: 'Google',
  },
  {
    quote:
      'Had an excellent experience here with a basic exam and cleaning. The hygienist Gina was very thorough and a joy to talk to.',
    author: 'Mariah C.',
    source: 'Google',
  },
]
