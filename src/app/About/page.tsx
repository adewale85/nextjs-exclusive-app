"use client";
import { AboutInfopropsData } from "@/constants/AboutInfo";
import { NewArrivalData } from "@/constants/Arrival";
import { PeopleSectionData } from "@/constants/People'sSection";
import Image from "next/image";
import Link from "next/link";

function About() {
  return (
    <main className="Wrapper py-12 px-4 lg:px-0">
      <div>
        <div className="lg:px-0 px-12 flex gap-3">
          <Link href={"/"}>
            <p className="font-poppins font-normal text-sm leading-5 text-[#818181]">
              Home /{" "}
            </p>
          </Link>
          <Link href={"/about"}>
            <p className="font-poppins font-normal text-sm leading-5">About </p>
          </Link>
        </div>
        <div className="flex flex-col-reverse lg:flex-row items-center gap-6">
          <div className="w-full lg:w-[525px]">
            <h2 className="font-inter font-semibold text-[54px] leading-16 tracking-[6%] pb-6">
              Our Story
            </h2>

            <p className="font-poppins font-normal text-[16px] leading-6  py-6">
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.
            </p>

            <p className="font-poppins font-normal text-[16px] leading-6">
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
          <div>
            <Image
              src="/images/Side Image (1).svg"
              alt=""
              width={80}
              height={80}
              className="w-[750px]"
            />
          </div>
        </div>
      </div>

      <div className="">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 py-12 ">
          {AboutInfopropsData.map(({ id, title, subTitle, image }) => (
            <div
              key={id}
              className="w-full lg:w-[270px] h-[230px] flex items-center justify-center rounded-sm border-[#0000004D] border shadow-sm"
            >
              <div className="flex flex-col items-center justify-center text-center">
                <Image src={image} alt="" width={80} height={80} className="" />
                <p className="font-inter font-bold text-[32px]">{title}</p>
                <p className="font-poppins text-[16px]">{subTitle}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-6">
          {PeopleSectionData.map(
            ({
              id,
              title,
              subTitle,
              image,
              twitterImg,
              instagramImg,
              linkdinImg,
            }) => (
              <div
                key={id}
                className="w-full lg:w-[370px] bg-[#f5F5F5] rounded-sm"
              >
                <div
                  className="
       flex items-center justify-center pt-8.5"
                >
                  <Image
                    src={image}
                    alt=""
                    width={200}
                    height={200}
                    className=""
                  />
                </div>
                <div className="space-y-2 p-5">
                  <h2 className="font-inter font-medium text-[32px] leading-7.5 tracking-[4%]">
                    {title}
                  </h2>
                  <p className="font-poppins font-normal text-[16px] leading-6">
                    {subTitle}
                  </p>
                  <div className="flex gap-3 text-red-400">
                    <Image src={twitterImg} alt="" width={32} height={32} />
                    <Image src={instagramImg} alt="" width={32} height={32} />
                    <Image src={linkdinImg} alt="" width={32} height={32} />
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
      <div className="py-12 flex Wrapper gap-12 items-center justify-center">
        <div className=" size-6 rounded-full bg-[#818181]   opacity-30"></div>
        <div className=" size-6 rounded-full bg-[#818181]   opacity-30"></div>
        <div className="bg-[#818181]  size-8 rounded-full flex items-center justify-center">
          <div className="bg-white size-7 rounded-full flex items-center justify-center">
            <div className=" size-6 rounded-full bg-[#ff0e0e] "></div>
          </div>
        </div>
        <div className=" size-6 rounded-full bg-[#818181]  opacity-30"></div>
        <div className=" size-6 rounded-full bg-[#818181]  opacity-30"></div>
      </div>

      <div className="py-12 flex flex-col lg:flex-row gap-22 items-center justify-center">
        {NewArrivalData.map(({ id, image, title, subTitle }) => (
          <section
            key={id}
            className=" flex flex-col items-center justify-center"
          >
            <div>
              <Image
                src={image}
                alt="Delivery-icon"
                width={80}
                height={80}
                className="size-20 pb-5"
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="">
                <h3 className="font-poppins font-semibold text-[20px] leading-7 text-black">
                  {title}
                </h3>
              </div>
              <div>
                <h4 className="font-poppins font-normal text-[14px] leading-5 text-black">
                  {subTitle}
                </h4>
              </div>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}

export default About;
