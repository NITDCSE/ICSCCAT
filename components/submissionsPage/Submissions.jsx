import { rules } from "./data";
import { dates } from "./data";

import Fees from "./Fees";
//import ImportantDates from "./importantDates";

export default function Submissions() {
  return (
    <>
      <div>
        <ImportantDates />
        <div className="container mx-auto px-12 sm:px-6 py-4">
          <h2 className="text-4xl font-bold my-8 text-center sm:text-left">Submission Rules</h2>
          <section>
            <ul>
              {rules.map(function (rule, idx) {
                return (
                  <li className="list-disc leading-6 sm:leading-8" key={idx}>
                    {rule}
                  </li>
                );
              })}
              <li className="list-disc leading-6 sm:leading-8">Submission should strictly follow recommended IEEE conference template, which can be found  
              <a class="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="https://www.ieee.org/conferences/publishing/templates.html"> here.</a> </li>
              <li className="list-disc leading-6 sm:leading-8">
                Authors should submit their original unpublished work in PDF format 
                <a class="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="https://cmt3.research.microsoft.com/IC2SDT2024/"> here.</a>  </li>
              <li className="list-disc leading-6 sm:leading-8"> 
                <b>IEEE PDF eXpress conference ID: 62152</b></li>
              {/* <li className="list-disc leading-6 sm:leading-8">
                Paper Submission: <span class="text-red-400"> Link will be updated soon</span> <br />
                Accepted papers will be submitted for inclusion into IEEE Xplore subject to meeting IEEE Xplore’s scope and quality requirements
              </li> */}
              <li className="list-disc leading-6 sm:leading-8">
                Registration Form: 
                {/* <span class="text-red-400">Link will be updated soon</span> <br /> */}
                <a class="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="https://forms.gle/tdZC8Eoohg739cGCA"> here.</a>
              </li>
            </ul>
          </section>
        </div>
        <Fees />
      </div>

      {/* Add Submission */}
      {/*  https://www.edas.info/login.php?rurl=aHR0cHM6Ly93d3cuZWRhcy5pbmZvLw== */}
    </>
  );
}

function ImportantDates() {
  return (
    <>
      <div className="flex flex-col container mx-auto px-6 py-4 mb-8">
        <h3 className="text-2xl font-bold text-center md:text-left py-12">
          Important Dates
        </h3>
        <ol className="items-start sm:flex">
          {dates.map(function (date, idx) {
            return (
              <li key={idx} className="relative mb-6 sm:mb-0">
                <div className="flex items-center">
                  <div className="z-10 flex items-center justify-center w-6 h-6 bg-primary20 rounded-full ring-0 ring-white sm:ring-8 shrink-0">
                    <svg
                      aria-hidden="true"
                      className="w-3 h-3 text-primaryRegular"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {" "}
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />{" "}
                    </svg>
                  </div>
                  <div className="hidden sm:flex w-full bg-gray-200 h-0.5 "></div>
                </div>
                <div className="mt-3 sm:pr-8">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {date.category}
                  </h3>
                  <div className="flex gap-x-2 flex-wrap ">
                    {date.previousDate && (
                      <time className="block mb-2 text-sm leading-none text-primaryRegular font-bold line-through">
                        {date.previousDate}
                      </time>
                    )}
                    <time className="block mb-2 text-sm leading-none text-primaryRegular font-bold ">
                      {date.date}
                    </time>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </>
  );
}

