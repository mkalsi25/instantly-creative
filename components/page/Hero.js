import React from "react";

import Image from "next/image";
export default function Hero({ title, description, image }) {
  return (
    <div className="container mx-auto px-[20px] xl:px-[104px]">
      <div className="bg-[#F8F8FA] grid grid-cols-1 lg:grid-cols-2 items-center justify-items-stretch">
        <div className="p-4 xl:p-0">
          {title && (
            <h2 className="text-[42px] xl:text-[52px] font-bold leading-[52px] xl:leading-[64px] md:max-w-[480px] mx-0 lg:mx-auto">
              {title}
            </h2>
          )}
          {description && (
            <p className="md:max-w-[480px] mx-0 lg:mx-auto text-[16px] xl:text-[20px] leading-[24px] xl:leading-[32px] pt-[24px] pb-[40px] text-[#848484]">
              {description}
            </p>
          )}
          <div className="w-full lg:max-w-[480px] mx-0 lg:mx-auto">
            <button className="bg-[#F44D44] text-white px-[27px] py-[18px] rounded-[16px] text-[16px] font-medium outline-none focus:outline-none">
              Explore More
            </button>
          </div>
        </div>
        <div className="justify-self-end">
          {image && <Image alt="Hero Background Picture" src={image} />}
        </div>
      </div>
    </div>
  );
}
