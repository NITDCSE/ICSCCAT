import { rules } from "./data";
import { dates } from "./data";
import indian_flag from 'assets/indian.png'
import regis_from from 'assets/form.png'
import Image from "next/image";

import Fees from "./Fees";
import FeeTable from "./FeeTable";

//import ImportantDates from "./importantDates";

export default function Submissions() {
  return (
    <>
      <div>

        <div className="container mx-auto px-12 sm:px-6 py-4">

        <h4 className="text-2xl font-bold mt-8 text-center sm:text-left text-red-600">Registration Procedure:</h4><br />
        <ol class="list-decimal list-inside">
          <li>Pay the fee using the <a class="font-medium text-blue-600 hover:underline" href="https://eazypay.icicibank.com/eazypayLink?P1=yyWoH6a5jVOW9AfoZEXS9w==" target="_blank"> link</a> and take snapshot of payment details.</li>
          
          <li>Fill the <a class="font-medium text-blue-600 hover:underline" href="https://forms.gle/kp8UDxa5HCMfjY7j7" target="_blank">registration form
          </a> (snapshot will be required in the form).
          <li>payment for accomodation <a class="font-medium text-blue-600 hover:underline" href="https://eazypay.icicibank.com/eazypayLink?P1=yyWoH6a5jVOW9AfoZEXS9w==" target="_blank"> link</a> and take snapshot of payment details.</li>
          <li>Fill the <a class="font-medium text-blue-600 hover:underline" href="https://forms.gle/tWKJ1thddXFcJqxt7" target="_blank">Accommodation Registration Form
          </a> (snapshot will be required in the form).</li>
          <li>**Accommodation will be provided inside the institute campus to the registered participants on FCFS at the nominal rate of Rs 500 per day per person on a sharing basis. Each participant needs to register for accommodation by 16th July 2024. Click here to reserve your seat.</li>
          </li>
        </ol>

          {/* <a class="font-medium text-blue-600 hover:underline" href="https://forms.gle/tdZC8Eoohg739cGCA" target="_blank">
          <div className="flex items-center space-x-4">
            <h2 className="text-4xl font-bold my-8 text-center sm:text-left">Registration Form</h2>
            <Image src={regis_from} height={48} width={48}/>
            </div>
          </a> */}
        </div>

        <FeeTable/>
        <br />
        <br />
      </div>
    </>
  );
}