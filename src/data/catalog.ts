export type ServiceCategory =
  | 'Customized Calendars'
  | 'Custom Stickers'
  | 'Notebooks'
  | 'Keychains';

export type PaperSize = 'A3' | 'A4' | 'A5';

export type NotebookEditionType =
  | 'Kindergarten Notebook (Blue & Red Line)'
  | 'Elementary School Notebook'
  | 'High School Notebook'
  | 'College Notebook'
  | 'Art Notebook'
  | 'Diary Notebook'
  | 'Drawing & Coloring Book';

export type FrontDesignOption =
  | 'Your Custom Photo / Artwork'
  | 'Kindergarten Cute Bear & Rainbow'
  | 'High School Editorial Monochrome'
  | 'College Navy & Gold Classic'
  | 'Minimalist Botanical Cream';

export interface PaperSizeSpec {
  size: PaperSize;
  dimensions: string;
  recommendedFor: string;
}

export interface ServiceItem {
  id: string;
  index: string;
  title: ServiceCategory;
  shortLabel: string;
  subtitle: string;
  description: string;
  finishSpec: string;
  previewImage: string;
  previewAlt: string;
}

export interface BookEditionItem {
  id: string;
  index: string;
  title: NotebookEditionType;
  audience: string;
  description: string;
  insideDetail: string;
}

export interface SchoolLayoutGuide {
  id: string;
  label: string;
  edition: NotebookEditionType;
  frontDesign: FrontDesignOption;
  defaultSize: PaperSize;
  rulingSpec: string;
  coverHighlights: string[];
  insideHighlights: string[];
  coverImage: string;
  coverAlt: string;
  galleryThumb?: string;
}

export interface SampleWork {
  id: string;
  title: string;
  category: ServiceCategory;
  medium: string;
  description: string;
  image: string;
  featured?: boolean;
}

export const BRAND_INFO = {
  name: 'Dreamy Prints Co.',
  tagline: 'When Cuteness and Creativity Meets',
  facebookUrl: 'https://web.facebook.com/meika.sultan',
  email: 'sultanmeika352@gmail.com',
  heroImage: '/assets/aistudio/Dreamy_Prints_Co._Luxury_Branding_92e29eac.png',
  creativeBooksImage:
    '/src/assets/images/creative_books_planners_collection_1794835033287.jpg',
  schoolCollectionLayoutImage:
    '/assets/aistudio/Dreamy_School_Notebook_Collection_7005e4b1.png',
  deskCalendarCollectionImage:
    '/assets/aistudio/Elegant_Stationery_Desk_Collection_c18764d6.png',
  natureCalendarTrioImage:
    '/src/assets/images/clean_calendar_nature_trio_1794836715795.jpg',
};

export const PAPER_SIZES: PaperSizeSpec[] = [
  {
    size: 'A3',
    dimensions: '297 × 420 mm',
    recommendedFor: 'Large Wall Calendars & Oversized Art / Drawing Books',
  },
  {
    size: 'A4',
    dimensions: '210 × 297 mm',
    recommendedFor: 'Standard Wall/Desk Calendars, Kindergarten & School Notebooks',
  },
  {
    size: 'A5',
    dimensions: '148 × 210 mm',
    recommendedFor: 'College Notebooks, Compact Desk Calendars, Diaries & Planners',
  },
];

export const FRONT_DESIGN_OPTIONS: FrontDesignOption[] = [
  'Your Custom Photo / Artwork',
  'Kindergarten Cute Bear & Rainbow',
  'High School Editorial Monochrome',
  'College Navy & Gold Classic',
  'Minimalist Botanical Cream',
];

