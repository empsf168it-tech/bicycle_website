export const QUEUE_DAYS = 4; // shop updates this daily
export const QUEUE_BIKES_COUNT = 11;
export const SAME_DAY_CUTOFF = '4:00 PM';

export interface ServiceTier {
  id: string;
  name: string;
  price: number;
  hours: number;
  items: string[];
  description: string;
  durationLabel: string;
  recommendedFor: string;
  badge?: string;
}

export const SERVICE_TIERS: ServiceTier[] = [
  {
    id: 'safety',
    name: 'Safety check',
    price: 25,
    hours: 0.5,
    durationLabel: '30 mins (while you wait)',
    recommendedFor: 'Pre-event or after 3+ months stored away',
    description: 'Brakes, gears, tyres and a bolt torque check. Thirty minutes, usually while you wait.',
    items: [
      'Brakes inspection & pad wear test',
      'Gear indexing & chain wear check',
      'Tyre casing inspection & pressure set',
      'Full bolt torque check to manufacturer spec'
    ]
  },
  {
    id: 'minor',
    name: 'Minor service',
    price: 65,
    hours: 1.5,
    durationLabel: '1.5 hours in stand',
    recommendedFor: 'Regular commuters every 6 months',
    badge: 'Most Popular',
    description: 'Everything in the safety check, plus gear and brake adjustment, drivetrain clean, and wheel truing.',
    items: [
      'Everything in safety check',
      'Full gear indexing & brake barrel adjust',
      'Drivetrain ultrasonic degrease & re-lube',
      'Front and rear wheel precision truing in stand'
    ]
  },
  {
    id: 'major',
    name: 'Major service',
    price: 130,
    hours: 3,
    durationLabel: '3 hours in stand',
    recommendedFor: 'Annual overhaul & hard wet weather riding',
    badge: 'Comprehensive',
    description: 'Everything in the minor, plus a full strip and rebuild, new cables and housing, and bearing service throughout.',
    items: [
      'Everything in minor service',
      'Complete strip down to bare frame & rebuild',
      'New stainless inner cables and outer housing included',
      'Full headset, bottom bracket & hub bearing service'
    ]
  },
  {
    id: 'custom',
    name: 'Custom build',
    price: 260,
    hours: 6,
    durationLabel: '6+ hours specialist bench time',
    recommendedFor: 'Dream frame builds, component swaps & restorations',
    badge: 'Bespoke',
    description: 'Frame prep and facing, full build from your parts, bearing prep with a torque log, and two free follow-up adjustments.',
    items: [
      'Bottom bracket & headtube facing and reaming',
      'Full build from bare frame and boxed parts',
      'Hydraulic line routing, bleeding & caliper facing',
      'Bearing prep with documented torque inspection log',
      'Two free follow-up adjustments at 6 and 12 weeks'
    ]
  }
];

export interface IndividualRepair {
  id: string;
  name: string;
  price: number;
  unit?: string;
  category: 'Tyres & Wheels' | 'Brakes' | 'Drivetrain' | 'Bearings' | 'General';
  turnaroundNote: string;
  walkinEligible?: boolean;
}

