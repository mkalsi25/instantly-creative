import React from "react";
import Image from "next/image";
import BG from "../../pages/images/logo.png";
import Link from "next/link";
export default function Header() {
  return (
    <header className="container mx-auto px-[20px] xl:px-[104px] py-[20px]">
      <div className="flex justify-between  items-center">
        <Link href="/">
          <a className="flex items-center space-x-[16px]">
            <Image alt="InstantlyCreative" src={BG} width={48} height={48} />
            <h1 className=" font-semibold text-[24px] hidden xl:block">
              InstantlyCreative
            </h1>
          </a>
        </Link>
        <div className="flex items-center xl:space-x-[90px]">
          <ul className="hidden xl:flex items-center space-x-[48px] text-[#848484] text-[16px] font-medium">
            {Menu.map((li, key) => {
              return (
                <li key={key}>
                  <Link href={li.to}>
                    <a className="hover:text-[#F44D44]">{li.title}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
          <button className="bg-[#F44D44] text-white px-[27px] py-[14px] rounded-[16px] text-[16px] font-medium outline-none focus:outline-none">
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
}

const Menu = [
  { title: "Home", to: "/" },
  { title: "Services", to: "/" },
  { title: "Portfolio", to: "/" },
  { title: "Blog", to: "/" },
];
