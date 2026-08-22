export const site = {
  name: 'An Amazing Smile',
  legalName: 'An Amazing Smile, PLLC',
  tagline: 'Where confidence begins.',
  supportLine:
    'Compassionate care with Dr. Zena Alshukri — cleanings to smile makeovers, in a calm Tempe studio.',
  phone: '(480) 993-3696',
  phoneHref: 'tel:+14809933696',
  email: 'info@anamazingsmileaz.com',
  address: {
    line1: '1415 E Guadalupe Rd Ste 105',
    city: 'Tempe',
    state: 'AZ',
    zip: '85283',
    full: '1415 E Guadalupe Rd Ste 105, Tempe, AZ 85283',
  },
  mapEmbedUrl:
    'https://maps.google.com/maps?q=1415+E+Guadalupe+Rd+Ste+105,+Tempe,+AZ+85283&t=&z=15&ie=UTF8&iwloc=&output=embed',
  mapLink:
    'https://www.google.com/maps/dir/?api=1&destination=1415+E+Guadalupe+Rd+Ste+105,+Tempe,+AZ+85283',
  serviceArea: [
    'Tempe',
    'Chandler',
    'Mesa',
    'Gilbert',
    'Scottsdale',
    'Phoenix',
  ],
  social: {
    facebook: 'https://www.facebook.com/',
    instagram: 'https://www.instagram.com/',
    yelp: 'https://www.yelp.com/',
    google: 'https://www.google.com/maps/search/?api=1&query=An+Amazing+Smile+Tempe',
  },
  doctor: {
    name: 'Dr. Zena Alshukri',
    shortName: 'Dr. Zena',
    credentials: 'DDS',
    title: 'Tempe Dentist',
    education:
      'Doctor of Dental Surgery (DDS), University of Detroit Mercy School of Dentistry, 2010',
    experienceYears: 'over a decade',
  },
} as const

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Smile Gallery', to: '/gallery' },
  { label: 'Patient Info', to: '/patient-info' },
  { label: 'Contact', to: '/contact' },
] as const

export const hours = [
  { day: 'Monday', time: '10:00 am – 4:00 pm' },
  { day: 'Tuesday', time: '10:00 am – 4:00 pm' },
  { day: 'Wednesday', time: '11:00 am – 6:00 pm' },
  { day: 'Thursday', time: '10:00 am – 4:00 pm' },
  { day: 'Friday', time: '9:00 am – 5:00 pm' },
  { day: 'Saturday', time: '10:00 am – 4:00 pm' },
  { day: 'Sunday', time: 'Closed' },
] as const
