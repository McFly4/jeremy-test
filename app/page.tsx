import Image from "next/image";
import Grid from "@/components/Grid";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <div className="relative">
      <Grid />
      <Nav />
      <div className="home1 flex items-center justify-center gap-[60px] mt-[90px]">
        <div className="z-10 w-3/4">
          <p>Libère-toi du stress en seulement 30 jours.</p>
          <h1 className="text-[75px] mt-[18px] leading-none">
            Apprends à maîtriser <br /> ton stress pour reprendre <br /> le
            contrôle.
          </h1>
          <p className="text-2xl text-[#A9A9A9] mt-[16px] w-[850px]">
            Une approche humaine, personnalisée, et validée par des résultats
            concrets: rejoins-nous et découvre comment il est possible de
            transformer ton stress en sérénité.
          </p>
          <button className="mt-[32px]">
            Apprends a maitrister son stresse
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
    </div>
  );
}
