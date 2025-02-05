import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Blog")
    .items([S.documentTypeListItem("home").title("Home")]);
