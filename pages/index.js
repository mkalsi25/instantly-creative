import Layout from "../components/Layout";
import HeroBg from "../pages/images/Header.png";
import Input from "../components/form/Input";
import Hero from "../components/page/Hero";
import image from "../pages/images/features.png";
import TwoSection from "../components/page/TwoSection";
import Highlight from "../components/page/Highlight";
import Feature from "../components/page/Feature";
import { FaLaravel, FaReact, FaVuejs } from "react-icons/fa";
export default function Home() {
  return (
    <Layout
      url="/"
      title="Home"
      description="We are a full-service software development company that brings tech ideas to life, from concept to market."
    >
      <Hero
        image={HeroBg}
        title="Custom Software to Transform Your Business"
        description="We are a full-service software development company that brings tech ideas to life, from concept to market."
      />
      <Services />
      <Expertise />
      <Feature image={image} />
      <CaseStudy />
      <Highlight />
      <Contact />
    </Layout>
  );
}

const Services = () => {
  return (
    <div className="container mx-auto px-[20px] xl:px-[184px] pt-[175px]">
      <h3 className="text-[48px] font-bold text-center">Our Services</h3>
      <p className="text-[16px] xl:text-[20px] pt-[24px] text-[#848484] leading-[24px] xl:leading-[32px] w-11/12 md:max-w-[480px] mx-auto text-center">
        We are a full-service software development company that brings tech
        ideas to life, from concept to market.
      </p>
      <TwoSection>
        <h4 className="font-bold text-[32px]">Mobile Apps</h4>
        <div className=" text-[16px] xl:text-[20px] leading-[24px] xl:leading-[32px] text-[#848484] w-11/12 2xl:max-w-[480px]">
          <p className="pt-[24px]">
            We are a full-service software development company that brings tech
            ideas to life, from concept to market.
          </p>
          <p className="pt-[24px]">
            This effectively reduces cost and time taken to build apps by more
            than 40% in many cases, without compromising speed or quality.
          </p>
        </div>
      </TwoSection>
      <TwoSection reverse>
        <h4 className="font-bold text-[32px]">Web Development</h4>
        <div className=" text-[16px] xl:text-[20px] leading-[24px] xl:leading-[32px] text-[#848484] w-11/12 2xl:max-w-[480px]">
          <p className="pt-[24px]">
            We are a full-service software development company that brings tech
            ideas to life, from concept to market.
          </p>
          <p className="pt-[24px]">
            This effectively reduces cost and time taken to build apps by more
            than 40% in many cases, without compromising speed or quality.
          </p>
        </div>
      </TwoSection>
      <TwoSection>
        <h4 className="font-bold text-[32px]">Design</h4>
        <div className=" text-[16px] xl:text-[20px] leading-[24px] xl:leading-[32px] text-[#848484] w-11/12 2xl:max-w-[480px]">
          <p className="pt-[24px]">
            We are a full-service software development company that brings tech
            ideas to life, from concept to market.
          </p>
          <p className="pt-[24px]">
            This effectively reduces cost and time taken to build apps by more
            than 40% in many cases, without compromising speed or quality.
          </p>
        </div>
      </TwoSection>
    </div>
  );
};

