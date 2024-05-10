import indian_flag from 'assets/indian.png'
import regis_from from 'assets/form.png'
import Image from "next/image";

export default function FeeTable(){

    return(
        <div>
                   <div className="container mx-auto px-12 sm:px-6 py-4 bg-indigo-200">
          
          <div className="flex items-center space-x-4">
          <h2 className="text-2xl font-bold my-8"> Registration Fee for Indian Delegates </h2>
          <Image src={indian_flag} height={16} width={32}/>
          </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 ">
              </th>
              <th colSpan={2} scope="col" className="text-xl font-black text-gray-900 text-center px-6 py-5">
                Early Bird Registration <br />
                <span className="text-red-500">(02-12 July 2024)</span>
              </th>
              <th colSpan={2} scope="col" className="text-xl font-black text-gray-900 text-center px-6 py-5">
                Regular Registration  <br />
                <span className="text-red-500">(After 12 July 2024)</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200 ">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900  dark:text-white ">
              </th>
              <td className="text-xl font-black text-blue-700 px-6 py-4">
                IEEE Members
              </td>
              <td className="text-xl font-black text-blue-700 px-6 py-4 bg-gray-200 ">
                Non-IEEE Members
              </td>
              <td className="text-xl font-black text-blue-700 px-6 py-4">
                IEEE Members
              </td>
              <td className="text-xl font-black text-blue-700 px-6 py-4 bg-gray-200 ">
                Non-IEEE Members
              </td>
            </tr>
            <tr className="border-b border-gray-200 ">
              <th scope="row" className="text-base font-black text-gray-900 px-6 py-4 font-medium text-gray-900  dark:text-white ">
                Student (UG/ PG/ PhD)
              </th>
              <td className="text-base font-black text-gray-900 px-6 py-4">
                ₹ 5000
              </td>
              <td className="text-base font-black text-gray-900 px-6 py-4 bg-gray-200 ">
                ₹ 7200
              </td>
              <td className="text-base font-black text-gray-900 px-6 py-4">
                ₹ 6500
              </td>
              <td className="text-base font-black text-gray-900 px-6 py-4 bg-gray-200 ">
                ₹ 9000
              </td>
            </tr>
            <tr className="border-b border-gray-200 ">
              <th scope="row" className="text-base font-black text-gray-900 px-6 py-4 font-medium text-gray-900  dark:text-white ">
                Academician/ Industrial Professionals
              </th>
              <td className="text-base font-black text-gray-900 px-6 py-4">
                ₹ 7000
              </td>
              <td className="text-base font-black text-gray-900 px-6 py-4 bg-gray-200 ">
                ₹ 8400
              </td>
              <td className="text-base font-black text-gray-900 px-6 py-4">
                ₹ 8500
              </td>
              <td className="text-base font-black text-gray-900 px-6 py-4 bg-gray-200 ">
                ₹ 10,000
              </td>
            </tr>
            <tr className="border-b border-gray-200 ">
              <th scope="row" className="text-base font-black text-gray-900 px-6 py-4 font-medium text-gray-900  dark:text-white ">
                Student Attendees
              </th>
              <td className="text-base font-black text-gray-900 px-6 py-4">
                ₹ 2500
              </td>
              <td className="text-base font-black text-gray-900 px-6 py-4 bg-gray-200 ">
                ₹ 3500
              </td>
              <td className="text-base font-black text-gray-900 px-6 py-4">
                ₹ 3500
              </td>
              <td className="text-base font-black text-gray-900 px-6 py-4 bg-gray-200 ">
                ₹ 4500
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-base font-black text-gray-900 px-6 py-4 font-medium text-gray-900  dark:text-white ">
                Professional Attendees
              </th>
              <td className="text-base font-black text-gray-900 px-6 py-4">
                ₹ 3000
              </td>
              <td className="text-base font-black text-gray-900 px-6 py-4 bg-gray-200 ">
                ₹ 4000
              </td>
              <td className="text-base font-black text-gray-900 px-6 py-4">
                ₹ 4000
              </td>
              <td className="text-base font-black text-gray-900 px-6 py-4 bg-gray-200 ">
                ₹ 5000
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <br /> <br />

      <div className="container mx-auto px-12 sm:px-6 py-4 bg-indigo-300">
        <h2 className="text-2xl font-bold my-8">
          Registration Fee for International Delegates
        </h2>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 ">
              </th>
              <th colSpan={2} scope="col" className="text-xl font-black text-gray-900 text-center px-6 py-5">
                Early Bird Registration <br />
                <span className="text-red-500">(02-12 July 2024)</span>
              </th>
              <th colSpan={2} scope="col" className="text-xl font-black text-gray-900 text-center px-6 py-5">
                Regular Registration  <br />
                <span className="text-red-500">(After 12 July 2024)</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200 ">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900  dark:text-white ">
              </th>
              <td className="text-xl font-black text-blue-700 px-6 py-4">
                IEEE Members
              </td>
              <td className="text-xl font-black text-blue-700 px-6 py-4 bg-gray-200 ">
                Non-IEEE Members
              </td>
              <td className="text-xl font-black text-blue-700 px-6 py-4">
                IEEE Members
              </td>
              <td className="text-xl font-black text-blue-700 px-6 py-4 bg-gray-200 ">
                Non-IEEE Members
              </td>
            </tr>
            <tr className="border-b border-gray-200 ">
              <th scope="row" className="text-base font-black text-gray-900 px-6 py-4 font-medium text-gray-900  dark:text-white ">
                Student (UG/ PG/ PhD)
              </th>
              <td className="text-base font-black text-gray-900 px-6 py-4">
                $ 200
              </td>
              <td className="text-base font-black text-gray-900 px-6 py-4 bg-gray-200 ">
                $ 250
              </td>
              <td className="text-base font-black text-gray-900 px-6 py-4">
                $ 230
              </td>
              <td className="text-base font-black text-gray-900 px-6 py-4 bg-gray-200 ">
                $ 280
              </td>
            </tr>
            <tr className="border-b border-gray-200 ">
              <th scope="row" className="text-base font-black text-gray-900 px-6 py-4 font-medium text-gray-900  dark:text-white ">
                Academician/ Industrial Professionals
              </th>
              <td className="text-base font-black text-gray-900 px-6 py-4">
                $ 300
              </td>
              <td className="text-base font-black text-gray-900 px-6 py-4 bg-gray-200 ">
                $ 350
              </td>
              <td className="text-base font-black text-gray-900 px-6 py-4">
                $ 330
              </td>
              <td className="text-base font-black text-gray-900 px-6 py-4 bg-gray-200 ">
                $ 380
              </td>
            </tr>
            <tr className="border-b border-gray-200 ">
              <th scope="row" className="text-base font-black text-gray-900 px-6 py-4 font-medium text-gray-900  dark:text-white ">
                Student Attendees
              </th>
              <td className="text-base font-black text-gray-900 px-6 py-4">
                $ 100
              </td>
              <td className="text-base font-black text-gray-900 px-6 py-4 bg-gray-200 ">
                $ 150
              </td>
              <td className="text-base font-black text-gray-900 px-6 py-4">
                $ 120
              </td>
              <td className="text-base font-black text-gray-900 px-6 py-4 bg-gray-200 ">
                $ 170
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-base font-black text-gray-900 px-6 py-4 font-medium text-gray-900  dark:text-white ">
                Professional Attendees
              </th>
              <td className="text-base font-black text-gray-900 px-6 py-4">
                $ 150
              </td>
              <td className="text-base font-black text-gray-900 px-6 py-4 bg-gray-200 ">
                $ 200
              </td>
              <td className="text-base font-black text-gray-900 px-6 py-4">
                $ 170
              </td>
              <td className="text-base font-black text-gray-900 px-6 py-4 bg-gray-200 ">
                $ 220 
              </td>
            </tr>
          </tbody>
        </table>
      </div>
        </div>
    );
};