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
import { HomeDocument } from "@/sanity/lib/type";

async function fetchHomeData() {
  return await sanityFetch<HomeDocument>({ query: firstQuery });
}

export default async function Home() {
  const data = await fetchHomeData();
  const hero = data.heroSection;
  const brands = data.brands;
  const presentation = data.presentationSection;
  const forWho = data.forWhoSection;
  const results = data.resultsSection;
  const results2 = data.resultsSection2;
  const price = data.priceSection;
  const faq = data.faqSection;
  const footer = data.ctaFooter;
  const nav = data.navigation;

  return (
    <div className="relative">
      <Grid />
      <Nav navigation={nav} />
      <div className="home1 flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-[60px] px-4">
        <div className="z-10 lg:w-3/4">
          <GrayButton>{hero.topButton}</GrayButton>
          <h1 className="text-xl lg:text-[64px] mt-4 leading-tight">
            {hero.titlePart1} <br /> {hero.titlePart2} <br /> {hero.titlePart3}
          </h1>
          <p className="text-sm lg:text-xl text-[#A9A9A9] mt-4 lg:w-[700px]">
            {hero.description}
          </p>
          <button className="whiteBtn mt-6">{hero.ctaButton}</button>
          <div className="flex items-center gap-2 mt-4">
            <Image src="/people.png" width={122} height={25} alt="people" />
            <p className="text-xs lg:text-base">{hero.statsText}</p>
          </div>
        </div>
        <div className="w-full lg:w-auto">
          <VideoTop videoUrl={hero.video} />
        </div>
      </div>

      {/* Marques */}
      <div className="brands px-2 relative z-10 bg-white w-full mt-8 lg:mt-10 h-[90px] flex items-center gap-4 lg:gap-[50px] lg:justify-center overflow-x-auto whitespace-nowrap scrollbar-hide">
        {brands.map((brand: any, index: any) => (
          <Image
            key={index}
            src={brand.image}
            height={34}
            width={150}
            alt="brand"
          />
        ))}
      </div>

      {/* Section Présentation */}
      <div className="px-3.5 lg:px-0 z-10 relative flex flex-col lg:flex-row justify-center items-center mt-12 lg:mt-[150px] gap-6 lg:gap-[100px]">
        <div>
          <GrayButton>{presentation.topButton}</GrayButton>
          <h2 className="mt-6 text-xl lg:text-2xl">
            <span className="text-[#747474]">{presentation.name1}</span>{" "}
            {presentation.name2}
          </h2>
          <p className="mt-4 lg:mt-[14px] lg:text-xl max-w-[550px] font-light">
            {presentation.description}
          </p>
          <button className="whiteBtn mt-4 lg:mt-[16px]">
            {presentation.ctaButton}
          </button>
        </div>
        <div>
          <div className="relative">
            <img className="absolute -z-10" src="/blur/follow.svg" alt="blur" />
            <div className="z-10 -left-1/3 top-[20px] rotate-6 rounded-2xl p-4 bg-white absolute hidden lg:flex flex-col gap-2 items-start">
              <span className="bg-black text-white text-sm rounded-full p-1">
                {presentation.nbOfPeople[0].title}
              </span>
              <NumberTicker
                value={presentation.nbOfPeople[0].number}
                className="whitespace-pre-wrap text-3xl lg:text-4xl font-medium tracking-tighter text-black dark:text-white"
              />
              <p className="text-black text-sm">
                {presentation.nbOfPeople[0].description}
              </p>
            </div>

            <ShineBorder
              className="relative flex  flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl"
              color={["white"]}
            >
              <Image
                className="rounded-lg object-cover"
                src={presentation.image}
                width={490}
                height={630}
                alt="Jeremy Coron"
              />
            </ShineBorder>

            <div className="hidden lg:block bg-white rounded-lg rotate-2 absolute -z-10 top-0 w-[490px] h-[630px]"></div>
            <div className="-right-[50px] bottom-[-30px] -rotate-6 rounded-2xl p-4 bg-white absolute hidden lg:flex flex-col gap-2 items-start">
              <span className="bg-black text-white text-sm rounded-full p-1">
                {presentation.nbOfPeople[1].title}
              </span>
              <NumberTicker
                value={presentation.nbOfPeople[1].number}
                className="whitespace-pre-wrap text-3xl lg:text-4xl font-medium tracking-tighter text-black dark:text-white"
              />
              <p className="text-black text-sm">
                {presentation.nbOfPeople[1].description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section Pour qui */}
      <div className="z-10 mt-12 lg:mt-40 flex flex-col justify-center items-center px-4">
        <GrayButton>{forWho.topButton}</GrayButton>
        <h2 className="mt-6 text-xl lg:text-5xl text-center font-semibold">
          <span className="text-[#747474]">{forWho.title1}</span>{" "}
          {forWho.title2}
        </h2>
        <p className="mt-4 lg:mt-5 text-[#c5c5c5] text-sm lg:text-2xl text-center w-full lg:w-[80%]">
          {forWho.description}
        </p>
        <div className="flex flex-col-reverse lg:flex-row items-center mt-8 lg:mt-10 px-4 w-[90%] justify-between">
          <div className="w-full lg:w-[45%]">
            <Image
              src={forWho.image}
              alt="stress"
              fill
              className="!static rounded-lg mt-8 lg:mt-0"
            />
          </div>
          <div className="max-w-[500px] flex flex-col gap-6 lg:gap-8">
            {forWho.cards.map((card: any, index: number) => (
              <MagicCard
                key={index}
                className="border border-[#676767] magicCard p-4 lg:p-6 cursor-pointer bg-[#1e2020]"
                gradientColor={"#323334"}
              >
                <img src="/icons/zap.svg" alt="zap" />
                <p className="mt-4 text-xl">{card.title}</p>
                <p className="mt-4 lg:mt-6 text-[#787878]">
                  {card.description}
                </p>
              </MagicCard>
            ))}
            <button className="whiteBtn w-full mt-4 lg:mt-6">
              {forWho.ctaButton}
            </button>
          </div>
        </div>
      </div>

      {/* Section Résultats */}
      <div className="bg-white text-[#020518] mt-12 lg:mt-16 flex flex-col items-center justify-center px-4">
        <BlackButton className="mt-12 lg:mt-20">
          {results.topButton}
        </BlackButton>
        <p className="mt-6 text-xl lg:text-5xl font-semibold mb-6 text-center">
          {results.title}
        </p>
        <p className="text-[#525252] w-full lg:w-[80%] text-sm lg:text-2xl text-center">
          {results.description}
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6 mt-8 lg:mt-10 px-4">
          {results.cards.map((card, index) => (
            <MagicCard
              key={index}
              className="max-w-[410px] border border-[#676767] magicCard p-4 lg:p-6 cursor-pointer bg-[#F6F6F6]"
              gradientColor={"#D9D9D955"}
            >
              <Image src={card.icon} width={24} height={24} alt="icon" />
              <p className="mt-4 text-xl text-black">{card.title}</p>
              <p className="mt-4 lg:mt-6 text-[#787878]">{card.description}</p>
            </MagicCard>
          ))}
        </div>
        <button className="font-[600] w-[300px] lg:w-[400px] max-w-full py-3 lg:py-4 rounded-2xl outline outline-black bg-[#ECECEC] mt-12 lg:mt-20 mb-8 lg:mb-20">
          {results.ctaButton}
        </button>
      </div>

      {/* Section Plan d'action */}
      <div className="z-10 mt-12 lg:mt-24 flex flex-col justify-center items-center">
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
        <BlackButton className="mt-12 lg:mt-20">
          {results2.topButton}
        </BlackButton>
        <p className="mt-6 text-xl lg:text-5xl font-semibold mb-6 text-center">
          {results2.title}
        </p>
        <p className="text-[#525252] w-full lg:w-[80%] text-sm lg:text-2xl text-center">
          {results2.description}
        </p>
        <div className="flex flex-wrap justify-center gap-6 mt-8 lg:mt-10 px-4">
          {results2.cards.map((card, index) => (
            <div key={index} className="max-w-[300px] p-4">
              <Image src={card.icon} width={24} height={24} alt="icon" />
              <p className="text-black mt-4 text-xl">{card.title}</p>
              <p className="mt-3 text-xs lg:text-sm text-[#000000CC]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
        <button className="font-[600] w-[300px] lg:w-[400px] max-w-full py-3 lg:py-4 rounded-2xl outline outline-black bg-[#ECECEC] mt-12 lg:mt-20 mb-8 lg:mb-20">
          {results2.ctaButton}
        </button>
      </div>

      {/* Section Témoignages */}
      <div className="mt-12 lg:mt-24 flex flex-col justify-center items-center px-4">
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
        <GrayButton>{price.topButton}</GrayButton>
        <h2 className="leading-normal mt-4 lg:mt-6 w-full lg:w-[650px] text-xl lg:text-5xl text-center font-semibold">
          <span className="text-[#747474]">{price.title1}</span> {price.title2}
        </h2>
        <p className="mt-2 lg:mt-4 lg:text-xl text-xs text-[#FFFFFFE0]">
          {price.subtitle}
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
              src={price.card.image}
              width={330}
              height={220}
              className="object-cover"
              alt="formation price"
            />
            <p className="lg:text-xl mt-4">{price.card.title}</p>
            <p className="text-4xl lg:text-5xl mt-4">{price.card.price}</p>
            <div className="h-px w-1/2 bg-[#ffffff29] my-3 lg:my-4"></div>
            <p className="mb-4">{price.card.advantagesTitle}</p>
            <ul className="space-y-2">
              {price.card.advantages.map((advantage, index) => (
                <li
                  key={index}
                  className="text-[12px] lg:text-base text-[#ffffffcc] flex items-center gap-2"
                >
                  <CircleCheck width={16} height={16} />
                  {advantage}
                </li>
              ))}
            </ul>
            <button className="w-full whiteBtn whiteBtnOutline mt-6 lg:mt-12 mb-4">
              {price.card.ctaButton}
            </button>
          </MagicCard>
        </div>
      </div>

      {/* Section FAQ */}
      <div className="mt-12 lg:mt-16 px-4">
        <h2 className="mt-4 lg:mt-6 text-xl lg:text-5xl text-center font-semibold">
          <span className="text-[#747474]">{faq.title1}</span> {faq.title2}
        </h2>
        <Faq questions={faq.questions} />
      </div>

      {/* Section CTA Footer */}
      <div className="relative mt-12 lg:mt-[130px] lg:mt-16 flex flex-col items-center justify-center px-4">
        <Meteors number={30} />
        <GrayButton>{footer.topButton}</GrayButton>
        <h2 className="text-xl lg:text-5xl mt-4 lg:mt-6 text-center">
          {footer.title}
        </h2>
        <p className="mt-4 lg:mt-6 text-xs lg:text-xl w-full max-w-lg text-center">
          {footer.description}
        </p>
        <button className="whiteBtn whiteBtnOutline mt-4 lg:mt-8">
          {footer.ctaButton}
        </button>
        <div className="hidden z-10 h-24 mb-8 lg:mb-[35px] text-black lg:flex flex-col sm:flex-row items-center justify-between w-full max-w-4xl mt-12 lg:mt-80 bg-white rounded-2xl px-6 lg:px-8 py-3 lg:py-4">
          <div className="flex items-center gap-2">
            <Image
              className="rounded-full"
              src={footer.footer.profileImage}
              width={43}
              height={43}
              alt={footer.footer.name}
            />
            <span className="text-xs lg:text-sm font-medium">
              {footer.footer.name}
            </span>
          </div>
          <a href={footer.footer.linkedinUrl}>
            <Image
              src="/icons/linkedin.svg"
              width={24}
              height={24}
              alt="Linkedin icon"
            />
          </a>
          <p className="text-xs lg:text-sm">
            {footer.footer.credits}{" "}
            <a
              target="_blank"
              href={footer.footer.creditsUrl}
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
                src={footer.footer.profileImage}
                width={43}
                height={43}
                alt={footer.footer.name}
              />
              <span className="text-xs lg:text-sm font-medium">
                {footer.footer.name}
              </span>
            </div>
            <a href={footer.footer.linkedinUrl}>
              <Image
                src="/icons/linkedin.svg"
                width={24}
                height={24}
                alt="Linkedin icon"
              />
            </a>
          </div>
          <p className="text-xs">
            {footer.footer.credits}{" "}
            <a
              target="_blank"
              href={footer.footer.creditsUrl}
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
