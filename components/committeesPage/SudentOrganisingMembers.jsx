import {studentCommittee} from "@/components/committeesPage/data";
import profile from "@/public/profile.png"
import Image from "next/image";

export default function StudentOrganisingMembers() {
    return (
        <section id="studentcommittee" className="py-6 bg-primary05">
            <div className="container flex flex-col mx-auto px-6 py-4">
                <h2 className="text-4xl font-bold text-center md:text-4xl md:text-left">Student Committee</h2>
                <h3 className="text-xl font-bold pt-6">Core Committee</h3>
                <div className="mt-6 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4">
                    {studentCommittee.core.map(function (member) {
                        return (
                            <StudentProfile member={member} small={false} />
                        )
                    })}
                </div>
                <h3 className="text-xl font-bold pt-6">Web Designing Team</h3>
                <div className="mt-6 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4">
                    {studentCommittee.technical.map(function (member) {
                        return (
                            <StudentProfile member={member} small={false} />
                        )
                    })}
                </div>
                <h3 className="text-xl font-bold pt-6">Student Organising Members</h3>
                <div className="mt-6 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-5">
                    {studentCommittee.others.map(function (member) {
                        return (
                            <StudentProfile member={member} small={true} />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

function StudentProfile({member, small}) {
    return (
        <div
            className="block flex space-x-4 items-center font-medium bg-primary10 rounded px-6 py-3 my-2 md:mx-4 focus:outline-none focus:ring-0">
            <Image src={member.image} width={small ? 48 : 72} className="rounded-full aspect-square object-cover" />
            <p className={`${small ? "text-sm" : "text-lg"}`}>{member.name}</p>
        </div>
    )
}