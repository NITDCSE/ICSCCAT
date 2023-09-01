import { cheifPatron } from "@/components/committeesPage/data";
import Image from "next/image";

export default function CheifPatron() {
  return (
    <section className="py-6 bg-primary05">
      <div className="mx-auto container px-6 py-4">
        <h3 className="text-3xl text-primary90 font-bold text-center mb-8">
          CHIEF PATRON
        </h3>
        <div className="grid grid-flow-col min-h-[24rem] auto-cols-fr gap-4 py-2">
          <div className="max-w-sm min-w-sm w-full mx-auto rounded overflow-hidden shadow-md bg-white">
            <div className="px-6 py-4">
              <div className="flex justify-center pb-6">
                <Image
                  alt="profile image"
                  src={cheifPatron.photo}
                  className="w-52 rounded-full aspect-square object-cover"
                />
              </div>
              <div className="font-bold text-xl mb-2 text-primaryDark text-center">
                {cheifPatron.name}
              </div>
              <p className="text-primary80 text-lg text-center">
                {cheifPatron.designation}
              </p>
              <p className="uppercase leading-tight text-sm text-center">
                {cheifPatron.affiliation.line1}
              </p>
              <p className="uppercase leading-tight text-xs text-center text-gray-500">
                {cheifPatron.affiliation.line2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
