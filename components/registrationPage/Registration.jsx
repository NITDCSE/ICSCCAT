import { rules } from "./data";
import { dates } from "./data";

import Fees from "./Fees";
//import ImportantDates from "./importantDates";

export default function Submissions() {
  return (
    <>
      <div>

        <div className="container mx-auto px-12 sm:px-6 py-4">
          <a class="font-medium text-blue-600 hover:underline" href="https://forms.gle/tdZC8Eoohg739cGCA" target="_blank">
            <h2 className="text-4xl font-bold my-8 text-center sm:text-left">Registration Form</h2>
            <i class="fa fa-file-text-o" aria-hidden="true"></i>
          </a>
        </div>

        <Fees />
        <br />
      </div>
    </>
  );
}