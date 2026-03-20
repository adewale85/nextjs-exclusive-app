import { EhanceYourMusicExperienceData, type EhanceItem } from "@/constants/EhanceYour";
import Image from "next/image";
import Link from "next/link";


const EhanceYourMusicExperience = () => {
  return (
    <section className="">
      <div className="my-5 ">
        <div className="md:w-[1170px] w-full md:h-[500px] h-[700px] md:px-0 px-5 bg-black lg:p-12  mt-16 flex md:flex-row flex-col gap-20 items-center justify-center">

          <div>
            <div className="text-start">
              <button className="font-semibold md:text-[1rem] text-12 text-[#00FF66]">
                Categories
              </button>

              <h1 className="md:w-[443px] w-[300px] h-[120px] text-start text-[#FAFAFA] md:text-[48px] text-4xl font-semibold my-5 md:leading-14 leading-12">
                Enhance Your Music Experience
              </h1>
            </div>

            <div className="flex gap-6">
              {EhanceYourMusicExperienceData.map((item: EhanceItem) => (
                <section
                  key={item.id}
                  className="bg-white size-[65px] rounded-full flex items-center justify-center"
                >
                  <div className="flex flex-col items-center justify-center">
                    <div className="font-poppins font-semibold text-[22px] leading-5">{item.title}</div>
                    <div className="font-poppins font-normal text-[11px] leading-[18px]">{item.subTitle}</div>
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-8 text-start">
              <Link href="/EveryProduct">
                <button className="px-12 py-3 bg-[#00FF66] font-semibold text-black rounded-sm">
                  Buy Now!
                </button>
              </Link>
            </div>
          </div>

          <div>
            <Image src="/images/Speaker.svg" alt="Speaker" width={300} height={300} className="object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default EhanceYourMusicExperience;