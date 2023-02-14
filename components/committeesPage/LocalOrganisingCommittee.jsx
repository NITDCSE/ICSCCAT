import {localOrganisingCommittee} from "@/components/committeesPage/data";
import Image from "next/image";
import profile from "@/public/profile.png"

export default function LocalOrganisingCommittee() {
    return (
        <section id="localOrganisingCommitee" className="py-6 bg-primary05">
            <div className="container flex flex-col mx-auto px-6 py-4">
                <h2 className="text-4xl font-bold text-center md:text-4xl md:text-left">Local Organising Committee</h2>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        {localOrganisingCommittee.nitDelhi.map(function (member) {
                            return (
                                <div
                                    className="block flex space-x-4 items-center font-medium bg-primary10 rounded px-6 py-3 my-2 md:mx-4 focus:outline-none focus:ring-0">
                                    <Image src={profile} width={48} className="rounded-full aspect-square object-cover" />
                                    <p className={`${"text-sm font-bold"}`}>{member.name}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        {localOrganisingCommittee.sscdu.map(function (member) {
                            return (
                                <div
                                    className="block flex space-x-4 items-center font-medium bg-primary10 rounded px-6 py-3 my-2 md:mx-4 focus:outline-none focus:ring-0">
                                    <Image src={profile} width={48} className="rounded-full aspect-square object-cover" />
                                    <p className={`${"text-sm font-bold"}`}>{member.name}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}