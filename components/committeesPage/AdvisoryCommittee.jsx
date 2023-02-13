import {advisoryCommittee} from "@/components/committeesPage/data";
import Image from "next/image";

export default function AdvisoryCommittee() {
    return (
        <section id="advisoryCommitee" className="py-6 bg-primary05">
            <div className="container flex flex-col mx-auto px-6 py-4">
                <h2 className="text-4xl font-bold text-center md:text-4xl md:text-left">Advisory Committee</h2>
                <div className="mt-6 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4">
                    {advisoryCommittee.map(function (member) {
                        return (
                            <div
                                className="block font-medium bg-primary10 rounded px-6 py-3 my-2 md:mx-4 focus:outline-none focus:ring-0">
                                <p className="text-lg font-bold">{member.name}</p>
                                <p className="uppercase text-xs leading-tight">{member.affiliation}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}