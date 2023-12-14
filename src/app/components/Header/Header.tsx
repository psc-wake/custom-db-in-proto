import Image from "next/image";
import Link from "next/link";
import { Logout } from "@/app/components/Header/Logout";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur lg:z-50 lg:border-b lg:border-slate-900/10 bg-white/95 supports-backdrop-blur:bg-white/60">
      <div className="h-10 mx-auto flex items-center justify-between px-10">
        <h1 className=" flex items-center">
          <Link href="/">
            <Image src="/images/logo.png" alt={" "} width="102" height="16" />
          </Link>
        </h1>
        <Logout />
      </div>
    </header>
  );
}
