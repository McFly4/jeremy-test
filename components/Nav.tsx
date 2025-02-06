import Image from "next/image";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { ShimmerButtonNav } from "@/components/ui/shimmer-button-nav";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import Link from "next/link";
interface NavProps {
  navigation: {
    name: string;
    logo: string;
    menuItems: {
      label: string;
    }[];
    ctaButton: {
      text: string;
    };
  };
}

export default function Nav({ navigation }: NavProps) {
  console.log(`navigation`, navigation);
  return (
    <nav className="z-50 fixed flex justify-between items-center h-[58px]">
      <div className="lg:bg-[#202020] px-4 py-1 lg:shadow-2xl flex items-center justify-center gap-[10px] lg:border border-[#FDFDFD59] rounded-2xl">
        <Image
          className="rounded-full"
          src={navigation.logo}
          width={43}
          height={43}
          alt="Jeremy Coron"
        />
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
          {navigation.name}
        </span>
      </div>
      <ShimmerButtonNav
        background="#202020"
        className="hidden lg:flex shadow-2xl items-center justify-center gap-[40px] border border-[#FDFDFD59] rounded"
      >
        {navigation.menuItems.map((item, index) => (
          <Link
            key={index}
            href="#1"
            passHref
            className="text-white dark:text-slate-900/10 text-sm font-medium leading-none tracking-tight"
          >
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
              {item.label}
            </span>
          </Link>
        ))}
      </ShimmerButtonNav>
      <div className="hidden lg:block">
        <RainbowButton>
          <a href="https://gooogle.fr">{navigation.ctaButton.text}</a>
        </RainbowButton>
      </div>
      <div className="lg:hidden pr-4">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Menu />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {navigation.menuItems.map((item, index) => (
              <DropdownMenuItem key={index}>
                <Link href="#1">
                  <DropdownMenuItem>{item.label}</DropdownMenuItem>
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