export const SCHOOL_LAYOUT_GUIDES: SchoolLayoutGuide[] = [
  {
    id: 'kindergarten-layout',
    label: 'Kindergarten',
    edition: 'Kindergarten Notebook (Blue & Red Line)',
    frontDesign: 'Kindergarten Cute Bear & Rainbow',
    defaultSize: 'A4',
    rulingSpec: 'Blue & Red Handwriting Lines',
    coverHighlights: [
      'Cute teddy bears, animals, rainbows, and school supplies',
      'Bright soft colors with large readable student name title',
      'Fully customizable front cover with your child’s photo',
    ],
    insideHighlights: [
      'Blue and red handwriting guides with wide spacing',
      'Name and date header fields for beginning writers',
      'Playful corner stars, rainbows, and cute illustrations',
    ],
    coverImage: '/src/assets/images/clean_kindergarten_notebook_1794836725673.jpg',
    coverAlt: 'Clean Kindergarten pastel puppy and rainbow spiral notebook cover',
  },
  {
    id: 'highschool-layout',
    label: 'High School',
    edition: 'High School Notebook',
    frontDesign: 'High School Editorial Monochrome',
    defaultSize: 'A4',
    rulingSpec: 'Standard Blue Horizontal Ruling',
    coverHighlights: [
      'Editorial portrait or K-pop artist-inspired monochrome cover',
      'Black, white, and navy aesthetic with stylish typography',
      'Customizable front photo, quote, and Dreamy Prints Co. finish',
    ],
    insideHighlights: [
      'Standard blue horizontal ruling with crisp left margin',
      'Subject and Date header fields on every spread',
      'Subtle star and crown corner accents',
    ],
    coverImage: '/src/assets/images/clean_highschool_notebook_1794836727712.jpg',
    coverAlt: 'Clean High School editorial monochrome spiral notebook cover',
  },
  {
    id: 'college-layout',
    label: 'College',
    edition: 'College Notebook',
    frontDesign: 'College Navy & Gold Classic',
    defaultSize: 'A5',
    rulingSpec: 'A5 Size + Blue Horizontal Lines',
    coverHighlights: [
      'Classical art, architecture, or minimalist photography',
      'Refined navy blue, cream, and gold foil aesthetic',
      'Available in A5 compact carry or A4 / A3 custom editions',
    ],
    insideHighlights: [
      'Course, Subject, and Date structured header fields',
      'Clean margins with ample writing space for lectures',
      'Subtle classical architectural corner artwork',
    ],
    coverImage: '/src/assets/images/clean_college_notebook_1794836726011.jpg',
    coverAlt: 'Clean College navy blue and gold foil spiral notebook cover',
    galleryThumb: '/src/assets/images/clean_college_notebooks_trio_1794836721554.jpg',
  },
  {
    id: 'general-minimalist',
    label: 'General & Art',
    edition: 'Art Notebook',
    frontDesign: 'Minimalist Botanical Cream',
    defaultSize: 'A5',
    rulingSpec: 'Ruled, Dotted, or Blank Sketch Pages',
    coverHighlights: [
      'Warm botanical florals, linen cream, and gold spiral finishes',
      'Custom front title or personalized photo placement',
      'Suitable for everyday notes, art journaling, and calendars',
    ],
    insideHighlights: [
      'Choice of lined notes, blank art sheets, or calendar grids',
      'Available in A3, A4, and A5 formats',
      'Archival smooth paper stock',
    ],
    coverImage: '/src/assets/images/clean_general_notebooks_trio_1794836720235.jpg',
    coverAlt: 'Clean botanical cream spiral and hardbound notebook covers',
  },
];

