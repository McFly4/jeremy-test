import Image from "next/image";
import Grid from "@/components/Grid";
import Nav from "@/components/Nav";
import GrayButton from "@/components/GrayButton";
import BlackButton from "@/components/BlackButton";
import { MagicCard } from "@/components/ui/magic-card";
import { NumberTicker } from "@/components/ui/number-ticker";
import VideoCarousel from "@/components/VideoCarousel";
import { Faq } from "@/components/Faq";
import { Meteors } from "@/components/ui/meteors";
import { CircleCheck } from "lucide-react";
import VideoTop from "@/components/VideoTop";
import { ShineBorder } from "@/components/ui/shine-border";
import { sanityFetch } from "@/sanity/lib/fetch";
import { firstQuery } from "@/sanity/lib/query";
import { SanityDocument } from "next-sanity";

export default async function Home() {
  const home = await sanityFetch<SanityDocument[]>({ query: firstQuery });
  console.log(`home`, home);
  return (
    <div className="relative">
      <Grid />
      <Nav />
      {/* Section 1 */}
      <div className="home1 flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-[60px] px-4">
        <div className="z-10 lg:w-3/4">
          <GrayButton>Libère-toi du stress en seulement 30 jours.</GrayButton>
          <h1 className="text-xl lg:text-[64px] mt-4 leading-tight">
            Apprends à maîtriser <br /> ton stress pour reprendre <br /> le
            contrôle.
          </h1>
          <p className="text-[10px] lg:text-2xl text-[#A9A9A9] mt-4 lg:w-[850px]">
            Une approche humaine, personnalisée, et validée par des résultats
            concrets : rejoins-nous et découvre comment il est possible de
            transformer ton stress en sérénité.
          </p>
          <button className="whiteBtn mt-6">
            Apprends à maîtriser ton stress
          </button>
          <div className="flex items-center gap-2 mt-4">
            <Image src="/people.png" width={122} height={25} alt="people" />
            <p className="text-[10px] lg:text-base">
              +5 000 personnes accompagnées
            </p>
          </div>
        </div>
        <div className="w-full lg:w-auto">
          <VideoTop />
        </div>
      </div>

      {/* Marques */}
      <div className="brands px-2 relative z-10 bg-white w-full mt-8 lg:mt-10 h-[90px] flex items-center gap-4 lg:gap-[50px] lg:justify-center overflow-x-auto whitespace-nowrap scrollbar-hide">
        <Image src="/leMonde.png" height={34} width={150} alt="le monde" />
        <Image src="/femme.png" height={34} width={150} alt="femme" />
        <Image src="/lePoint.png" height={34} width={150} alt="le point" />
        <Image src="/livementor.png" height={34} width={150} alt="livementor" />
        <Image src="/myRh.png" height={34} width={150} alt="myRH" />
        <Image src="/sqool.png" height={34} width={150} alt="sqool" />
      </div>

      {/* Section Présentation */}
      <div className="px-3.5 lg:px-0 z-10 relative flex flex-col lg:flex-row justify-center items-center mt-12 lg:mt-[150px] gap-6 lg:gap-[100px]">
        <div>
          <GrayButton>Apprends à me faire confiance</GrayButton>
          <h2 className="mt-6 text-xl lg:text-2xl">
            <span className="text-[#747474]">Je suis,</span> Jérémy Coron
          </h2>
          <p className="mt-4 lg:mt-[14px] lg:text-xl max-w-[550px] font-light">
            En 10 ans, j’ai accompagné plus de 5 000 personnes, publié un livre
            best-seller, et conçu des méthodes utilisées par des leaders comme
            Yomi Denzel, l’un des entrepreneurs français les plus influents.
            PROTOCOLES, c’est la synthèse de ces années de recherches et
            d’expériences, pour vous offrir un raccourci direct vers vos
            objectifs.
          </p>
          <button className="whiteBtn mt-4 lg:mt-[16px]">
            Je te fais confiance
          </button>
        </div>
        <div>
          <div className="relative">
            <img className="absolute -z-10" src="/blur/follow.svg" alt="blur" />
            <div className="z-10 -left-1/3 top-[20px] rotate-6 rounded-2xl p-4 bg-white absolute hidden lg:flex flex-col gap-2 items-start">
              <span className="bg-black text-white text-sm rounded-full p-1">
                Accompagnement
              </span>
              <NumberTicker
                value={5000}
                className="whitespace-pre-wrap text-3xl lg:text-4xl font-medium tracking-tighter text-black dark:text-white"
              />
              <p className="text-black text-sm">personnes accompagnées</p>
            </div>

            <ShineBorder
              className="relative flex  flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
              color={["white"]}
            >
              <Image
                className="rounded-lg object-cover"
                src="/moi.png"
                width={490}
                height={630}
                alt="Jeremy Coron"
              />
            </ShineBorder>

            <div className="hidden lg:block bg-white rounded-lg rotate-2 absolute -z-10 top-0 w-[490px] h-[630px]"></div>
            <div className="-right-[50px] bottom-[-30px] -rotate-6 rounded-2xl p-4 bg-white absolute hidden lg:flex flex-col gap-2 items-start">
              <span className="bg-black text-white text-sm rounded-full p-1">
                Accompagnement
              </span>
              <NumberTicker
                value={5000}
                className="whitespace-pre-wrap text-3xl lg:text-4xl font-medium tracking-tighter text-black dark:text-white"
              />
              <p className="text-black text-sm">personnes accompagnées</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section Pour qui */}
      <div className="z-10 mt-12 lg:mt-20 flex flex-col justify-center items-center px-4">
        <GrayButton>Pour qui est ce programme</GrayButton>
        <h2 className="mt-6 text-xl lg:text-5xl text-center font-semibold">
          <span className="text-[#747474]">Tu es toujours</span> sous pression ?
        </h2>
        <p className="mt-4 lg:mt-5 text-[#c5c5c5] text-sm lg:text-2xl text-center w-full lg:w-[80%]">
          Ce programme est conçu pour les personnes qui saturent de toujours
          être sous pression, de ne jamais réussir à calmer leur cerveau.
        </p>
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-6 mt-8 lg:mt-10 px-4">
          <div className="w-full lg:w-auto">
            <Image
              src="/brain.png"
              alt="stress"
              width={430}
              height={270}
              className="!static rounded-lg mt-8 lg:mt-0"
            />
          </div>
          <div className="max-w-[500px] flex flex-col gap-6 lg:gap-8">
            <MagicCard
              className="border border-[#676767] magicCard p-4 lg:p-6 cursor-pointer bg-[#1e2020]"
              gradientColor={"#323334"}
            >
              <img src="/icons/zap.svg" alt="zap" />
              <p className="mt-4 text-xl">
                Epuisés par votre charge de travail
              </p>
              <p className="mt-4 lg:mt-6 text-[#787878]">
                Vous êtes constamment sous pression pour atteindre vos
                objectifs. Cette surcharge de travail vous épuise, impacte vos
                relations personnelles et ruine votre productivité.
              </p>
            </MagicCard>
            <MagicCard
              className="border border-[#676767] magicCard p-4 lg:p-6 cursor-pointer bg-[#1e2020]"
              gradientColor={"#323334"}
            >
              <img src="/icons/zap.svg" alt="zap" />
              <p className="mt-4 text-xl">
                Pensez H24 à votre travail sans déconnecter
              </p>
              <p className="mt-4 lg:mt-6 text-[#787878]">
                Vous travaillez non stop pour développer votre entreprise. Vous
                n&apos;arrivez pas à déconnecter de votre travail. Ce stress
                vous épuise et vous savez que vous finirez par craquer.
              </p>
            </MagicCard>
            <button className="whiteBtn w-full mt-4 lg:mt-6">
              Maîtrise ton stress dès maintenant
            </button>
          </div>
        </div>
      </div>

      {/* Section Résultats (1) */}
      <div className="bg-white text-[#020518] mt-12 lg:mt-16 flex flex-col items-center justify-center px-4">
        <BlackButton className="mt-12 lg:mt-20">Résultats</BlackButton>
        <p className="mt-6 text-xl lg:text-5xl font-semibold mb-6 text-center">
          Pourquoi choisir ce programme ?
        </p>
        <p className="text-[#525252] w-full lg:w-[80%] text-sm lg:text-2xl text-center">
          Dominez le Stress est conçu pour vous aider à surmonter les schémas de
          pensée négatifs, réduire votre stress et enfin faire taire votre
          cerveau.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6 mt-8 lg:mt-10 px-4">
          <MagicCard
            className="max-w-[410px] border border-[#676767] magicCard p-4 lg:p-6 cursor-pointer bg-[#F6F6F6]"
            gradientColor={"#D9D9D955"}
          >
            <img src="/icons/icon1.svg" alt="zap" />
            <p className="mt-4 text-xl text-black">
              Epuisés par votre charge de travail
            </p>
            <p className="mt-4 lg:mt-6 text-[#787878]">
              Vous êtes constamment sous pression pour atteindre vos objectifs.
              Cette surcharge de travail vous épuise, impacte vos relations
              personnelles et ruine votre productivité.
            </p>
          </MagicCard>
          <MagicCard
            className="max-w-[410px] border border-[#676767] magicCard p-4 lg:p-6 cursor-pointer bg-[#F6F6F6]"
            gradientColor={"#D9D9D955"}
          >
            <img src="/icons/icon1.svg" alt="zap" />
            <p className="mt-4 text-xl text-black">
              Epuisés par votre charge de travail
            </p>
            <p className="mt-4 lg:mt-6 text-[#787878]">
              Vous êtes constamment sous pression pour atteindre vos objectifs.
              Cette surcharge de travail vous épuise, impacte vos relations
              personnelles et ruine votre productivité.
            </p>
          </MagicCard>
          <MagicCard
            className="max-w-[410px] border border-[#676767] magicCard p-4 lg:p-6 cursor-pointer bg-[#F6F6F6]"
            gradientColor={"#D9D9D955"}
          >
            <img src="/icons/icon1.svg" alt="zap" />
            <p className="mt-4 text-xl text-black">
              Epuisés par votre charge de travail
            </p>
            <p className="mt-4 lg:mt-6 text-[#787878]">
              Vous êtes constamment sous pression pour atteindre vos objectifs.
              Cette surcharge de travail vous épuise, impacte vos relations
              personnelles et ruine votre productivité.
            </p>
          </MagicCard>
        </div>
        <button className="w-[300px] lg:w-[400px] max-w-full py-3 lg:py-4 rounded-2xl outline outline-black bg-[#ECECEC] mt-12 lg:mt-20 mb-8 lg:mb-16">
          Je passe à l&apos;action
        </button>
      </div>

      {/* Section Plan d'action */}
      <div className="z-10 mt-12 lg:mt-[50px] flex flex-col justify-center items-center">
        <GrayButton>J&apos;ai ce qu&apos;il te faut</GrayButton>
        <h2 className="mt-4 lg:mt-[24px] text-xl lg:text-5xl text-center font-semibold">
          <span className="text-[#747474]">Découvrez</span> votre plan
          d&apos;action
        </h2>
        <p className="mt-4 lg:mt-[20px] text-[#c5c5c5] text-sm lg:text-2xl text-center lg:w-[80%] m-auto">
          Dominez le Stress est un programme qui vous guidera étape par étape
          pour transformer le stress en une force positive, éliminer la
          surcharge mentale et retrouver un équilibre qui soutient votre
          productivité et votre bien-être.
        </p>
        <div className="flex flex-col justify-center items-center gap-12 lg:gap-[100px] mt-12 lg:mt-[80px]">
          <div className="flex flex-col lg:flex-row justify-center items-center">
            <Image
              className="object-cover"
              src="/stress.png"
              width={430}
              alt="stress"
              height={270}
            />
            <div className="hidden lg:flex mx-8 div-dashed h-full">
              <div className="div-dashed-number">1</div>
            </div>
            <div className="flex flex-col">
              <p className="text-xl mb-4">Calmez le stress rapidement</p>
              <p className="text-sm lg:text-base text-[#ffffffcc]">
                - Lorem ipsum dolor sit amet, consetcit ut ad.
              </p>
            </div>
          </div>
          <button className="whiteBtn w-2/3 lg:w-1/2">
            Débloque ton potentiel
          </button>
        </div>
      </div>

      {/* Section Résultats (2) */}
      <div className="bg-white text-[#020518] mt-12 lg:mt-16 flex flex-col items-center justify-center px-4">
        <BlackButton className="mt-12 lg:mt-20">Résultats</BlackButton>
        <p className="mt-6 text-xl lg:text-5xl font-semibold mb-6 text-center">
          Vous en sortirez plus productif
        </p>
        <p className="text-[#525252] w-full lg:w-[80%] text-sm lg:text-2xl text-center">
          Ce programme est conçu pour transformer votre réponse au stress en un
          levier de productivité.
        </p>
        <div className="flex flex-wrap justify-center gap-6 mt-8 lg:mt-10 px-4">
          <div className="max-w-[300px] p-4">
            <img src="/icons/bulb.svg" alt="bulb" />
            <p className="text-black mt-4 text-xl">
              Reprogrammez votre réponse cognitive au stress
            </p>
            <p className="mt-3 text-xs lg:text-sm text-[#000000CC]">
              Vous êtes constamment sous pression pour atteindre vos objectifs.
              Cette surcharge de travail vous épuise, impacte vos relations et
              ruine votre productivité.
            </p>
          </div>
          <div className="max-w-[300px] p-4">
            <img src="/icons/bulb.svg" alt="bulb" />
            <p className="text-black mt-4 text-xl">
              Reprogrammez votre réponse cognitive au stress
            </p>
            <p className="mt-3 text-xs lg:text-sm text-[#000000CC]">
              Vous êtes constamment sous pression pour atteindre vos objectifs.
              Cette surcharge de travail vous épuise, impacte vos relations et
              ruine votre productivité.
            </p>
          </div>
          <div className="max-w-[300px] p-4">
            <img src="/icons/bulb.svg" alt="bulb" />
            <p className="text-black mt-4 text-xl">
              Reprogrammez votre réponse cognitive au stress
            </p>
            <p className="mt-3 text-xs lg:text-sm text-[#000000CC]">
              Vous êtes constamment sous pression pour atteindre vos objectifs.
              Cette surcharge de travail vous épuise, impacte vos relations et
              ruine votre productivité.
            </p>
          </div>
          <div className="max-w-[300px] p-4">
            <img src="/icons/bulb.svg" alt="bulb" />
            <p className="text-black mt-4 text-xl">
              Reprogrammez votre réponse cognitive au stress
            </p>
            <p className="mt-3 text-xs lg:text-sm text-[#000000CC]">
              Vous êtes constamment sous pression pour atteindre vos objectifs.
              Cette surcharge de travail vous épuise, impacte vos relations et
              ruine votre productivité.
            </p>
          </div>
        </div>
        <button className="w-[300px] lg:w-[400px] max-w-full py-3 lg:py-4 rounded-2xl outline outline-black bg-[#ECECEC] mt-12 lg:mt-20 mb-8 lg:mb-16">
          Deviens plus productif maintenant
        </button>
      </div>

      {/* Section Témoignages */}
      <div className="mt-12 lg:mt-16 flex flex-col justify-center items-center px-4">
        <GrayButton>Approuvé par +5000 personnes accompagnées</GrayButton>
        <h2 className="mt-4 lg:mt-6 text-xl lg:text-5xl text-center font-semibold">
          <span className="text-[#747474]">Découvrez</span> ce qu&apos;ils
          disent ?
        </h2>
        <div className="mt-4 lg:mt-8 w-full">
          <VideoCarousel />
        </div>
        <button className="whiteBtn mt-4 lg:mt-6">
          Rejoins-les dès maintenant !
        </button>
      </div>

      {/* Section Prix */}
      <div className="relative flex flex-col justify-center items-center mt-12 lg:mt-16 xl:mt-24 px-4">
        <GrayButton>Apprends à dominer le stress</GrayButton>
        <h2 className="leading-normal mt-4 lg:mt-6 w-full lg:w-[650px] text-xl lg:text-5xl text-center font-semibold">
          <span className="text-[#747474]">Découvrez le </span> programme au
          meilleur prix
        </h2>
        <p className="mt-2 lg:mt-4 lg:text-xl text-xs text-[#FFFFFFE0]">
          ⮕ Possibilité de paiement en 3x sans frais
        </p>
        <div className="mt-6 lg:mt-10 flex flex-col lg:flex-row justify-center gap-6 lg:gap-8">
          <MagicCard className="relative max-w-[400px] flex flex-col rounded-2xl border border-[#717171] p-4 lg:p-8">
            <img
              src="/blur/blurPrice.svg"
              className="absolute -top-1/2 -left-1/2"
              alt=""
            />
            <img
              src="/blur/blurPrice.svg"
              className="absolute -bottom-1/2 -right-1/2 hidden lg:block"
              alt=""
            />
            <Image
              src="/formation.png"
              width={330}
              height={220}
              className="object-cover"
              alt="formation price"
            />
            <p className="lg:text-xl mt-4">
              Programme d&apos;accompagnement pour dominer le Stress
            </p>
            <p className="text-4xl lg:text-5xl mt-4">450€</p>
            <div className="h-px w-1/2 bg-[#ffffff29] my-3 lg:my-4"></div>
            <p className="mb-2 text-sm">Tes avantages :</p>
            <ul className="space-y-2">
              <li className="text-[12px] lg:text-[14px] text-[#ffffffcc] flex items-center gap-2">
                <CircleCheck width={16} height={16} />
                Accès à vie
              </li>
              <li className="text-[12px] lg:text-[14px] text-[#ffffffcc] flex items-center gap-2">
                <CircleCheck width={16} height={16} />
                Accès à vie
              </li>
              <li className="text-[12px] lg:text-[14px] text-[#ffffffcc] flex items-center gap-2">
                <CircleCheck width={16} height={16} />
                Accès à vie
              </li>
              <li className="text-[12px] lg:text-[14px] text-[#ffffffcc] flex items-center gap-2">
                <CircleCheck width={16} height={16} />
                Accès à vie
              </li>
              <li className="text-[12px] lg:text-[14px] text-[#ffffffcc] flex items-center gap-2">
                <CircleCheck width={16} height={16} />
                Accès à vie
              </li>
            </ul>
            <button className="w-full whiteBtn whiteBtnOutline mt-6 lg:mt-12 mb-4">
              Commencer maintenant
            </button>
          </MagicCard>
        </div>
      </div>

      {/* Section FAQ */}
      <div className="mt-12 lg:mt-16 px-4">
        <h2 className="mt-4 lg:mt-6 text-xl lg:text-5xl text-center font-semibold">
          <span className="text-[#747474]">Il n&apos;y a pas</span> de question
          bête
        </h2>
        <Faq />
      </div>

      {/* Section CTA Footer */}
      <div className="relative mt-12 lg:mt-16 flex flex-col items-center justify-center px-4">
        <Meteors number={30} />
        <GrayButton>Apprends à dominer le stress</GrayButton>
        <h2 className="text-xl lg:text-5xl mt-4 lg:mt-6 text-center">
          On commence maintenant ?
        </h2>
        <p className="mt-4 lg:mt-6 text-xs lg:text-xl w-full max-w-lg text-center">
          Si tu prends mon programme maintenant, tu commences à payer dès le
          mois suivant !
        </p>
        <button className="whiteBtn whiteBtnOutline mt-4 lg:mt-8">
          Commencer maintenant
        </button>
        <div className="hidden z-10 h-24 mb-8 lg:mb-[35px] text-black lg:flex flex-col sm:flex-row items-center justify-between w-full max-w-4xl mt-12 lg:mt-20 bg-white rounded-2xl px-6 lg:px-8 py-3 lg:py-4">
          <div className="flex items-center gap-2">
            <Image
              className="rounded-full"
              src="/pp.png"
              width={43}
              height={43}
              alt="Jeremy Coron"
            />
            <span className="text-xs lg:text-sm font-medium">
              Jeremy Coron 🧠
            </span>
          </div>
          <a href="https://www.linkedin.com/in/jeremycoron/">
            <Image
              src="/icons/linkedin.svg"
              width={24}
              height={24}
              alt="Linkedin icon"
            />
          </a>
          <p className="text-xs lg:text-sm">
            Réalisé par:{" "}
            <a
              target="_blank"
              href="https://la-landing.fr"
              className="underline"
            >
              La-Landing
            </a>
          </p>
        </div>
        <div className="flex z-10 mb-8 lg:mb-0 text-black lg:hidden flex-col sm:flex-row justify-between w-full mt-12 lg:mt-20 bg-white rounded-2xl p-6 h-[120px]">
          <div className="flex items-center gap-2 justify-between w-full">
            <div className="flex items-center gap-2">
              <Image
                className="rounded-full"
                src="/pp.png"
                width={43}
                height={43}
                alt="Jeremy Coron"
              />
              <span className="text-xs lg:text-sm font-medium">
                Jeremy Coron 🧠
              </span>
            </div>
            <a href="https://www.linkedin.com/in/jeremycoron/">
              <Image
                src="/icons/linkedin.svg"
                width={24}
                height={24}
                alt="Linkedin icon"
              />
            </a>
          </div>
          <p className="text-xs">
            Réalisé par:{" "}
            <a
              target="_blank"
              href="https://la-landing.fr"
              className="underline"
            >
              La-Landing
            </a>
          </p>
        </div>
        <img
          src="/blur/blurFooter.svg"
          alt="blur footer"
          className="absolute bottom-0 w-full"
        />
      </div>
    </div>
  );
}
