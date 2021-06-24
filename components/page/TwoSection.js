import React from "react";
import Image from "next/image";
export default function TwoSection({ reverse, image, children }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-[80px] pt-[120px]">
      {image ? (
        <div
          className={` ${
            reverse ? "col-start-1 lg:col-start-2 row-start-1" : ""
          }`}
        >
          <Image alt="Image" src={image} />
        </div>
      ) : (
        <div className="bg-[#F8F8FA] h-[520px]"></div>
      )}
      <div
        className={`pt-[10px] ${
          reverse ? "col-start-1 row-start-2 lg:row-start-1" : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
}
