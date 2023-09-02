import { fees } from "./data";
export default function Fees() {
  return (
    <div className="container mx-auto px-6 py-4">
      <h2 className="text-4xl font-bold my-4 mb-8">FEES</h2>
      <div className="flex gap-x-12 justify-center my-4 mb-8">
        <span className="uppercase font-semibold">Indians</span>
        <span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
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
              className="flex flex-col p-6 mx-auto min-w-[20rem] text-center text-gray-900 bg-primary90 rounded-xl border border-gray-100 shadow hover:shadow-md hover:scale-[1.03] transition-[shadow,transform]"
            >
              <h3 className="mb-4 text-2xl font-semibold">{card.category}</h3>
              {card.allowance.map(function (allowance, index) {
                return (
                  <div
                    key={index}
                    className="flex justify-center items-baseline my-8"
                  >
                    <span className="mr-2 text-5xl font-extrabold">
                      {allowance.category}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">
                      {allowance.national}
                    </span>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
