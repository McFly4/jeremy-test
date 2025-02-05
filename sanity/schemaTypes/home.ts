import { defineField, defineType } from "sanity";

export const home = defineType({
  name: "home",
  title: "Home",
  type: "document",
  fields: [
    // Hero Section
    defineField({
      name: "heroSection",
      title: "Hero Section",
      type: "object",
      fields: [
        {
          name: "topButton",
          title: "Top Button Text",
          type: "string",
          initialValue: "Libère-toi du stress en seulement 30 jours.",
        },
        {
          name: "title",
          title: "Main Title",
          type: "string",
          initialValue:
            "Apprends à maîtriser ton stress pour reprendre le contrôle.",
        },
        {
          name: "description",
          title: "Description",
          type: "text",
          initialValue:
            "Une approche humaine, personnalisée, et validée par des résultats concrets : rejoins-nous et découvre comment il est possible de transformer ton stress en sérénité.",
        },
        {
          name: "ctaButton",
          title: "CTA Button Text",
          type: "string",
          initialValue: "Apprends à maîtriser ton stress",
        },
        {
          name: "statsText",
          title: "Stats Text",
          type: "string",
          initialValue: "+5 000 personnes accompagnées",
        },
      ],
    }),

    // Presentation Section
    defineField({
      name: "presentationSection",
      title: "Presentation Section",
      type: "object",
      fields: [
        {
          name: "topButton",
          title: "Top Button Text",
          type: "string",
          initialValue: "Apprends à me faire confiance",
        },
        {
          name: "name",
          title: "Name",
          type: "string",
          initialValue: "Jérémy Coron",
        },
        {
          name: "description",
          title: "Description",
          type: "text",
          initialValue:
            "En 10 ans, j'ai accompagné plus de 5 000 personnes, publié un livre best-seller, et conçu des méthodes utilisées par des leaders comme Yomi Denzel, l'un des entrepreneurs français les plus influents. PROTOCOLES, c'est la synthèse de ces années de recherches et d'expériences, pour vous offrir un raccourci direct vers vos objectifs.",
        },
        {
          name: "ctaButton",
          title: "CTA Button Text",
          type: "string",
          initialValue: "Je te fais confiance",
        },
        {
          name: "image",
          title: "Profile Image",
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    }),

    // For Who Section
    defineField({
      name: "forWhoSection",
      title: "For Who Section",
      type: "object",
      fields: [
        {
          name: "topButton",
          title: "Top Button Text",
          type: "string",
          initialValue: "Pour qui est ce programme",
        },
        {
          name: "title",
          title: "Title",
          type: "string",
          initialValue: "Tu es toujours sous pression ?",
        },
        {
          name: "description",
          title: "Description",
          type: "text",
          initialValue:
            "Ce programme est conçu pour les personnes qui saturent de toujours être sous pression, de ne jamais réussir à calmer leur cerveau.",
        },
        {
          name: "cards",
          title: "Cards",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "title",
                  title: "Title",
                  type: "string",
                },
                {
                  name: "description",
                  title: "Description",
                  type: "text",
                },
              ],
            },
          ],
        },
      ],
    }),
  ],
});
