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

export default function Home() {
  return (
    <div className="relative">
      <Grid />
      <Nav />
      <div className="home1 flex items-center justify-center gap-[60px] mt-[90px]">
        <div className="z-10 w-3/4">
          <GrayButton>Libère-toi du stress en seulement 30 jours.</GrayButton>
          <h1 className="text-[75px] mt-[18px] leading-none">
            Apprends à maîtriser <br /> ton stress pour reprendre <br /> le
            contrôle.
          </h1>
          <p className="text-2xl text-[#A9A9A9] mt-[16px] w-[850px]">
            Une approche humaine, personnalisée, et validée par des résultats
            concrets: rejoins-nous et découvre comment il est possible de
            transformer ton stress en sérénité.
          </p>
          <button className="whiteBtn mt-[32px]">
            Apprends a maitrister son stress
          </button>
          <div className="flex items-center gap-3 text-sm mt-[18px]">
            <Image src="/people.png" width={122} height={25} alt={"people"} />
            <p>+5 000 personnes accompagnées</p>
          </div>
        </div>
        <div className="w-1/4 mr-[80px]">
          <video
            className="border-4 rounded-2xl shadow-2xl shadow-white"
            src="/video.mp4"
            muted
          ></video>
        </div>
      </div>
      <div className="relative z-10 bg-white w-full mt-20 h-[90px] flex items-center justify-center gap-[50px]">
        <Image src="/leMonde.png" height={34} width={150} alt={"le monde"} />
        <Image src="/femme.png" height={34} width={150} alt={"le monde"} />
        <Image src="/lePoint.png" height={34} width={150} alt={"le monde"} />
        <Image src="/livementor.png" height={34} width={150} alt={"le monde"} />
        <Image src="/myRh.png" height={34} width={150} alt={"le monde"} />
        <Image src="/sqool.png" height={34} width={150} alt={"le monde"} />
      </div>
      <div className="z-10 relative flex justify-center items-center mt-[150px] gap-[100px]">
        <div>
          <GrayButton>Apprends à me faire confiance</GrayButton>
          <h2 className="mt-[24px] text-2xl">
            <span className="text-[#747474] ">Je suis,</span> Jérémy Coron
          </h2>
          <p className="mt-[14px] text-xl max-w-[550px] font-light">
            En 10 ans, j’ai accompagné plus de 5 000 personnes, publié un livre
            best-seller, et conçu des méthodes utilisées par des leaders comme
            Yomi Denzel, l’un des entrepreneurs français les plus influents.
            PROTOCOLES, c’est la synthèse de ces années de recherches et
            d’expériences, pour vous offrir un raccourci direct vers vos
            objectifs.
          </p>
          <button className="whiteBtn mt-[16px]">Je te fais confiance</button>
        </div>
        <div>
          <div className="relative">
            <img className="absolute -z-10" src="/blur/follow.svg" alt="blur" />
            <div className="-left-1/3 top-[20px] rotate-6 rounded-2xl p-4 bg-white absolute flex flex-col gap-2 items-start">
              <span className="bg-black text-white text-sm rounded-full p-1">
                Accompagnement
              </span>
              <NumberTicker
                value={5000}
                className="whitespace-pre-wrap text-4xl font-medium tracking-tighter text-black dark:text-white"
              />
              <p className="text-black">personnes accompagnées</p>
            </div>
            <Image
              className="rounded-lg object-cover"
              src="/moi.png"
              width={490}
              height={630}
              alt="Jeremy Coron"
            />
            <div className="bg-white rounded-lg rotate-2 absolute -z-10 top-0 w-[490px] h-[630px]"></div>
            <div className="-right-[50px] bottom-[-30px] -rotate-6 rounded-2xl p-4 bg-white absolute flex flex-col gap-2 items-start">
              <span className="bg-black text-white text-sm rounded-full p-1">
                Accompagnement
              </span>
              <NumberTicker
                value={5000}
                className="whitespace-pre-wrap text-4xl font-medium tracking-tighter text-black dark:text-white"
              />
              <p className="text-black">personnes accompagnées</p>
            </div>
          </div>
        </div>
      </div>
      <div className="z-10 mt-[200px] flex flex-col justify-center items-center">
        <GrayButton>Pour qui est ce programme</GrayButton>
        <h2 className="mt-[24px] text-5xl text-center font-semibold">
          <span className="text-[#747474] ">Tu es toujours</span> sous pression
          ?
        </h2>
        <p className="mt-[20px] text-[#c5c5c5] text-2xl text-center w-[80%] m-auto">
          Ce programme est conçu pour les personnes qui saturent de toujours
          être sous pression, de ne jamais réussir à calmer leur cerveau.
        </p>
        <div className=" flex justify-center items-center gap-[100px] mt-[80px]">
          <div>
            <Image className="!static" src="/brain.png" fill alt="stress" />
          </div>
          <div className="max-w-[500px] flex flex-col gap-[32px]">
            <MagicCard
              className="border border-[#676767] magicCard p-[24px] cursor-pointer bg-[#1e2020]"
              gradientColor={"#323334"}
            >
              <img src="/icons/zap.svg" alt="zap" />
              <p className=" mt-4 text-xl">
                Epuisés par votre charge de travail
              </p>
              <p className="mt-6 text-[#787878]">
                Vous êtes constamment sous pression pour atteindre vos
                objectifs. Cette surcharge de travail vous épuise, impacte vos
                relations personnelles et ruine votre productivité.
              </p>
            </MagicCard>
            <MagicCard
              className="magicCard border border-[#676767] shadow-[#3e3f40] shadow p-[24px] cursor-pointer bg-[#1e2020]"
              gradientColor={"#323334"}
            >
              <img src="/icons/zap.svg" alt="zap" />
              <p className=" mt-4 text-xl">
                Pensez H24 à votre travail sans déconnecter{" "}
              </p>
              <p className="mt-6 text-[#787878]">
                Vous travaillez non stop pour développer votre entreprise. Vous
                narrivez pas à déconnecter de votre travail. Ce stress vous
                epuise et vous savez que vous finirez par craquer.
              </p>
            </MagicCard>
            <button className="whiteBtn w-full mt-[30px]">
              Maîtrise ton stress dès maintenant
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white text-[#020518] mt-[70px] flex flex-col items-center justify-center">
        <BlackButton className="mt-[80px]">
          Ce programme est pour toi
        </BlackButton>
        <p className="mt-6 text-5xl font-semibold mb-6">
          Pourquoi choisir ce programme ?
        </p>
        <p className="text-[#525252] w-[80%] m-auto text-2xl text-center">
          Dominez le Stress est conçu pour vous aider à surmonter les schémas de
          pensée negatifs, réduire votre stress et enfin faire taire votre
          cerveau
        </p>
        <div className="flex justify-center gap-[50px] mt-[50px]">
          <MagicCard
            className="max-w-[410px] border border-[#676767] magicCard p-[24px] cursor-pointer bg-[#F6F6F6]"
            gradientColor={"#D9D9D955"}
          >
            <img src="/icons/icon1.svg" alt="zap" />
            <p className="text-black mt-4 text-xl">
              Epuisés par votre charge de travail
            </p>
            <p className="mt-6 text-[#787878]">
              Vous êtes constamment sous pression pour atteindre vos objectifs.
              Cette surcharge de travail vous épuise, impacte vos relations
              personnelles et ruine votre productivité.
            </p>
          </MagicCard>
          <MagicCard
            className="max-w-[410px] border border-[#676767] magicCard p-[24px] cursor-pointer bg-[#F6F6F6]"
            gradientColor={"#D9D9D955"}
          >
            <img src="/icons/icon1.svg" alt="zap" />
            <p className="text-black mt-4 text-xl">
              Epuisés par votre charge de travail
            </p>
            <p className="mt-6 text-[#787878]">
              Vous êtes constamment sous pression pour atteindre vos objectifs.
              Cette surcharge de travail vous épuise, impacte vos relations
              personnelles et ruine votre productivité.
            </p>
          </MagicCard>
          <MagicCard
            className="max-w-[410px] border border-[#676767] magicCard p-[24px] cursor-pointer bg-[#F6F6F6]"
            gradientColor={"#D9D9D955"}
          >
            <img src="/icons/icon1.svg" alt="zap" />
            <p className="text-black mt-4 text-xl">
              Epuisés par votre charge de travail
            </p>
            <p className="mt-6 text-[#787878]">
              Vous êtes constamment sous pression pour atteindre vos objectifs.
              Cette surcharge de travail vous épuise, impacte vos relations
              personnelles et ruine votre productivité.
            </p>
          </MagicCard>
        </div>
        <button className="w-[400px] py-4 rounded-2xl outline-[7px] outline outline-black bg-[#ECECEC] mt-[90px] mb-[60px]">
          Je passe a laction
        </button>
      </div>
      <div className="z-10 mt-[200px] flex flex-col justify-center items-center">
        <GrayButton>jai ce quil te faut</GrayButton>
        <h2 className="mt-[24px] text-5xl text-center font-semibold">
          <span className="text-[#747474] ">Decouvez</span> votre plan daction
        </h2>
        <p className="mt-[20px] text-[#c5c5c5] text-2xl text-center w-[80%] m-auto">
          Dominez le Stress est un programme qui vous guidera étape par étape
          pour transformer le stress en une force positive, éliminer la
          surcharge mentale et retrouver un équilibre qui soutient votre
          productivité et votre bien-être.
        </p>
        <div className="flex flex-col justify-center items-center gap-[100px] mt-[80px]">
          <div className="flex justify-center items-center h-full">
            <Image
              className="object-cover"
              src="/stress.png"
              width={430}
              alt="stress"
              height={270}
            />
            <div className="mx-[80px] div-dashed h-full">
              <div className="div-dashed-number">1</div>
            </div>
            <div className="flex flex-col">
              <p className="text-2xl mb-4">Calmez le stress rapidement</p>
              <p className="text-[#ffffffcc]">
                - Lorem ipsum dolor it set amet consetcit ut ad.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center h-full">
            <Image
              className="object-cover"
              src="/stress.png"
              width={430}
              alt="stress"
              height={270}
            />
            <div className="mx-[80px] div-dashed h-full">
              <div className="div-dashed-number">2</div>
            </div>
            <div className="flex flex-col">
              <p className="text-2xl mb-4">Calmez le stress rapidement</p>
              <p className="text-[#ffffffcc]">
                - Lorem ipsum dolor it set amet consetcit ut ad.
              </p>
            </div>
          </div>
          <button className="whiteBtn w-1/2">Debloque ton potenteil</button>
        </div>
      </div>
      <div className="bg-white text-[#020518] mt-[70px] flex flex-col items-center justify-center">
        <BlackButton className="mt-[80px]">Resultats</BlackButton>
        <p className="mt-10 text-5xl font-semibold mb-6">
          Vous en sortirez plus productif
        </p>
        <p className="text-[#525252] w-[80%] m-auto text-2xl text-center">
          Ce programme est conçu pour transformer votre réponse au stress pour
          en faire un levier de productivité.
        </p>

        <div className="flex justify-center gap-[50px] mt-[50px] px-10">
          <div className="max-w-[350px] ">
            <img src="/icons/bulb.svg" alt="zap" />
            <p className="text-black mt-4 text-xl">
              Reprogrammer votre réponse cognitive au stress{" "}
            </p>
            <p className="mt-3 text-[#000000CC]">
              Vous êtes constamment sous pression pour atteindre vos objectifs.
              Cette surcharge de travail vous épuise, impacte vos relations
              personnelles et ruine votre productivité.
            </p>
          </div>
          <div className="max-w-[350px] ">
            <img src="/icons/bulb.svg" alt="zap" />
            <p className="text-black mt-4 text-xl">
              Reprogrammer votre réponse cognitive au stress{" "}
            </p>
            <p className="mt-3 text-[#000000CC]">
              Vous êtes constamment sous pression pour atteindre vos objectifs.
              Cette surcharge de travail vous épuise, impacte vos relations
              personnelles et ruine votre productivité.
            </p>
          </div>
          <div className="max-w-[350px] ">
            <img src="/icons/bulb.svg" alt="zap" />
            <p className="text-black mt-4 text-xl">
              Reprogrammer votre réponse cognitive au stress{" "}
            </p>
            <p className="mt-3 text-[#000000CC]">
              Vous êtes constamment sous pression pour atteindre vos objectifs.
              Cette surcharge de travail vous épuise, impacte vos relations
              personnelles et ruine votre productivité.
            </p>
          </div>
          <div className="max-w-[350px]">
            <img src="/icons/bulb.svg" alt="zap" />
            <p className="text-black mt-4 text-xl">
              Reprogrammer votre réponse cognitive au stress{" "}
            </p>
            <p className="mt-3 text-[#000000CC]">
              Vous êtes constamment sous pression pour atteindre vos objectifs.
              Cette surcharge de travail vous épuise, impacte vos relations
              personnelles et ruine votre productivité.
            </p>
          </div>
        </div>
        <button className="w-[400px] py-4 rounded-2xl outline-[7px] outline outline-black bg-[#ECECEC] mt-[90px] mb-[60px]">
          Deviens plus productif maintenant
        </button>
      </div>
      <div className="mt-[130px] flex flex-col justify-center items-center">
        <GrayButton>Approuvé par +5000 personnes accompagnées</GrayButton>
        <h2 className="mt-[24px] text-5xl text-center font-semibold">
          <span className="text-[#747474] ">Decouvrez</span> ce quils disent ?
        </h2>
        <VideoCarousel />
        <button className="whiteBtn mt-10">Rejoins les dès maintenant !</button>
      </div>
      <div className="relative flex flex-col justify-center items-center mt-24 xl:mt-44">
        <GrayButton>Apprends a dominuer le stress</GrayButton>
        <h2 className="leading-normal w-[650px] mt-[24px] text-5xl text-center font-semibold">
          <span className="text-[#747474] ">decouvrez le </span> programme au
          meilleur prix
        </h2>
        <p className="mt-4 text-xl text-[#FFFFFFE0]">
          ⮕ Possibilité de paiement en 3x sans frais
        </p>
        <div className=" mt-[50px] flex justify-center gap-20">
          <div></div>
          <MagicCard className="relative max-w-[400px] flex flex-col rounded-2xl border border-[#717171] p-[30px]">
            <img
              src="/blur/blurPrice.svg"
              className=" absolute -top-1/2 -left-1/2"
              alt=""
            />
            <img
              src="/blur/blurPrice.svg"
              className=" absolute -bottom-1/2 -right-1/2"
              alt=""
            />
            <Image
              src={"/formation.png"}
              width={330}
              height={220}
              className="object-cover"
              alt={"formation price"}
            />
            <p className="text-xl">
              Programme daccompagnement pour dominer le Stress
            </p>
            <p className="text-5xl mt-4">450€</p>
            <div className="h-[1px] w-1/2 bg-[#ffffff29] my-4"></div>
            <p className="mb-2">Tes avantages :</p>
            <ul>
              <li className=" text-[14px] text-[#ffffffcc] mb-2 flex items-center gap-2">
                <CircleCheck width={16} height={16} />
                Accès à vie
              </li>
              <li className=" text-[14px] text-[#ffffffcc] mb-2 flex items-center gap-2">
                <CircleCheck width={16} height={16} />
                Accès à vie
              </li>
              <li className=" text-[14px] text-[#ffffffcc] mb-2 flex items-center gap-2">
                <CircleCheck width={16} height={16} />
                Accès à vie
              </li>
              <li className=" text-[14px] text-[#ffffffcc] mb-2 flex items-center gap-2">
                <CircleCheck width={16} height={16} />
                Accès à vie
              </li>
              <li className=" text-[14px] text-[#ffffffcc] mb-2 flex items-center gap-2">
                <CircleCheck width={16} height={16} />
                Accès à vie
              </li>
            </ul>
            <button className="w-full whiteBtn whiteBtnOutline mt-[50px]">
              Commencer maintenant
            </button>
          </MagicCard>
          <div></div>
        </div>
      </div>
      <div className="mt-[200px]">
        <h2 className="mt-[24px] text-5xl text-center font-semibold">
          <span className="text-[#747474]">Il ny a pas</span> de question bete
        </h2>
        <Faq />
      </div>
      <div className="relative mt-[160px] flex flex-col items-center justify-center">
        <Meteors number={30} />
        <GrayButton>Apprend a dominer le stress</GrayButton>
        <h2 className="text-5xl mt-[20px]">On commence maintenant ?</h2>
        <p className="mt-[24px] text-xl w-[600px] text-center">
          Si tu prends mon programme maintenant tu commences qua payer le mois
          suivant !
        </p>
        <button className="whiteBtn whiteBtnOutline mt-[50px]">
          Commencer maintenant
        </button>
        <div className="z-10 h-[100px] text-black flex items-center justify-between w-[95%] mb-[35px] mt-[300px] m-auto bg-white rounded-2xl px-[32px]">
          <div className="flex items-center justify-center gap-[10px] ">
            <Image
              className="rounded-full"
              src="/pp.png"
              width={43}
              height={43}
              alt="Jeremy Coron"
            />
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight dark:from-white dark:to-slate-900/10 lg:text-lg">
              Jeremy Coron 🧠
            </span>
          </div>
          <a href="https://www.linkedin.com/in/jeremycoron/">
            <Image
              src="/icons/linkedin.svg"
              width={24}
              height={24}
              alt={"Linkedin icon"}
            />
          </a>
          <p>
            Réalisé par:
            <a target="_blank" href="https://la-landing.fr">
              La-Landing
            </a>
          </p>
        </div>
        <img
          src="/blur/blurFooter.svg"
          alt="blur footer"
          className="absolute bottom-0"
        />
      </div>
    </div>
  );
}