export const INDIVIDUAL_REPAIRS: IndividualRepair[] = [
  { id: 'r1', name: 'Puncture repair', price: 12, category: 'Tyres & Wheels', turnaroundNote: 'Same day if in before 4pm', walkinEligible: true },
  { id: 'r2', name: 'Tube replacement', price: 15, category: 'Tyres & Wheels', turnaroundNote: 'While you wait', walkinEligible: true },
  { id: 'r3', name: 'Brake pad replacement, per wheel', price: 18, category: 'Brakes', turnaroundNote: 'Same day if in before 4pm', walkinEligible: true },
  { id: 'r4', name: 'Hydraulic brake bleed, per brake', price: 30, category: 'Brakes', turnaroundNote: '24-48 hrs' },
  { id: 'r5', name: 'Gear cable and housing', price: 22, category: 'Drivetrain', turnaroundNote: 'Same day eligible', walkinEligible: true },
  { id: 'r6', name: 'Brake cable and housing', price: 20, category: 'Brakes', turnaroundNote: 'Same day eligible', walkinEligible: true },
  { id: 'r7', name: 'Wheel true', price: 20, category: 'Tyres & Wheels', turnaroundNote: '24 hrs' },
  { id: 'r8', name: 'Spoke replacement', price: 8, unit: 'each', category: 'Tyres & Wheels', turnaroundNote: '24-48 hrs' },
  { id: 'r9', name: 'Bottom bracket replacement', price: 35, unit: 'plus part', category: 'Bearings', turnaroundNote: '48 hrs' },
  { id: 'r10', name: 'Headset service', price: 40, category: 'Bearings', turnaroundNote: '48 hrs' },
  { id: 'r11', name: 'Tubeless setup, per wheel', price: 25, category: 'Tyres & Wheels', turnaroundNote: '24 hrs' },
  { id: 'r12', name: 'Hydraulic hose shorten', price: 28, category: 'Brakes', turnaroundNote: '24 hrs' },
  { id: 'r13', name: 'Chain and cassette fit', price: 30, unit: 'plus parts', category: 'Drivetrain', turnaroundNote: 'Same day or 24 hrs' },
  { id: 'r14', name: 'Bike box packing', price: 45, category: 'General', turnaroundNote: 'Book 48h in advance' }
];

export interface BikeCategory {
  id: string;
  title: string;
  priceRange: string;
  description: string;
  highlights: string[];
  idealFor: string;
  image: string;
}

export const BIKES_WE_SELL: BikeCategory[] = [
  {
    id: 'commuter',
    title: 'Commuter',
    priceRange: '£480 to £1,400',
    description: 'Hub gears, mudguards, dynamo lighting and a rack. Built for four seasons of getting to work rather than for a spec sheet.',
    highlights: [
      'Internal Shimano Nexus/Alfine hub gears (virtually zero maintenance)',
      'Full-coverage alloy mudguards fitted with stainless stays',
      'Integrated dynamo lighting — no batteries to charge or forget',
      'Puncture-resistant touring tyres (Schwalbe Marathon Plus standard)'
    ],
    idealFor: 'Manchester daily riders, winter commuters & city runners',
    image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'gravel',
    title: 'Gravel and adventure',
    priceRange: '£1,200 to £4,200',
    description: 'Steel and aluminium frames, clearance for 45mm, mounts for everything. Built to your fit before it leaves.',
    highlights: [
      'Reynolds 725 steel and triple-butted 6061 alloy options',
      'True clearance for up to 700x45mm or 650bx48mm knobblies',
      'Three bottle mounts, top-tube bag bento mounts & fork eyelets',
      'Includes 60-minute pre-collection bike fit and handlebar tape choice'
    ],
    idealFor: 'Peak District bridleways, Pennine bikepacking & rough asphalt',
    image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'secondhand',
    title: 'Second-hand refurbished',
    priceRange: '£220 to £900',
    description: 'Fully serviced, warrantied, and honestly described. Usually the best value in the shop.',
    highlights: [
      'Stripped to bare frame, inspected for cracks and alignment',
      'New chain, cables, housing, brake pads and fresh rubber',
      'Signed Cytech mechanic completion record with parts itemised',
      'Backed by our 6-month workshop warranty + 6-week free check-up'
    ],
    idealFor: 'Budget commuters, university riders & students wanting dependable steel',
    image: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=1200&q=80'
  }
];

export interface FitLevel {
  id: string;
  name: string;
  price: number;
  duration: string;
  bestFor: string;
  description: string;
  features: string[];
}

