import Image from "next/image";

export default function Committee(props) {
    return (
        <section className="py-6">
            <div className="container mx-auto px-6 my-6 font-bold text-4xl">
                {props.name}
            </div>
            {
                props.data.map(function (section, idx) {
                    return (
                        <div key={idx} className={`${idx % 2 === 0 ? 'bg-primary05' : 'bg-primary10'} w-full`}>
                            <div className="mx-auto container py-4">
                                {section.type != 'main' ? <h3 className="text-3xl text-primary90 font-bold text-center mb-8">{section.type}</h3> : ''}
                                <div
                                    className="flex flex-wrap gap-4 items-stretch">
                                    {
                                        section.members.map(function (member) {
                                            return (<UserProfile member={member}
                                                                 />)
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
        <div className="w-[15rem] min-h-[3rem] rounded-md overflow-hidden shadow-md bg-white">
            <div className="px-6 py-4">
                <div className="flex justify-center pb-6">
                    <Image src={member.photo} className="max-h-18 rounded-full aspect-square object-cover"
                           alt="profile image" width={120}
                           quality={100}/>
                </div>
                <div className="font-bold text-xl mb-2 text-primaryDark text-center">{member.name}</div>
                <p className="text-primary80 text-lg text-center">{member.designation}</p>
                <p className="uppercase leading-tight text-sm text-center">{member.affiliation.line1}</p>
                <p className="uppercase leading-tight text-xs text-center text-gray-500">{member.affiliation.line2}</p>
            </div>
        </div>
    )
}