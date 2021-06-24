import React from "react";

export default function Highlight() {
  return (
    <div className="container mx-auto px-[20px] xl:px-[104px] mt-[104px]">
      <div className="bg-[#F8F8FA] p-10 xl:p-[80px] relative overflow-hidden">
        <div className="top-0 left-0 transform -translate-x-6 -translate-y-6 absolute rounded-full bg-[#FDD3D1] h-[280px] w-[280px] filter blur-[120px]" />
        <div className="right-0 bottom-0 transform translate-x-6 translate-y-6 absolute rounded-full bg-[#FDE3D1] h-[280px] w-[280px] filter blur-[120px]" />
        <div className="relative z-20">
          <h4 className="font-bold text-[48px] max-w-3xl mx-auto text-center">
            Turn Your Idea Into a Successful Product!
          </h4>
          <div className=" text-[16px] xl:text-[20px] leading-[24px] xl:leading-[32px] text-[#848484] text-center">
            <p className="pt-[24px] max-w-xl mx-auto">
              We are a full-service software development company that brings
              tech ideas to life, from concept to market.
            </p>
            <button className="text-center mt-[64px] bg-[#F44D44] text-white px-[34px] py-[16px] rounded-[18px] text-[18px] font-medium outline-none focus:outline-none">
              Estimated Cost
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
