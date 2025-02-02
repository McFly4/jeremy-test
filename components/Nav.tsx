import Image from "next/image";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { ShimmerButtonNav } from "@/components/ui/shimmer-button-nav";

export default function Nav() {
  return (
    <nav className="z-30 fixed flex justify-between items-center h-[58px]">
      <div className="bg-[#202020] px-4 py-1 shadow-2xl flex items-center justify-center gap-[10px] border border-[#FDFDFD59] rounded-2xl">
        <Image
          className="rounded-full"
          src="/pp.png"
          width={43}
          height={43}
          alt="Jeremy Coron"
        />
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
          Jeremy Coron 🧠
        </span>
      </div>
      <ShimmerButtonNav
        background="#202020"
        className="shadow-2xl flex items-center justify-center gap-[40px] border border-[#FDFDFD59] rounded"
      >
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
          Module de programme
        </span>
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
          Résultats des coachés
        </span>
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
          Prix
        </span>
      </ShimmerButtonNav>
      <div>
        <RainbowButton>Apprends à maîtriser ton stress</RainbowButton>
      </div>
    </nav>
  );
}
