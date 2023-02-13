import {localOrganisingCommittee} from "@/components/committeesPage/data";

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
                                    className="block font-medium bg-primary10 text-sm leading-tight rounded px-6 py-3 my-2 md:mx-4 focus:outline-none focus:ring-0">
                                    {member.name}
                                </div>
                            )
                        })}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        {localOrganisingCommittee.sscdu.map(function (member) {
                            return (
                                <div
                                    className="block font-medium bg-primary10 text-sm leading-tight rounded px-6 py-3 my-2 md:mx-4 focus:outline-none focus:ring-0">
                                    {member.name}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}