export const BIKE_FITTING_LEVELS: FitLevel[] = [
  {
    id: 'basic-fit',
    name: 'Basic fit',
    price: 60,
    duration: '60 minutes',
    bestFor: 'Commuters and anyone with a new bike or experiencing mild hand/knee numbness',
    description: 'Saddle height and setback, bar height and reach, cleat position. Best for commuters and anyone with a new bike.',
    features: [
      'Goniometer measurement of knee angle & saddle height',
      'Fore/aft saddle setback alignment over pedal axle',
      'Handlebar reach and drop configuration (stem flip/spacer swap)',
      'Rotational & fore/aft cleat alignment on cycling shoes'
    ]
  },
  {
    id: 'full-fit',
    name: 'Full fit',
    price: 150,
    duration: '2.5 hours',
    bestFor: 'Sportive, gravel racers, long-distance audax riders, or persistent pain',
    description: 'Everything in the basic, plus flexibility and pelvic assessment, video analysis in three planes, and a written report with the numbers so you can replicate it on another bike.',
    features: [
      'Everything included in the Basic Fit',
      'Off-bike musculoskeletal flexibility & pelvic tilt assessment',
      'High-speed video capture and motion tracking in 3 sagittal/frontal planes',
      'Ischial tuberosity (sit-bone) width measurement and saddle pressure trial',
      'Full PDF geometry report with exact coordinates to set up any future bike'
    ]
  }
];

export const PHILOSOPHY_POINTS = [
  {
    num: '01',
    statement: 'We will tell you when a repair costs more than the bike is worth.',
    detail: 'It happens weekly and we would rather lose the job. If your £80 marketplace find needs £140 of drivetrain and wheel bearings, we sit you down and lay out honest alternatives.'
  },
  {
    num: '02',
    statement: 'We will not release a bike we consider unsafe.',
    detail: 'If a frame is cracked, forks compromised, or brake track worn paper-thin, we will show you where and refuse to build it back up. Safety is non-negotiable in Manchester traffic.'
  },
  {
    num: '03',
    statement: 'We service bikes we did not sell, at the same price.',
    detail: 'A shop that charges more for other people’s bikes is telling you something. Whether it is a department store runabout or a high-end titanium gravel bike, our hourly bench rate stays identical.'
  },
  {
    num: '04',
    statement: 'We show you the old part.',
    detail: 'Every replaced component goes in a tray with your name on it so you can see what you paid for. Worn chains, pitted bearings, or notched cassettes—you see exactly why it needed replacing.'
  }
];

export const CLUB_RIDE_DETAILS = {
  day: 'Every Saturday',
  time: 'Leaves prompt at 8:30 AM',
  location: 'Outside Velo & Torque, 44 Chapel Street',
  routeBoard: 'Route map pinned to the front shop window every Thursday afternoon',
  cafeStop: 'Always includes a designated café stop at halfway (~35km)',
  groups: [
    {
      name: 'Social Group',
      pace: '15 mph average',
      rules: 'Strictly no-drop policy. Summit regrouping, punctures fixed together. Perfect intro to group cycling.'
    },
    {
      name: 'Steady Group',
      pace: '17 mph average',
      rules: 'Brisk, smooth rolling paceline. Group riding etiquette required. No-drop with steady tempo on flats.'
    },
    {
      name: 'Fast Group',
      pace: '21+ mph average',
      rules: 'Challenging pace that we take no responsibility for! Hammer drop-rides over Cheshire or Peak ascents.'
    }
  ]
};

export const SHOP_LOCATION = {
  address: '44 Chapel Street, Salford, Manchester M3 5DF',
  phone: '0161 555 0173',
  email: 'workshop@veloandtorque.co.uk',
  hours: [
    { days: 'Tuesday – Friday', times: '09:00 – 18:00' },
    { days: 'Saturday', times: '09:00 – 17:00' },
    { days: 'Sunday & Monday', times: 'Closed (Workshop testing & riding)' }
  ],
  dropInPolicy: 'Drop in without booking for punctures, brake adjustments and anything under fifteen minutes. Everything else, book — it saves you a wasted trip.',
  parking: 'Covered secure bike parking in the cobbled yard round the back.'
};
