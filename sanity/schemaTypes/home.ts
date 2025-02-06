import { defineField, defineType } from "sanity";

export const home = defineType({
  name: "home",
  title: "Home",
  type: "document",
  fields: [
    //Nav
    defineField({
      name: "navigation",
      title: "Navigation",
      type: "object",
      fields: [
        {
          name: "name",
          title: "Name",
          type: "string",
          initialValue: "Jeremy Coron 🧠",
        },
        {
          name: "logo",
          title: "Logo",
          type: "image",
          options: {
            hotspot: true,
          },
        },
        {
          name: "menuItems",
          title: "Menu Items",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "label",
                  title: "Label",
                  type: "string",
                },
              ],
            },
          ],
        },
        {
          name: "ctaButton",
          title: "CTA Button",
          type: "object",
          fields: [
            {
              name: "text",
              title: "Button Text",
              type: "string",
              initialValue: "Je commence maintenant",
            },
          ],
        },
      ],
    }),

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
          name: "titlePart1",
          title: "Main Title",
          type: "string",
        },
        {
          name: "titlePart2",
          title: "Main Title 2",
          type: "string",
        },
        {
          name: "titlePart3",
          title: "Main Title 3",
          type: "string",
        },
        {
          name: "description",
          title: "Description",
          type: "text",
          initialValue:
            "Une approche humaine, personnalisée, et validée par des résultats concrets : rejoins-nous et découvre comment il est possible de transformer ton stress en sérénité.",
        },
        {
          name: "video",
          title: "Video URL",
          type: "file",
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

    // Brands

    defineField({
      name: "brands",
      title: "Brands",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "image",
              title: "Image",
              type: "image",
              options: {
                hotspot: true,
              },
            },
          ],
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
          name: "name1",
          title: "Name part 1",
          type: "string",
          initialValue: "Jérémy Coron",
        },
        {
          name: "name2",
          title: "Name part 2",
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
        {
          name: "nbOfPeople",
          title: "Nombre de personnes accompagnées",
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
                  name: "number",
                  title: "number",
                  type: "number",
                },
                {
                  name: "description",
                  title: "Description",
                  type: "string",
                },
              ],
            },
          ],
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
          name: "title1",
          title: "Title 1",
          type: "string",
          initialValue: "Tu es toujours sous pression ?",
        },
        {
          name: "title2",
          title: "Title 2",
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
        {
          name: "ctaButton",
          title: "CTA Button Text",
          type: "string",
          initialValue: "Je veux me libérer du stress",
        },
        {
          name: "image",
          title: "Image",
          type: "image",
        },
      ],
    }),

    // Results section
    defineField({
      name: "resultsSection",
      title: "Results Section",
      type: "object",
      fields: [
        {
          name: "topButton",
          title: "Top Button Text",
          type: "string",
          initialValue: "Résultats",
        },
        {
          name: "title",
          title: "Title",
          type: "string",
          initialValue: "Pourquoi choisir ce programme ?",
        },
        {
          name: "description",
          title: "Description",
          type: "text",
          initialValue:
            "Dominez le Stress est conçu pour vous aider à surmonter les schémas de pensée négatifs, réduire votre stress et enfin faire taire votre cerveau.",
        },
        {
          name: "cards",
          title: "Result Cards",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "icon",
                  title: "Icon",
                  type: "image",
                  options: {
                    hotspot: true,
                  },
                },
                {
                  name: "title",
                  title: "Title",
                  type: "string",
                  initialValue: "Epuisés par votre charge de travail",
                },
                {
                  name: "description",
                  title: "Description",
                  type: "text",
                  initialValue:
                    "Vous êtes constamment sous pression pour atteindre vos objectifs. Cette surcharge de travail vous épuise, impacte vos relations personnelles et ruine votre productivité.",
                },
              ],
            },
          ],
        },
        {
          name: "ctaButton",
          title: "CTA Button Text",
          type: "string",
          initialValue: "Je passe à l'action",
        },
      ],
    }),

    // Add this inside the fields array after the first results section
    defineField({
      name: "resultsSection2",
      title: "Results Section 2",
      type: "object",
      fields: [
        {
          name: "topButton",
          title: "Top Button Text",
          type: "string",
          initialValue: "Résultats",
        },
        {
          name: "title",
          title: "Title",
          type: "string",
          initialValue: "Vous en sortirez plus productif",
        },
        {
          name: "description",
          title: "Description",
          type: "text",
          initialValue:
            "Ce programme est conçu pour transformer votre réponse au stress en un levier de productivité.",
        },
        {
          name: "cards",
          title: "Result Cards",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "icon",
                  title: "Icon",
                  type: "image",
                  options: {
                    hotspot: true,
                  },
                },
                {
                  name: "title",
                  title: "Title",
                  type: "string",
                  initialValue:
                    "Reprogrammez votre réponse cognitive au stress",
                },
                {
                  name: "description",
                  title: "Description",
                  type: "text",
                  initialValue:
                    "Vous êtes constamment sous pression pour atteindre vos objectifs. Cette surcharge de travail vous épuise, impacte vos relations et ruine votre productivité.",
                },
              ],
            },
          ],
        },
        {
          name: "ctaButton",
          title: "CTA Button Text",
          type: "string",
          initialValue: "Deviens plus productif maintenant",
        },
      ],
    }),

    // Add this inside the fields array after resultsSection2
    defineField({
      name: "priceSection",
      title: "Price Section",
      type: "object",
      fields: [
        {
          name: "topButton",
          title: "Top Button Text",
          type: "string",
          initialValue: "Apprends à dominer le stress",
        },
        {
          name: "title1",
          title: "Title Part 1",
          type: "string",
          initialValue: "Découvrez le",
        },
        {
          name: "title2",
          title: "Title Part 2",
          type: "string",
          initialValue: "programme au meilleur prix",
        },
        {
          name: "subtitle",
          title: "Subtitle",
          type: "string",
          initialValue: "⮕ Possibilité de paiement en 3x sans frais",
        },
        {
          name: "card",
          title: "Price Card",
          type: "object",
          fields: [
            {
              name: "image",
              title: "Card Image",
              type: "image",
              options: {
                hotspot: true,
              },
            },
            {
              name: "title",
              title: "Card Title",
              type: "string",
              initialValue: "Programme d'accompagnement pour dominer le Stress",
            },
            {
              name: "price",
              title: "Price",
              type: "string",
              initialValue: "450€",
            },
            {
              name: "advantagesTitle",
              title: "Advantages Title",
              type: "string",
              initialValue: "Tes avantages :",
            },
            {
              name: "advantages",
              title: "Advantages List",
              type: "array",
              of: [
                {
                  type: "string",
                  initialValue: "Accès à vie",
                },
              ],
            },
            {
              name: "ctaButton",
              title: "CTA Button Text",
              type: "string",
              initialValue: "Commencer maintenant",
            },
          ],
        },
      ],
    }),

    // Add these inside the fields array after priceSection
    defineField({
      name: "faqSection",
      title: "FAQ Section",
      type: "object",
      fields: [
        {
          name: "title1",
          title: "Title Part 1",
          type: "string",
          initialValue: "Il n'y a pas",
        },
        {
          name: "title2",
          title: "Title Part 2",
          type: "string",
          initialValue: "de question bête",
        },
        {
          name: "questions",
          title: "FAQ Questions",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "question",
                  title: "Question",
                  type: "string",
                },
                {
                  name: "answer",
                  title: "Answer",
                  type: "text",
                },
              ],
            },
          ],
        },
      ],
    }),

    defineField({
      name: "ctaFooter",
      title: "CTA Footer",
      type: "object",
      fields: [
        {
          name: "topButton",
          title: "Top Button Text",
          type: "string",
          initialValue: "Apprends à dominer le stress",
        },
        {
          name: "title",
          title: "Title",
          type: "string",
          initialValue: "On commence maintenant ?",
        },
        {
          name: "description",
          title: "Description",
          type: "text",
          initialValue:
            "Si tu prends mon programme maintenant, tu commences à payer dès le mois suivant !",
        },
        {
          name: "ctaButton",
          title: "CTA Button Text",
          type: "string",
          initialValue: "Commencer maintenant",
        },
        {
          name: "footer",
          title: "Footer",
          type: "object",
          fields: [
            {
              name: "profileImage",
              title: "Profile Image",
              type: "image",
              options: {
                hotspot: true,
              },
            },
            {
              name: "name",
              title: "Name",
              type: "string",
              initialValue: "Jeremy Coron 🧠",
            },
            {
              name: "linkedinUrl",
              title: "LinkedIn URL",
              type: "url",
              initialValue: "https://www.linkedin.com/in/jeremycoron/",
            },
            {
              name: "credits",
              title: "Credits Text",
              type: "string",
              initialValue: "Réalisé par: La-Landing",
            },
            {
              name: "creditsUrl",
              title: "Credits URL",
              type: "url",
              initialValue: "https://la-landing.fr",
            },
          ],
        },
      ],
    }),
  ],
});
