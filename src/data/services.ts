export type ServiceItem = {
  name: string
  detail: string
}

export type ServiceCategory = {
  id: string
  title: string
  eyebrow: string
  summary: string
  body: string
  idealFor: string[]
  highlights: string[]
  items: ServiceItem[]
}

export const pathways = [
  {
    id: 'cleaning',
    title: 'Cleanings & exams',
    description:
      'Gentle professional care, digital imaging, and a clear plan for your oral health.',
    to: '/services#general',
  },
  {
    id: 'cosmetic',
    title: 'Smile makeovers',
    description:
      'No-prep veneers, Invisalign®, and whitening designed around your goals.',
    to: '/services#cosmetic',
  },
  {
    id: 'emergency',
    title: 'Emergency care',
    description:
      'Same-day priority when pain or injury can’t wait. Call us and we’ll guide you in.',
    to: '/contact',
  },
  {
    id: 'new-patient',
    title: 'New patients',
    description:
      'Forms, insurance guidance, and a calm first visit with Dr. Zena.',
    to: '/patient-info',
  },
] as const

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'general',
    title: 'General & family dentistry',
    eyebrow: 'Everyday care',
    summary:
      'Preventive care for every age — exams, cleanings, and treatments that keep you comfortable.',
    body: 'From a child’s first visit to adult maintenance and same-day emergencies, we focus on clear explanations, gentle technique, and a plan you can actually follow. Digital imaging helps us spot issues early so small problems stay small.',
    idealFor: [
      'Families looking for one trusted office',
      'Patients overdue for a cleaning or exam',
      'Anyone with sudden pain or a chipped tooth',
    ],
    highlights: [
      'Comprehensive exams with digital X-rays',
      'Gentle cleanings and gum care',
      'Emergency visits when something can’t wait',
    ],
    items: [
      {
        name: 'Dental cleanings & exams',
        detail:
          'Professional cleaning, oral evaluation, and a personalized home-care plan.',
      },
      {
        name: 'Digital X-rays',
        detail:
          'Lower-radiation imaging for clearer diagnoses with less wait.',
      },
      {
        name: 'Emergency dental care',
        detail:
          'Priority help for pain, swelling, broken teeth, or lost fillings.',
      },
      {
        name: 'Gum disease treatment',
        detail:
          'Therapy to calm inflammation and protect the bone that supports your teeth.',
      },
      {
        name: 'Night guards',
        detail:
          'Custom guards that protect enamel from grinding and clenching.',
      },
      {
        name: 'Oral cancer screening',
        detail:
          'A careful check of soft tissues as part of your routine visit.',
      },
      {
        name: 'Root canal therapy',
        detail:
          'Relieve infection and save a natural tooth when the pulp is involved.',
      },
      {
        name: 'Silver diamine fluoride',
        detail:
          'A conservative option to help arrest decay in the right cases.',
      },
      {
        name: 'Sleep apnea treatment',
        detail:
          'Oral appliance options that may support better nighttime breathing.',
      },
      {
        name: 'Sports mouth guards',
        detail: 'Fitted protection for active kids, teens, and adults.',
      },
      {
        name: 'TMJ treatment',
        detail:
          'Evaluation and relief strategies for jaw tension, clicking, or pain.',
      },
      {
        name: 'Tooth extractions',
        detail:
          'Careful removal when a tooth can’t be restored, with aftercare guidance.',
      },
      {
        name: 'Wisdom teeth removal',
        detail:
          'Assessment and extraction when third molars threaten comfort or alignment.',
      },
    ],
  },
  {
    id: 'cosmetic',
    title: 'Cosmetic dentistry',
    eyebrow: 'Smile design',
    summary:
      'Refined results that look natural — veneers, clear aligners, and brightening.',
    body: 'Whether you want a subtle refresh or a full smile makeover, Dr. Zena designs around your facial features, bite, and goals. We prioritize conservative options like no-prep veneers when they fit, so you keep as much healthy tooth as possible.',
    idealFor: [
      'Stains that don’t respond to whitening alone',
      'Chips, gaps, or uneven edges',
      'Patients wanting a more confident smile in photos',
    ],
    highlights: [
      'No-prep porcelain veneers when appropriate',
      'Invisalign® for discreet straightening',
      'In-office Zoom whitening for a brighter shade',
    ],
    items: [
      {
        name: 'Dental veneers / no-prep veneers',
        detail:
          'Thin porcelain shells that refine color, shape, and symmetry.',
      },
      {
        name: 'Invisalign®',
        detail:
          'Clear aligners that gradually straighten with removable trays.',
      },
      {
        name: 'Zoom teeth whitening',
        detail:
          'Professional brightening with controlled, lasting results.',
      },
      {
        name: 'Minimally invasive face lift',
        detail:
          'Supportive facial aesthetics that complement your smile design.',
      },
      {
        name: 'White composite fillings',
        detail:
          'Tooth-colored restorations that blend in while repairing decay.',
      },
    ],
  },
  {
    id: 'restorative',
    title: 'Restorative dentistry',
    eyebrow: 'Rebuild & restore',
    summary:
      'Rebuild strength and function with implants, crowns, bridges, and dentures.',
    body: 'When a tooth is damaged or missing, we restore chewing comfort and appearance with materials chosen for durability and a natural look. From a single crown to implant-supported solutions, you’ll understand options, timelines, and what to expect before we begin.',
    idealFor: [
      'Broken, worn, or heavily filled teeth',
      'One or more missing teeth',
      'Patients ready to replace an uncomfortable denture',
    ],
    highlights: [
      'Dental implants and All-on-4® options',
      'Crowns and bridges that match your bite',
      'Comfortable, well-fitting denture solutions',
    ],
    items: [
      {
        name: 'Dental implants',
        detail:
          'A stable root replacement that supports a crown and protects bone.',
      },
      {
        name: 'All-on-4® implants',
        detail:
          'Full-arch restoration anchored on strategically placed implants.',
      },
      {
        name: 'Dental crowns',
        detail:
          'Full-coverage protection for teeth that need strength and shape.',
      },
      {
        name: 'Dental bridges',
        detail:
          'Fixed replacements that fill gaps when implants aren’t the path.',
      },
      {
        name: 'Composite fillings',
        detail:
          'Bonded repairs that restore form after cavities are cleaned out.',
      },
      {
        name: 'Dentures',
        detail:
          'Partial or full prosthetics designed for comfort and confidence.',
      },
    ],
  },
  {
    id: 'comfort',
    title: 'Comfort & sedation',
    eyebrow: 'Anxiety-friendly care',
    summary:
      'Options that ease anxiety so you can receive care without dread.',
    body: 'Dental fear is common — and workable. We offer levels of comfort support so you can stay relaxed through cleanings or longer procedures. We’ll review medical history together and choose the lightest effective option for you.',
    idealFor: [
      'Patients who postpone care because of anxiety',
      'Longer restorative or surgical visits',
      'Anyone who prefers a calmer chairside experience',
    ],
    highlights: [
      'Nitrous oxide for light, reversible relaxation',
      'Oral sedation for deeper calm',
      'IV sedation when deeper support is needed',
    ],
    items: [
      {
        name: 'Nitrous oxide',
        detail:
          '“Laughing gas” that eases nerves and wears off quickly after.',
      },
      {
        name: 'Oral sedation',
        detail:
          'Prescribed medication taken before your visit for deeper calm.',
      },
      {
        name: 'IV sedation',
        detail:
          'Monitored sedation for complex care or higher anxiety levels.',
      },
    ],
  },
  {
    id: 'orthodontics',
    title: 'Orthodontics',
    eyebrow: 'Straighten & align',
    summary: 'Straighten with clear aligners or traditional braces.',
    body: 'Alignment isn’t only about looks — a healthier bite can make cleaning easier and reduce uneven wear. We’ll evaluate crowding, spacing, and bite, then recommend Invisalign® or braces based on complexity and lifestyle.',
    idealFor: [
      'Crowding, spacing, or bite concerns',
      'Adults who want discreet treatment',
      'Teens ready for braces or clear trays',
    ],
    highlights: [
      'Invisalign® for removable, nearly invisible trays',
      'Traditional braces when more control is needed',
      'Progress checks that keep treatment on track',
    ],
    items: [
      {
        name: 'Invisalign®',
        detail:
          'Custom clear trays you wear most of the day and remove to eat.',
      },
      {
        name: 'Traditional metal braces',
        detail:
          'Reliable orthodontic control for more complex movements.',
      },
    ],
  },
  {
    id: 'technology',
    title: 'Dental technology',
    eyebrow: 'Precision tools',
    summary:
      'Modern tools that improve precision, comfort, and treatment clarity.',
    body: 'Technology here isn’t for show — it helps you see what we see, shortens chair time when possible, and supports more conservative care. From digital scans to laser therapy, we explain each tool in plain language.',
    idealFor: [
      'Patients who want fewer impressions and surprises',
      'Anyone curious how we diagnose and plan',
      'Cases that benefit from detailed 3D imaging',
    ],
    highlights: [
      'iTero® digital scanning instead of messy molds',
      'Cone beam imaging for implant and complex planning',
      'Laser and microscope support for precision work',
    ],
    items: [
      {
        name: 'BIOLASE® laser dentistry',
        detail:
          'Soft-tissue procedures with less bleeding and often less discomfort.',
      },
      {
        name: 'Cone beam imaging',
        detail:
          '3D views that guide implants and complex restorative planning.',
      },
      {
        name: 'Dental microscope',
        detail:
          'Magnification that supports meticulous restorative and endodontic care.',
      },
      {
        name: 'Digital X-rays',
        detail: 'Fast capture with reduced radiation versus traditional film.',
      },
      {
        name: 'Intraoral camera',
        detail:
          'Live photos of your teeth so you can see issues with us, not just hear them.',
      },
      {
        name: 'iTero® digital scanning',
        detail:
          'Accurate digital models for aligners, restorations, and smile previews.',
      },
      {
        name: 'Isolite® & DryShield®',
        detail:
          'Comfort systems that keep the field dry and appointments smoother.',
      },
      {
        name: 'Ultrasonic scalers',
        detail:
          'Efficient cleaning that gently breaks up tartar above and below the gumline.',
      },
    ],
  },
]

export const visitSteps = [
  {
    title: 'Listen & examine',
    detail:
      'We start with your goals, history, and a thorough look at teeth, gums, and bite.',
  },
  {
    title: 'Explain options',
    detail:
      'You’ll see findings clearly and hear conservative-to-comprehensive paths — no pressure.',
  },
  {
    title: 'Treat with care',
    detail:
      'Comfort options, modern tools, and a pace that respects your time and anxiety level.',
  },
] as const
