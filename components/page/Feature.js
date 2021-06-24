import React from "react";
import Image from "next/image";
export default function Feature({ image }) {
  return (
    <div className="container mx-auto px-[20px] xl:px-[104px] mt-[104px]">
      <div className="grid grid-cols-12 bg-[#F8F8FA]">
        <div className="px-[20px] xl:px-[80px] py-[20px] xl:py-[56px] col-span-12 xl:col-span-5">
          <h4 className="font-bold text-[32px]">
            Zency. <span className="text-[#848484]">Latest Project.</span>
          </h4>
          <div className=" text-[16px] xl:text-[20px] leading-[24px] xl:leading-[32px] text-[#848484]">
            <p className="pt-[24px]">
              Zency is a credit card company founded by people who were tired of
              bureaucracy in the fintech. We are proud of having transformed the
              great idea into a perfect digital product.
            </p>
            <ul className="text-black pt-[24px]">
              <li className="before:content-['•'] before:mr-4">Ideation </li>
              <li className="before:content-['•'] before:mr-4"> Branding</li>
              <li className="before:content-['•'] before:mr-4"> Design</li>
              <li className="before:content-['•'] before:mr-4">
                Web animation
              </li>
              <li className="before:content-['•'] before:mr-4"> Videography</li>
            </ul>
            <div className="mt-[48px]">
              <a
                href="#"
                className=" text-[#F44D44] after:content-['→'] after:ml-6"
              >
                View More
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-12 xl:col-span-7">
          <Image
            alt="Image"
            src={image}
            layout="responsive"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
