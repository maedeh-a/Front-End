import React from 'react'
import IRT from '../IRT';
import Image from "next/image";
function PurchaseOffer() {
    const offerText = {
        name: "مبلمان راحتی",

        title: "  ثبت پیشنهاد خرید",
        numberBuy: " تعداد صاب برای خرید *",
        suggestedPrice: " قیمت صاب پیشنهادی *",
        wallet:"موجودی کیف پول",
        price:"۴,350,000,000"
    };
    return (
    <div className='bg-white py-8 px-9 shadow-xl'>
        <div className="grid grid-cols-12 gap-2">
            <div className="col-span-2">
                <div className="title-box">
                    <span className="text-blue900 font-bold text-xl">{offerText.title}</span>
                </div>
            </div>
            <div className="col-span-8">
                <div className="content-purchase-offer">
                    <form action="">
                        <div className="grid grid-cols-12 gap-2">
                            <div className="col-span-6">
                                <div className="flex flex-col  justify-start w-full">
                                    <label className="relative mt-14 block">
                                        <span className="absolute bg-white text-sm right-3 -top-3 px-2 font-medium text-gray900">
                                                {offerText.numberBuy}
                                        </span>
                                        <input
                                            type="text"
                                            className="border border-[#DEE6EF] rounded-lg w-full p-3"
                                        />
                                    </label>
                                    <label className="relative mt-14 block">
                                        <span className="absolute bg-white text-sm right-3 -top-3 px-2 font-medium text-gray900">
                                                {offerText.suggestedPrice}
                                        </span>
                                        <input
                                            type="text"
                                            className="border border-[#DEE6EF] rounded-lg w-full p-3"
                                        />
                                    </label>
                                </div>
                            </div>
                            <div className="col-span-6">
                                <div className="flex flex-col">
                                    <div className="flex flex-row items-center justify-between bg-white  border-8 border-white200 rounded-lg py-[10px] px-8 ">
                                        <div className="flex flex-row">
                                                <Image
                                                    src="/img/submelk/wallet.svg"
                                                    width="20"
                                                    height="20"

                                                />
                                                <span className="text-gray900  text-sm font-bold">{offerText.wallet}</span>
                                        </div>
                                       
                                        <IRT amount={offerText.price} className2="text-blue900 font-bold text-sm"/>
                                    </div>
                                    <button

                                        className="bg-[#005BEA] rounded-lg text-white w-full p-3 mt-4 font-bold"
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