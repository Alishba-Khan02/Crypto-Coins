

"use client";

import { useState, useEffect } from "react";

export default function Home(){
  const API_KEY = "193be1cab0cbcf2ddc561bdb004291e2";
  const [data , setData] = useState<any>(null);

  useEffect(() => {
    fetch(`http://api.coinlayer.com/live?access_key=${API_KEY}`)
      .then((response) => response.json())
      .then((jsonConverted) => {
        setData(jsonConverted);
      });
  }, []);

      
      return(
 <section id="new-features" className="py-8 bg-crypto sm:py-10 lg:py-16">
  <div className="rotate-scale-up px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div className="text-center">
      <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl">
        CRYPTOCURRENCY MARKET! </h2>
      <h2 className="mt-4 text-xl  leading-7 text-gray-900 sm:mt-8">
        Enhance your workflow with advanced coins</h2>
        
    
    </div>
    <div
      className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
      
      <div className="md:p-8 lg:p-14 flex flex-col justify-center items-center">
        <div className="w-14 h-14 rounded-full bg-orange-600 flex justify-center items-center">
        
        </div>
        <h3 className="mt-12 text-xl font-bold text-gray-900">BitCoin</h3>
      BTC: {data?.rates?.BTC} 
      <p className="mt-5 text-base text-xl text-gray-900"> </p>
      </div>

      
      <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 flex flex-col justify-center items-center">
        <div className="w-14 h-14 rounded-full bg-amber-500 flex justify-center items-center">
          <i className="fa-solid fa-truck-fast text-3xl text-gray-900"></i>
        </div>
        <h3 className="mt-12 text-xl font-bold text-gray-900">Binance Coin</h3>
        <p className="mt-5 text-base text-xl text-gray-900">BNB: {data?.rates?.BNB}
          </p>
      </div>

      
      <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 flex flex-col justify-center items-center">
        <div className="w-14 h-14 rounded-full bg-stone-500 flex justify-center items-center">
          <i className="fa-solid fa-shield text-3xl text-gray-900"></i>
        </div>
        <h3 className="mt-12 text-xl font-bold text-gray-900">Ethereum</h3>
        <p className="mt-5 text-base text-xl text-gray-900">ETH: {data?.rates?.ETH}
         </p>
      </div>

     
      <div className="md:p-8 lg:p-14 md:border-t md:border-gray-200 flex flex-col justify-center items-center">
        <div className="w-14 h-14 rounded-full bg-lime-400 flex justify-center items-center">
          <i className="fa-solid fa-cloud text-3xl text-gray-900"></i>
        </div>
        <h3 className="mt-12 text-xl font-bold text-gray-900">Bitcoin Cash</h3>
        <p className="mt-5 text-base text-xl  text-gray-900">BCH: {data?.rates?.BCH}</p>
      </div>

     
      <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t flex flex-col justify-center items-center">
        <div className="w-14 h-14 rounded-full bg-cyan-600 flex justify-center items-center">
          <i className="fa-solid fa-pen-nib text-3xl text-gray-900"></i>
        </div>
        <h3 className="mt-12 text-xl font-bold text-gray-900">Solana </h3>
        <p className="mt-5 text-base text-xl  text-gray-900">SOL: {data?.rates?.SOL}</p>
      </div>

     
      <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t flex flex-col justify-center items-center">
        <div className="w-14 h-14 rounded-full bg-slate-400  flex justify-center items-center">
        
          <i className="fa-solid fa-bolt text-3xl text-gray-900"></i>
        </div>
        <h3 className="mt-12 text-xl font-bold text-gray-900">Avalanche
        </h3>
        <p className="mt-5 text-base  text-xl text-gray-900">AVAX: {data?.rates?.AVAX}</p>
      </div>
    </div>
  </div>
</section> 
);
}