const Expertise = () => {
  return (
    <div className="container mx-auto px-[20px] xl:px-[104px] mt-[104px]">
      <div className="p-2 xl:p-[80px] border-t border-[#DADADA]">
        <h3 className="text-[48px] text-center font-bold">We are expert in</h3>
        <div className="pt-[70px] max-w-4xl mx-auto grid grid-col-1 xl:grid-cols-3 gap-10">
          <div className="flex space-x-4 justify-center items-center text-[#00D8FF] text-[48px] px-[45px] py-[36px] rounded-3xl border hover:border-transparent hover:shadow-xl transition duration-500 ease-in-out">
            <FaReact />
            <span className="text-[32px]">React</span>
          </div>
          <div className="text-[48px] flex justify-center space-x-4 items-center text-[#fa7629] px-[45px] py-[36px] rounded-3xl border hover:border-transparent hover:shadow-xl transition duration-500 ease-in-out">
            <FaLaravel />
            <span className="text-[32px]">Laravel</span>
          </div>
          <div className="text-[48px] flex justify-center space-x-4 items-center text-[#0d5036] px-[45px] py-[36px] rounded-3xl border hover:border-transparent hover:shadow-xl transition duration-500 ease-in-out">
            <FaVuejs />
            <span className="text-[32px]">Vue.js</span>
          </div>
          <div className="flex space-x-4 justify-center items-center text-[#00D8FF] text-[48px] px-[45px] py-[36px] rounded-3xl border hover:border-transparent hover:shadow-xl transition duration-500 ease-in-out">
            <FaReact />
            <span className="text-[32px]">React</span>
          </div>
          <div className="text-[48px] flex justify-center space-x-4 items-center text-[#fa7629] px-[45px] py-[36px] rounded-3xl border hover:border-transparent hover:shadow-xl transition duration-500 ease-in-out">
            <FaLaravel />
            <span className="text-[32px]">Laravel</span>
          </div>
          <div className="text-[48px] flex justify-center space-x-4 items-center text-[#0d5036] px-[45px] py-[36px] rounded-3xl border hover:border-transparent hover:shadow-xl transition duration-500 ease-in-out">
            <FaVuejs />
            <span className="text-[32px]">Vue.js</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const CaseStudy = () => {
  return (
    <div className="container mx-auto px-[20px] xl:px-[184px]">
      <TwoSection reverse image={image}>
        <h4 className="font-bold text-[48px] w-11/12 2xl:max-w-[480px]">
          Strive for more. <br /> We'll help.
        </h4>
        <div className=" text-[16px] xl:text-[20px] leading-[24px] xl:leading-[32px] text-[#848484]">
          <p className="pt-[24px]  w-11/12 2xl:max-w-[480px]">
            We are a full-service software development company that brings tech
            ideas to life, from concept to market.
          </p>
          <button className="mt-[64px] bg-[#F44D44] text-white px-[34px] py-[16px] rounded-[18px] text-[18px] font-medium outline-none focus:outline-none">
            Case studies
          </button>
        </div>
      </TwoSection>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="container mx-auto px-[20px] xl:px-[104px] mt-[104px]">
      <div className="grid grid-cols-12 bg-[#F8F8FA]">
        <div className="px-[20px] xl:px-[80px] py-[20px] xl:py-[56px] col-span-12 xl:col-span-5">
          <h4 className="font-bold text-[32px]">Contact Us</h4>
          <div className=" text-[16px] xl:text-[20px] leading-[24px] xl:leading-[32px] text-[#848484]">
            <p className="pt-[24px]">
              Got a project in mind? Fill in the form or send us a{" "}
              <a href="mailto:get@gmail.com" className="text-[#F44D44]">
                direct email
              </a>
              .
            </p>
            <ul className="pt-[24px] text-[16px]">
              <li className="flex space-x-3">
                <strong className="text-black ">Phone:</strong>
                <span className="text-[#F44D44]">+123 (45) 678 91 11</span>
              </li>
              <li className="flex space-x-3">
                <strong className="text-black ">Adress:</strong>
                <span>
                  3047 Masonic Hill Road, Little Rock, AR, Arkansas, UK
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-12 xl:col-span-7 bg-white xl:px-[40px]">
          <h4 className="font-bold text-[32px]">Tell us something</h4>
          <div className="max-w-[480px] grid gap-[40px] py-[48px]">
            <Input
              type="text"
              name="name"
              label="your name"
              placeholder="John Doe"
            />
            <Input
              type="email"
              name="email"
              label="email"
              placeholder="hello@mail.com"
            />
            <Input
              type="text"
              name="name"
              label="message"
              placeholder="your message"
              note="We will get back to you in no time."
            />
            <div>
              <button className="mt-[40px] bg-[#F44D44] text-white px-[60px] py-[16px] rounded-[18px] text-[18px] font-medium outline-none focus:outline-none">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
