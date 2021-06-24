import React from "react";
import Image from "next/image";
import BG from "../../pages/images/logo.png";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="container mx-auto px-[20px] xl:px-[104px] mt-[104px]">
      <div className="p-2 xl:p-[80px] border-t border-[#DADADA] grid grid-cols-1 xl:grid-cols-2 gap-4">
        <div>
          <Link href="/">
            <a className=" md:flex items-center space-x-0 md:space-x-[16px]">
              <Image alt="InstantlyCreative" src={BG} width={48} height={48} />
              <h1 className=" font-semibold text-[24px]">InstantlyCreative</h1>
            </a>
          </Link>
          <p className="w-4/5 md:w-[320px] text-[16px] text-[#848484] leading-[24px] pt-[24px]">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
        </div>
        <div className="grid grid-cols-2">
          <div>
            <span className="font-semibold text-[22px]">Services</span>
            <ul className="pt-[30px] text-[14px] grid gap-[20px] text-[#848484]">
              {Services.map((serve, key) => {
                return (
                  <li
                    key={key}
                    className="hover:before:content-['→'] hover:before:mr-3 hover:before:font-semibold hover:font-semibold hover:text-black"
                  >
                    <Link href={serve.to}>
                      <a>{serve.title}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <span className="font-semibold text-[22px]">Quick Links</span>
            <ul className="pt-[30px] text-[14px] grid gap-[20px] text-[#848484]">
              {Menu.map((serve, key) => {
                return (
                  <li
                    key={key}
                    className="hover:before:content-['→'] hover:before:mr-3 hover:before:font-bold hover:font-bold hover:text-black"
                  >
                    <Link href={serve.to}>
                      <a>{serve.title}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2 items-center justify-items-stretch px-2 pt-[40px] md:pt-0 pb-[72px] xl:px-[80px]">
        <div className="text-[#848484] text-[14px]">
          <p>
            Copyright © {new Date().getFullYear() + " "}{" "}
            <Link href="/">
              <a className="text-[#F44D44]">InstantlyCreative. </a>
            </Link>
            All Rights Reserved.
          </p>
        </div>
        <div className=" md:justify-self-end">
          <ul className="flex items-center space-x-2 xl:space-x-[20px]">
            <li>
              <a href="#">
                <p className="sr-only">Facebook</p>
                <FaFacebookF className="bg-[#ECECEE] hover:bg-[#1DA1F2] hover:text-white text-[#646464] w-[32px] h-[32px]  p-[10px] rounded-full" />
              </a>
            </li>
            <li>
              <a href="#">
                <p className="sr-only">Twitter</p>
                <FaTwitter className="bg-[#ECECEE] hover:bg-[#1DA1F2] hover:text-white text-[#646464] w-[32px] h-[32px]  p-[10px] rounded-full" />
              </a>
            </li>
            <li>
              <a href="#">
                <p className="sr-only">Instagram</p>
                <FaInstagram className="bg-[#ECECEE] hover:bg-[#1DA1F2] hover:text-white text-[#646464] w-[32px] h-[32px]  p-[10px] rounded-full" />
              </a>
            </li>
            <li>
              <a href="#">
                <p className="sr-only">Pinterest</p>
                <FaPinterestP className="bg-[#ECECEE] hover:bg-[#1DA1F2] hover:text-white text-[#646464] w-[32px] h-[32px]  p-[10px] rounded-full" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

const Services = [
  { title: "Mobile Apps", to: "/" },
  { title: "Web Apps", to: "/" },
  { title: "Custom Software", to: "/" },
  { title: "UI/ UX Design", to: "/" },
];

const Menu = [
  { title: "Home", to: "/" },
  { title: "Services", to: "/" },
  { title: "Portfolio", to: "/" },
  { title: "Contact", to: "/" },
  { title: "Blog", to: "/" },
];
