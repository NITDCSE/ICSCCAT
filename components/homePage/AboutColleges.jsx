import Image from "next/image";
import nitdLongLogo from "@/public/nitd-logo-labeled-blue.png";
import sscduLongLogo from "@/public/sscdu-logo-long.png";

export default function AboutColleges() {
    return (
        <section id="about" className="bg-primary10">
            <div className="container mx-auto px-6 py-12">
                <h2 className="text-3xl md:text-4xl font-bold text-center pb-8">Organised by</h2>
                <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-24 justify-between">
                    <div className="flex flex-1 items-center flex-col space-y-3">
                        <p className="text-lg uppercase text-center md:text-xl pb-4">Department of Applied Sciences</p>
                        <Image src={nitdLongLogo} height={72} alt="" quality={100} className="max-h-18 object-contain"/>
                        <h3 className="text-xl font-bold text-center md:text-2xl pt-4 hidden">
                            National Institute of Technology, Delhi
                        </h3>
                        <p className="text-black text-justify text-lg pt-4">
                            National Institute of Technology Delhi is a premier public technical autonomous institution
                            located in New Delhi. NIT Delhi is an Institution of National Importance (INI) and aims to
                            provide instructions and research facilities in various disciplines of Engineering, Science
                            and Technology, Management, Social Sciences and Humanities for advance learning and
                            dissemination of knowledge. The mission of NIT Delhi is to produce human resource those who
                            are creative, competitive and innovative with high intellect and ethical values.
                        </p>
                    </div>
                    <div className="flex items-center flex-1 flex-col space-y-3">
                        <p className="text-lg uppercase text-center md:text-xl pb-4">Department of Chemistry</p>
                        <Image src={sscduLongLogo} height={72} alt="" quality={100} className="max-h-18 object-contain"/>
                        <h3 className="text-xl font-bold text-center md:text-2xl pt-4 hidden">
                            Swami Shraddhanand College, University of Delhi

                        </h3>
                        <p className="text-black text-justify text-lg pt-4">
                            Swami Sharddhanand College, a constituent College of Delhi University, is run under the
                            trusteeship of Central Govt. It is a co-educational institution and imparts instructions in
                            various subjects at both undergraduate and post-graduate levels. It is equipped with
                            qualified teaching staff, specialized laboratories and adequate library facilities.
                        </p>
                    </div>
                </div>
            </div>
        </section>

    )
}