export const NOTEBOOK_EDITIONS: BookEditionItem[] = [
  {
    id: 'kindergarten-notebook',
    index: '01',
    title: 'Kindergarten Notebook (Blue & Red Line)',
    audience: 'Kindergarten · Preschool · Early Learners',
    description:
      'Cute animal and rainbow covers paired with wide blue-and-red handwriting lines and Name/Date fields.',
    insideDetail: 'Blue & Red Ruling · Wide Spacing · A3 / A4 / A5',
  },
  {
    id: 'elementary-notebook',
    index: '02',
    title: 'Elementary School Notebook',
    audience: 'Grades 1–6 · Custom Subject Covers',
    description:
      'Personalized student name & grade front covers with colorful character themes and clear lined sheets.',
    insideDetail: 'Standard Ruling · Subject & Name Box · A3 / A4 / A5',
  },
  {
    id: 'highschool-notebook',
    index: '03',
    title: 'High School Notebook',
    audience: 'Junior & Senior High School',
    description:
      'Trendy monochrome, K-pop editorial, or custom photo front designs with clean horizontal ruling and margin lines.',
    insideDetail: 'Blue Ruling · Margin Line · Subject & Date · A4 / A5',
  },
  {
    id: 'college-notebook',
    index: '04',
    title: 'College Notebook',
    audience: 'University · Law · Med · Engineering',
    description:
      'Mature navy, cream, and gold architectural or minimalist covers featuring Course, Subject, and Date headers.',
    insideDetail: 'Course / Subject / Date · Clean Margins · A3 / A4 / A5',
  },
  {
    id: 'art-notebook',
    index: '05',
    title: 'Art Notebook',
    audience: 'Artists · Hobbyists · Creative Students',
    description:
      'Bespoke illustrated cover art paired with smooth heavyweight sheets made for sketching and lettering.',
    insideDetail: 'Heavyweight Smooth Paper · A3 / A4 / A5',
  },
  {
    id: 'diary-notebook',
    index: '06',
    title: 'Diary Notebook',
    audience: 'Daily Journaling · Personal Goals · Planners',
    description:
      'Classy gold-foil and custom-photo diary notebooks featuring structured daily prompts and monthly planners.',
    insideDetail: 'Daily Journal · Goals · Monthly Planner · A4 / A5',
  },
  {
    id: 'drawing-book',
    index: '07',
    title: 'Drawing & Coloring Book',
    audience: 'Kids · Teens · Relaxing Creative Time',
    description:
      'Personalized drawing books and themed coloring books filled with crisp illustrations or blank sketch frames.',
    insideDetail: 'Custom Illustrated Pages · Blank Sheets · A3 / A4 / A5',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'calendars',
    index: '01',
    title: 'Customized Calendars',
    shortLabel: 'Calendars',
    subtitle: 'A3 · A4 · A5 Wall & Desk Editions',
    description:
      'Tailored monthly, nature, and 2026 desk or wall calendars in A3, A4, or A5 sizes with your customized front photo or brand layout.',
    finishSpec: 'Sizes: A3, A4, A5 · Custom front design',
    previewImage: '/assets/aistudio/Elegant_Stationery_Desk_Collection_c18764d6.png',
    previewAlt: 'Dreamy Prints Co. 2026 Desk Calendar and custom notebook stationery collection',
  },
  {
    id: 'stickers',
    index: '02',
    title: 'Custom Stickers',
    shortLabel: 'Stickers',
    subtitle: 'Die-Cut & Kiss-Cut Sheets',
    description:
      'Vibrant character packs, cute art stickers, ocean friends, snack sheets, and personalized name banners cut with crisp precision.',
    finishSpec: 'Waterproof vinyl · Gloss or satin laminate',
    previewImage: '/src/assets/images/cute_kawaii_stickers_pack_1794835033607.jpg',
    previewAlt: 'Cute kawaii custom sticker pack and donut sticker sheets',
  },
  {
    id: 'notebooks',
    index: '03',
    title: 'Notebooks',
    shortLabel: 'Notebooks',
    subtitle: 'Kindergarten to College · Art & Diary',
    description:
      'Available for Kindergarten to College plus Art, Diary, and Drawing books in A3, A4, or A5 with your customized front cover design.',
    finishSpec: 'Sizes: A3, A4, A5 · Custom front & interior ruling',
    previewImage: '/assets/aistudio/Dreamy_School_Notebook_Collection_7005e4b1.png',
    previewAlt:
      'Dreamy Prints Co. School Notebook Collection for High School, College, and Kindergarten',
  },
  {
    id: 'keychains',
    index: '04',
    title: 'Keychains',
    shortLabel: 'Keychains',
    subtitle: 'Laminated & Bag-Tag Rings',
    description:
      'Durable pocket-sized laminated card rings, learning flashcards, and personalized photo keychains finished with sturdy metal hardware.',
    finishSpec: 'Heavy-duty lamination · Steel split-ring',
    previewImage: '/assets/aistudio/9af97fc7-c417-4820-b23a-d2d056f2d1e3_9d142123.jpg',
    previewAlt: 'Custom laminated multiplication tables keychain booklet on backpack',
  },
];

