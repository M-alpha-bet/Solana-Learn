import { ArrowUpRight, Globe } from "lucide-react";

export default function Navbar() {
  return (
    <>
      <div className="fixed w-full top-0 z-2">
        <div className="bg-[#F9F9F9] py-3">
          <p className="w-full justify-center flex items-center mx-auto">
            Disclaimer: This website is strictly for educational purposes and is
            not officially affiliated with
            <span className="nav-disclaimer">
              <Globe className="size-3" />
              solana.com
              <a href="https://solana.com">
                <ArrowUpRight className="size-5" />
              </a>
            </span>
          </p>
        </div>

        <div className="px-24 pt-5">
          <img src="/images/logo.png" className="h-[40px]" alt="Solana Logo" />
        </div>
      </div>
    </>
  );
}
