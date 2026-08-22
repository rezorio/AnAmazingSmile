export type GalleryCase = {
  id: string
  title: string
  procedure: string
  outcome: string
  before: string
  after: string
}

/**
 * Before/after cases from the original An Amazing Smile smile gallery
 * (anamazingsmileaz.com/gallery) — assets mirrored under /public/gallery.
 */
export const galleryCases: GalleryCase[] = [
  {
    id: 'composite',
    title: "Michael’s story",
    procedure: 'Composite buildup',
    outcome: 'Closing spaces and rebuilding shape for a fuller, balanced smile',
    before: '/gallery/composite_before.webp',
    after: '/gallery/composite_after.webp',
  },
  {
    id: 'veneers01',
    title: 'Veneer transformation',
    procedure: 'Dental veneers',
    outcome: 'A brighter, more even smile line with refined tooth shape',
    before: '/gallery/veneers01_before.webp',
    after: '/gallery/veneers01_after.webp',
  },
  {
    id: 'veneers02',
    title: 'Smile design with veneers',
    procedure: 'Dental veneers',
    outcome: 'Harmonized color and contour for a natural, confident look',
    before: '/gallery/veneers02_before.webp',
    after: '/gallery/veneers02_after.webp',
  },
  {
    id: 'bonding01',
    title: 'Bonding refresh',
    procedure: 'Dental bonding',
    outcome: 'Repaired chips and gaps with tooth-colored composite',
    before: '/gallery/bonding01_before.webp',
    after: '/gallery/bonding01_after.webp',
  },
  {
    id: 'bonding02',
    title: 'Bonding detail work',
    procedure: 'Dental bonding',
    outcome: 'Smoother edges and a more uniform front smile',
    before: '/gallery/bonding02_before.webp',
    after: '/gallery/bonding02_after.webp',
  },
  {
    id: 'crown',
    title: 'Crown restoration',
    procedure: 'Dental crown',
    outcome: 'Strength and appearance restored on a compromised tooth',
    before: '/gallery/crown_before.webp',
    after: '/gallery/crown_after.webp',
  },
  {
    id: 'bridge',
    title: 'Bridge replacement',
    procedure: 'Dental bridge',
    outcome: 'Missing teeth replaced with a natural-looking span',
    before: '/gallery/bridge_before.webp',
    after: '/gallery/bridge_after.webp',
  },
  {
    id: 'implant01',
    title: 'Implant placement',
    procedure: 'Dental implant',
    outcome: 'A stable replacement tooth that blends with the smile',
    before: '/gallery/implant01_before.webp',
    after: '/gallery/implant01_after.webp',
  },
  {
    id: 'dentures',
    title: 'Denture smile',
    procedure: 'Dentures',
    outcome: 'Full-arch support with a refreshed, confident appearance',
    before: '/gallery/dentures_before.webp',
    after: '/gallery/dentures_after.webp',
  },
]

export const insurancePlans = [
  'Aetna',
  'Ameriplan',
  'Assurant',
  'BCBS AZ',
  'Cigna PPO',
  'Most AHCCCS plans',
  'Careington',
  'DenteMax',
  'Delta Dental',
  'EDS HMO',
  'EMS',
  'Guardian',
  'Humana',
  'MetLife',
  'Principal',
  'Savon',
  'Secure Care',
  'TDA — HMO',
  'United Concordia',
  'UnitedHealthcare',
] as const
