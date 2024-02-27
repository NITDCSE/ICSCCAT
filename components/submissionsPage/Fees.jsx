'use client'

import { useState } from "react";
import { fees } from "./data";

export default function Fees() {
  const [price, setPrice] = useState(false);
  return (

  <div>
       
    <div className="container mx-auto px-6 py-4">
      <h2 className="text-4xl font-semibold sm:font-bold text-center sm:text-left my-4 mb-8 ">REGISTRATION FEES</h2>
      <div className="flex gap-x-12 justify-center my-4 mb-8">
        <span className="uppercase font-semibold">Indians</span>
        <span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" checked={price} onChange={()=>setPrice(!price)} className="sr-only peer" onchan />
            <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primaryLight" />
          </label>
        </span>
        <span className="uppercase font-semibold">International</span>
      </div>
      <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
        {fees.map(function (card, idx) {
          return (
            <div
              key={idx}
              className="flex flex-col p-6 mx-auto min-w-[20rem] text-center text-gray-900 bg-white rounded-xl border border-gray-200 shadow hover:shadow-md hover:scale-[1.03] transition-[shadow,transform]"
            >
              <h3 className="mb-4 text-2xl font-semibold">{card.category}</h3>
              {card.allowance.map(function (allowance, index) {
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center my-6"
                  >
                    <span className="mb-2 text-2xl font-extrabold text-primary80">
                      {allowance.category}
                    </span>
                    <span className="text-gray-700 font-medium">
                      {price ? allowance.international : allowance.national}
                    </span>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  </div>
  );
}