export const SAMPLE_WORKS: SampleWork[] = [
  {
    id: 'sample-school-collection-layout',
    title: 'Kindergarten to College Notebook Layouts',
    category: 'Notebooks',
    medium: 'A3 · A4 · A5 · Custom Front & Interior Ruling',
    description:
      'Complete Dreamy Prints Co. notebook layout lineup covering High School monochrome covers, College A5 navy-and-gold notebooks, and Kindergarten blue-and-red handwriting editions.',
    image: '/assets/aistudio/Dreamy_School_Notebook_Collection_7005e4b1.png',
    featured: true,
  },
  {
    id: 'sample-desk-calendar-collection',
    title: '2026 Desk Calendar & Stationery Suite',
    category: 'Customized Calendars',
    medium: 'Desk Calendar · A5 / A4 · Matching Custom Notebooks',
    description:
      'Warm scenic sunrise 2026 Desk Calendar paired seamlessly with customized High School, College, and minimalist botanical notebooks.',
    image: '/assets/aistudio/Elegant_Stationery_Desk_Collection_c18764d6.png',
  },
  {
    id: 'sample-nature-calendar-trio',
    title: 'Nature Collection Monthly Wall Calendars',
    category: 'Customized Calendars',
    medium: 'A3 · A4 · A5 · Spiral Monthly Editions',
    description:
      'Clean spiral wall calendars showcasing golden lake sunsets, macro nature photography, and alpine reflections with crisp date grids.',
    image: '/src/assets/images/clean_calendar_nature_trio_1794836715795.jpg',
  },
  {
    id: 'sample-wall-calendar',
    title: '2026 Scenic Full-Year Wall Calendar',
    category: 'Customized Calendars',
    medium: 'A3 · A4 · A5 · Custom Photo & Brand Header',
    description:
      'Bespoke 12-month at-a-glance wall calendar in A3, A4, or A5 format featuring mountain lake photography, silver wire-o hanger, and Dreamy Prints Co. finish.',
    image: '/src/assets/images/clean_wall_calendar_mockup_1794836715314.jpg',
  },
  {
    id: 'sample-creative-books-collection',
    title: 'Creative Books & Planners Collection',
    category: 'Notebooks',
    medium: 'School Notebook · Coloring/Drawing Book · Diary Book',
    description:
      'Highlighted collection showcasing School Notebooks (all school levels), Coloring & Drawing Books, and gold-embossed Diary Notebooks with custom inside layouts.',
    image:
      '/src/assets/images/creative_books_planners_collection_1794835033287.jpg',
  },
  {
    id: 'sample-kindergarten-clean',
    title: 'Kindergarten Pastel Puppy & Rainbow Cover',
    category: 'Notebooks',
    medium: 'A4 / A5 · Blue & Red Handwriting Lines',
    description:
      'Sweet pastel gingham cover customized with student name and paired with wide blue-and-red handwriting lines inside.',
    image: '/src/assets/images/clean_kindergarten_notebook_1794836725673.jpg',
  },
  {
    id: 'sample-highschool-clean',
    title: 'High School Monochrome Editorial Cover',
    category: 'Notebooks',
    medium: 'A4 / A5 · Standard Blue Horizontal Lines',
    description:
      'Crisp black-and-white editorial portrait cover with black twin-wire spiral binding and blue-lined note pages.',
    image: '/src/assets/images/clean_highschool_notebook_1794836727712.jpg',
  },
  {
    id: 'sample-college-spiral-clean',
    title: 'College Navy & Gold Classic Planner',
    category: 'Notebooks',
    medium: 'A5 · Gold Twin-Wire & Elastic Strap',
    description:
      'Architectural gold-foil navy hardcover featuring gold twin-wire rings, elastic closure, and structured Course/Subject/Date pages.',
    image: '/src/assets/images/clean_college_notebook_1794836726011.jpg',
  },
  {
    id: 'sample-college-classic-covers',
    title: 'College Navy & Gold Foil Notebook Covers',
    category: 'Notebooks',
    medium: 'A5 / A4 · Architectural & Minimalist Covers',
    description:
      'Sophisticated navy blue and gold-embossed notebook covers tailored for university and college students.',
    image: '/src/assets/images/clean_college_notebooks_trio_1794836721554.jpg',
  },
  {
    id: 'sample-general-botanical-covers',
    title: 'General Botanical & Art Notebook Covers',
    category: 'Notebooks',
    medium: 'A3 / A4 / A5 · Linen & Spiral Editions',
    description:
      'Clean cream, linen, and pressed botanical aesthetic notebook covers for art notes, diaries, and everyday writing.',
    image: '/src/assets/images/clean_general_notebooks_trio_1794836720235.jpg',
  },
  {
    id: 'sample-cute-stickers-pack',
    title: 'Cute Artist & Cupcake Sticker Pack',
    category: 'Custom Stickers',
    medium: '6-Piece Retail Pack + Donut Sheets',
    description:
      'Packaged glossy kawaii stickers featuring painter palettes, cupcake houses, brush mugs, yarn balls, and matching donut sheets.',
    image: '/src/assets/images/cute_kawaii_stickers_pack_1794835033607.jpg',
  },
  {
    id: 'sample-ocean-stickers',
    title: 'Cute Ocean Sea Creatures Sticker Sheet',
    category: 'Custom Stickers',
    medium: '12-Piece Waterproof Vinyl Sheet',
    description:
      'Adorable smiling turtle, dolphin, clownfish, octopus, starfish, whale, and penguin die-cut stickers for notebooks and water bottles.',
    image: '/src/assets/images/ocean_creatures_sticker_sheet_1794835033394.jpg',
  },
  {
    id: 'sample-custom-banner-snacks',
    title: 'Chibi, Snacks & Custom Name Stickers',
    category: 'Custom Stickers',
    medium: 'Custom Character & Banner Die-Cuts',
    description:
      'Mix-and-match chibi characters, playful snack & street-food illustrations, and personalized pastel name banner stickers.',
    image:
      '/src/assets/images/custom_name_banner_and_food_stickers_1794835034328.jpg',
  },
  {
    id: 'sample-fashion-stickers',
    title: 'Glam Doll Die-Cut Sticker Sheet',
    category: 'Custom Stickers',
    medium: '25-Piece Kiss-Cut Vinyl Sheet',
    description:
      'High-definition pink fashion doll sticker set with clean white die-cut borders for planners, tumblers, and party favors.',
    image: '/assets/aistudio/8d3297cd-f0ff-40ee-96af-fc991e22132f_32ed152d.jpg',
  },
  {
    id: 'sample-boba-stickers',
    title: 'Kawaii Boba Tea Sticker Collection',
    category: 'Custom Stickers',
    medium: '20-Piece Glossy Sticker Pack',
    description:
      'Playful illustrated boba flavors with adorable expressions, printed on vibrant scratch-resistant sticker vinyl.',
    image: '/assets/aistudio/877c1d30-eaf6-40e0-9b30-6da5fc7cc032_5f8ffe31.jpg',
  },
  {
    id: 'sample-apple-keychain',
    title: 'Aa Apple Alphabet Flashcard Keychain',
    category: 'Keychains',
    medium: 'Laminated Early-Learning Ring',
    description:
      'Rounded-corner laminated alphabet card punched with a durable silver keyring for toddlers and preschool backpacks.',
    image: '/assets/aistudio/67b774f0-42a0-45af-94a3-16c3c23cef5d_38ce3bd2.jpg',
  },
  {
    id: 'sample-tables-bag-keychain',
    title: 'My Multiplication Tables Bag Keychain',
    category: 'Keychains',
    medium: '10-Card Laminated Reference Set',
    description:
      'Custom illustrated multiplication tables (1–10) clipped to a backpack ring for effortless study on the go.',
    image: '/assets/aistudio/9af97fc7-c417-4820-b23a-d2d056f2d1e3_9d142123.jpg',
  },
  {
    id: 'sample-tables-spread',
    title: 'Complete Multiplication Keyring Set',
    category: 'Keychains',
    medium: 'Full 1–10 Illustrated Deck + Ring',
    description:
      'Individual color-coded character cards sealed in crystal-clear thermal lamination with detachable metal binder ring.',
    image: '/assets/aistudio/010bb7d9-299e-4f3c-b442-e88228674ee6_53b6743d.jpg',
  },
  {
    id: 'sample-princess-stickers',
    title: 'Royal Fairytale Princess Sticker Sheet',
    category: 'Custom Stickers',
    medium: 'Custom Die-Cut Character Pack',
    description:
      'Storybook princesses, castles, and floral accents crafted for gift packaging, scrapbooks, and personalized stationery.',
    image: '/assets/aistudio/Princess_119fdbad.png',
  },
  {
    id: 'sample-study-notebook',
    title: 'Foldable Multiplication Pocket Notebook',
    category: 'Notebooks',
    medium: 'Personalized Name & Grade Cover',
    description:
      'Custom graphic study booklet featuring personalized student name & grade fields alongside vivid themed artwork.',
    image: '/assets/aistudio/d1ffc72b-993b-4549-8cb7-16f8268bbe43_565135c0.jpg',
  },
];
