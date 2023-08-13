import React from "react";
import IRT from "../IRT";

export default function Modalpurchaseoffer() {
   
    const [showModal, setShowModal] = React.useState(false);
    const offerText = {

        title: "  ثبت نهایی پیشنهاد خرید",
        sub: " تعداد صاب   ",
        pricesub: " قیمت صاب پیشنهادی ",
        pricesub2:" 1۰,۵۰۰,000 ",
        totalprice: "  جمع قیمت خرید",
        walletprice: "موجودی کیف پول ",
        price: "۴,350,000,000",
        price2:'65,000,000'
        obligatio: 'وجه التزام خرید صاب',
        price0: "0",
        payable: " مبلغ قابل پرداخت "
    };
    return (
        <>
            <button
                className="bg-pink-500 text-white bg-blue800 active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(true)}
            >
                Open regular modal
            </button>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl min-w-[600px]">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start items-center justify-start p-5 rounded-t">
                                    <button
                                        className="p-1  bg-transparent border-0 text-black  float-left text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-red  h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                    <h3 className="text-base font-bold text-blue900">
                                        {offerText.title}
                                    </h3>

                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto w-full">
                                    <div className="flex flex-col  bg-sky rounded-md  py-[18px]">
                                        <div className="grid grid-cols-12 gap-2 ">
                                            <div className="col-span-6">
                                                <div className="flex flex-col items-center justify-around relative
                                            after:absolute after:left-0 after:contents-[' ']  after:bottom-0  after:h-[51px] after:w-[1px] after:bg-gray700
                                            ">
                                                    <span className="text-blue900 font-bold text-base">56</span>
                                                    <span className="text-gray900 text-base font-medium mt-4"> {offerText.sub}</span>
                                                </div>
                                            </div>

                                            <div className="col-span-6">
                                                <div className="flex flex-col items-center justify-around">
                                                    <IRT amount={offerText.pricesub2} className2={"text-blue900 font-bold text-base"} />
                                                    <span className="text-gray900 text-base font-medium pt-4">{offerText.pricesub} </span>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="">
                                            <div className="">
                                                <span className=""></span>
                                                <IRT/>
                                            </div>
                                        </div>
                                    </div>

                                   
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}