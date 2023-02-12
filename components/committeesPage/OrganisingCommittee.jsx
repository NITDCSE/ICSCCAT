import profile from "@/public/profile.png"
import Image from "next/image";
import {organisingCommittee} from "@/components/committeesPage/data";

export default function OrganisingCommittee() {
    return (
        <section id="organisingcommittee" className="py-6">
            <div className="container mx-auto px-6">
                <h4 className="text-4xl font-bold text-center md:text-4xl md:text-left">Organising Committee</h4>
            </div>
            {
                organisingCommittee.map(function (section, idx) {
                    return (
                        <div key={idx} className={`${idx % 2 === 0 ? 'bg-primary05' : 'bg-primary10'} w-full`}>
                            <div className="mx-auto container px-6 py-4">
                                <h3 className="text-3xl font-bold text-center mb-8">{section.type}</h3>
                                <div
                                    className={`grid grid-cols-1 md:grid-cols-${section.members.length <= 2 ? section.members.length : 2} lg:grid-cols-${section.members.length <= 4 ? section.members.length : 4}  gap-4 my-2`}>
                                    {
                                        section.members.map(function (member) {
                                            return (<UserProfile member={member}/>)
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
}

function UserProfile({member}) {
    return (
        <div className="max-w-sm min-w-sm w-full mx-auto rounded overflow-hidden shadow-md bg-white">
            <div className="px-6 py-4">
                <div className="flex justify-center pb-6">
                    <Image src={profile} className="max-h-18 rounded-full aspect-square object-contain"
                           alt="profile image" width={128}
                           quality={100}/>
                </div>
                <div className="font-bold text-xl mb-2 text-primaryDark text-center">{member.name}</div>
                <p className="text-primary80 text-lg text-center">{member.designation}</p>
                <p className="uppercase leading-tight text-xs text-center">{member.affiliation}</p>
            </div>
        </div>
    )
}