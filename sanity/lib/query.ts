import { groq } from "next-sanity";

// Query schema datasets
export const firstQuery = groq`*[_type == "home"] {
   title
}

`;
