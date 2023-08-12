import React from 'react'
import Image from "next/image";
import ProgressBar from "@ramonak/react-progress-bar";

function HeadBazarProject() {
    const market = {
        name: "مبلمان راحتی",

        title: "پروژه ساختمانی الماس یزدانشاه",
        loca: "تهران، بلوار میرداماد",
        category: "،درکوراسیون داخلی ،مبلمان",
        ProductID: " SDK123",
        descrption:
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
    };

  return (
    <div className='flex justify-between align-center flex-grow my-[100px]
     bg-white 
     shadow-md
     py-3
     px-[18px]
     rounded-xl
    '>
        <div className=" flex flex-row">
            <div className="">
                  <Image
                      src="/img/submelk/home2.png"
                      width="130"
                      height="103"
                      className='rounded-lg'
                  />
            </div>
              <div className="flex justify-start items-start flex-col ms-10  ">
                <div>
                      <span className="text-base text-blue900 font-bold mb-2">{market.title}</span>
                      <div className="flex items-center text-sm text-blue900 gap-1 my-3">
                          <Image
                              src="/img/submelk/location.svg"
                              width="20"
                              height="20"
                          />
                          {market.loca}

                    </div>

                </div>
               
                <div className="flex items-center justify-between text-xs font-medium">
                    <div className='me-4'>پیشرفت پروژه</div>
                    <div className="w-[153px]">
                        <ProgressBar
                            height={6}
                            bgColor="#005BEA"
                            baseBgColor="#EAEEF3"
                            labelClassName="hidden"
                            // completed={Progress}
                        />
                    </div>
                </div>
            </div>
        </div>
        <div className="">
              <div className="flex items-center justify-between font-medium">
                  <div className="mx-4">
                      <div className="text-center py-1 px-2 bg-[#F4F4F4] rounded-md mb-4 text-blue900">
                          4000
                      </div>
                      <div className="flex items-center text-sm text-gray900 justify-center gap-1">
                          <Image
                              src="/img/submelk/metraj.svg"
                              width="20"
                              height="20"
                          />
                          متراژ
                      </div>
                  </div>
                  <div className="h-[44px] w-[1px] bg-[#EAEEF3]"></div>
                  <div className="mx-4">
                      <div className="text-center py-1 px-2 bg-[#F4F4F4] rounded-md mb-4 text-blue900">
                          24
                      </div>
                      <div className="flex items-center text-sm text-gray900 justify-center gap-1">
                          <Image
                              src="/img/submelk/vahed.svg"
                              width="20"
                              height="20"
                          />
                          واحد
                      </div>
                  </div>
                 
                  <div className="h-[44px] w-[1px] bg-[#EAEEF3]"></div>
                  <div className="mx-4">
                      <div className="text-center py-1 px-2 bg-[#F4F4F4] rounded-md mb-4 text-sm text-blue900">
                          ۹۹,۰۰۰
                      </div>
                      <div className="flex items-center text-sm text-gray900 justify-center gap-1">
                          <Image
                              src="/img/submelk/sub.svg"
                              width="15"
                              height="15"
                          />
                          صاب
                      </div>
                  </div>
              </div>
        </div>

    </div>
  )
}

export default HeadBazarProject
