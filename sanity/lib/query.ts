import { groq } from "next-sanity";

// Query schema datasets
export const firstQuery = groq`*[_type == "home"][0] {
  heroSection {
    topButton,
    title,
    description,
    ctaButton,
    statsText
  },
  presentationSection {
    topButton,
    name,
    description,
    ctaButton,
    "image": image.asset->url
  },
  forWhoSection {
    topButton,
    title,
    description,
    cards[] {
      title,
      description
    }
  }
}`;
