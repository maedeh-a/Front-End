import React from 'react'
import IRT from '../IRT';
import Image from "next/image";
function PurchaseOffer() {
    const offerText = {
        name: "مبلمان راحتی",

        title: "  ثبت پیشنهاد خرید",
        numberBuy: " تعداد صاب برای خرید ",
        suggestedPrice: " قیمت صاب پیشنهادی ",
        wallet:"موجودی کیف پول",
        wallet2:"موجودی کیف پول *20",
        price:"۴,350,000,000",
        totalOffer:'سقف کل پیشنهاد',
        price0:"0",
        total:"مبلغ کل پیشنهاد"
    };
    return (
    <div className='bg-white py-8 px-9 shadow-xl rounded-xl'>
        <div className="grid grid-cols-12 gap-2">
            <div className="col-span-2">
                <div className="title-box">
                    <span className="text-blue900 font-bold text-xl">{offerText.title}</span>
                </div>
            </div>
            <div className="col-span-8">
                <div className="content-purchase-offer flex flex-col items-center justify-center">
                    <div className="tabs rounded-lg bg-white200 p-1 my-8">
                            <button className='text-gray900 rounded-[10px] px-4 py-2' >فروش</button>
                            <button className='bg-blue800 text-white rounded-[10px] px-4 py-2' >خرید</button>
                    </div>
                    <form action="">
                        <div className="grid grid-cols-12 gap-20">
                            <div className="col-span-6">
                                <div className="flex flex-col  justify-start w-full">
                                    <label className="relative mb-8 block">
                                        <span className="absolute bg-white text-sm right-3 -top-3 px-2 font-medium text-gray900">
                                                {offerText.numberBuy}
                                        </span>
                                        <input
                                            type="text"
                                            className="border border-[#DEE6EF] rounded-lg w-full  py-[18px] px-8 "
                                        />
                                    </label>
                                    <label className="relative mb-4 block">
                                       
                                        <span className="absolute bg-white text-sm right-3 -top-3 px-2 font-medium text-gray900">
                                                {offerText.suggestedPrice}
                                        </span>
                                        <span className="absolute bg-white text-sm right-3 -top-3  text-red">*</span>
                                       
                                        <input
                                            type="text"
                                            className="border border-[#DEE6EF] rounded-lg w-full  py-[18px] px-8 "
                                        />
                                    </label>
                                    <div className="flex flex-row items-center justify-between bg-white mb-4  border-8 border-white200 rounded-lg py-[10px] px-8 ">
                                        <div className="flex flex-col items-center">

                                            <span className="text-gray900  text-sm font-bold mx-1">{offerText.total}</span>
                                            
                                        </div>

                                        <IRT amount={offerText.price0} className2="text-blue900 font-bold text-sm" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-6">
                                <div className="flex flex-col">
                                    <div className="flex flex-row items-center justify-between bg-white mb-4  border-8 border-white200 rounded-lg py-[10px] px-8 ">
                                        <div className="flex flex-row items-center">
                                                <Image
                                                    src="/img/submelk/wallet.svg"
                                                    width="35"
                                                    height="35"

                                                />
                                                <span className="text-gray900  text-sm font-bold mx-1">{offerText.wallet}</span>
                                        </div>
                                       
                                        <IRT amount={offerText.price} className2="text-blue900 font-bold text-sm"/>
                                    </div>
                                    <div className="flex flex-row items-center justify-between bg-white mb-4  border-8 border-white200 rounded-lg py-[10px] px-8 ">
                                        <div className="flex flex-col items-center">

                                            <span className="text-gray900  text-sm font-bold mx-1">{offerText.totalOffer}</span>
                                            <span className="font-bold text-gray800 text-xs mt-1">{offerText.wallet2}</span>
                                        </div>

                                        <IRT amount={offerText.price} className2="text-blue900 font-bold text-sm" />
                                    </div>
                                    <button

                                        className="bg-[#005BEA] rounded-lg text-white w-full px-[34px] py-[20px]  font-bold"
                                    >
                                        ثبت
                                    </button>
                                </div>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="col-span-2">
                <div></div>
            </div>
        </div>


    </div>
  )
}

export default PurchaseOffer