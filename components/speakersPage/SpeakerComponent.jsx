import Image from "next/image"
export default function SpeakerComponent({speaker}) {
    return (
        <>
            <div className="card-s">
                <div className="s-logo">
                    <Image src={speaker.image} alt={speaker.title} />
                </div>
                <div className="text-s">
                    <div className="font-bold speakerTitle">{speaker.title}</div>
                    <span className="speakerDescription text-desig">{speaker.designation}</span><br></br>
                    <span className="speakerDescription text-xs">{speaker.description}</span>
                </div>
            </div>
        </>

    )
} 