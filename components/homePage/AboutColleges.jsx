export default function AboutColleges() {
    return (
        <section id="about">
            <div className="bg-primary10">
                <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-16 justify-between px-6 mx-auto py-12 container">
                    <div className="flex flex-1 flex-col space-y-3">
                        <h3 className="text-2xl font-bold text-center md:text-3xl md:text-left">
                            About National Institute of Technology, Delhi
                        </h3>
                        
                        <p className="text-black text-justify">
                            National Institute of Technology Delhi is a premier public technical autonomous institution
                            located in New Delhi. NIT Delhi is an Institution of National Importance (INI) and aims to
                            provide instructions and research facilities in various disciplines of Engineering, Science
                            and Technology, Management, Social Sciences and Humanities for advance learning and
                            dissemination of knowledge. The mission of NIT Delhi is to produce human resource those who
                            are creative, competitive and innovative with high intellect and ethical values.
                        </p>
                    </div>
                    <div className="flex flex-1 flex-col space-y-3">
                        <h3 className="text-2xl font-bold text-center md:text-3xl md:text-left">
                            About Swami Shraddhanand College, University of Delhi

                        </h3>
                        <p className="text-black text-justify">
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