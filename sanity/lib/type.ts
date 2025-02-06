interface MenuItem {
  label: string;
}

interface CtaButton {
  text: string;
}

interface Navigation {
  name: string;
  logo: string;
  menuItems: MenuItem[];
  ctaButton: CtaButton;
}

interface HeroSection {
  topButton: string;
  titlePart1: string;
  titlePart2: string;
  titlePart3: string;
  video: any;
  description: string;
  ctaButton: string;
  statsText: string;
}

interface NbOfPeople {
  title: string;
  number: number;
  description: number;
}

interface PresentationSection {
  topButton: string;
  name1: string;
  name2: string;
  description: string;
  ctaButton: string;
  image: string;
  nbOfPeople: NbOfPeople[];
}

interface ForWhoCard {
  title: string;
  description: string;
}

interface ForWhoSection {
  topButton: string;
  title1: string;
  title2: string;
  description: string;
  cards: ForWhoCard[];
  ctaButton: string;
  image: string;
}

interface ResultCard {
  icon: string;
  title: string;
  description: string;
}

interface ResultsSection {
  topButton: string;
  title: string;
  description: string;
  cards: ResultCard[];
  ctaButton: string;
}

interface ResultsSection2 {
  topButton: string;
  title: string;
  description: string;
  cards: ResultCard[];
  ctaButton: string;
}

interface PriceCard {
  image: string;
  title: string;
  price: string;
  advantagesTitle: string;
  advantages: string[];
  ctaButton: string;
}

interface PriceSection {
  topButton: string;
  title1: string;
  title2: string;
  subtitle: string;
  card: PriceCard;
}

interface FaqQuestion {
  question: string;
  answer: string;
}

interface FaqSection {
  title1: string;
  title2: string;
  questions: FaqQuestion[];
}

interface FooterInfo {
  profileImage: string;
  name: string;
  linkedinUrl: string;
  credits: string;
  creditsUrl: string;
}

interface CtaFooter {
  topButton: string;
  title: string;
  description: string;
  ctaButton: string;
  footer: FooterInfo;
}

export interface HomeDocument {
  navigation: Navigation;
  heroSection: HeroSection;
  presentationSection: PresentationSection;
  forWhoSection: ForWhoSection;
  brands: any;
  resultsSection: ResultsSection;
  resultsSection2: ResultsSection2;
  priceSection: PriceSection;
  faqSection: FaqSection;
  ctaFooter: CtaFooter;
}
