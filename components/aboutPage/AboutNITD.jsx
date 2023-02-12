import Image from "next/image"
import bg from '@/public/pang-yuhao-_kd5cxwZOK4-unsplash.jpg'
export default function AboutNITD() {
    return (
        <section id="about">
            <div className="flex flex-col md:flex-col px-6 mx-auto mt-10 space-y-12 container">
                <div className="flex flex-col md:flex-col mx-auto mt-10 space-y-5 container">
                    <h3 className="text-3xl font-bold text-center md:text-4xl md:text-left">
                        About National Institute of Technology,Delhi
                    </h3>
                    <div className="bg-primary10">
                        <p className="text-center text-black lg:text-lg md:text-left">
                            National Institute of Technology Delhi (NITD) is one of the thirty NIT(s) established in the year 2010 by an act of the parliament and has been declared as an Institute of National importance. NIT Delhi is an autonomous Institute, which functions under the aegis of the Ministry of Education, Government of India. It aims to provide education and research facilities in various disciplines of Engineering, Science and Technology, Management, Social Sciences, and Humanities for advanced learning and dissemination of knowledge. The mission of NIT Delhi is to develop a highly intelligent and deeply ethical human resource, a workforce which is creative, competitive and innovative. The Institute is imparting holistic education, along with inculcating high moral values in its students.

                        </p>
                    </div>
                    <div>
                        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-16 justify-between px-6 mx-auto py-12 container">
                            <div><p className="text-center text-black lg:text-lg md:text-left">
                                NIT Delhi started its academic session in 2010 and it was operating from its transit campus at Narela, Delhi until recently. The institute has now completely shifted to its permanent campus situated on NH-1 (GT Karnal Road), Narela sub-city, New Delhi. The institute offers B. Tech. programmes in three areas of technology (Computer Science and Engineering, Electronics and Communication Engineering, and Electrical Engineering), M. Tech. programmes in five disciplines, along with Ph.D. programmes in all branches of Science and Engineering. The institute is all set to start B. Tech. programmes in two new branches (Mechanical Engineering and Civil Engineering) from academic session 2022-23.


                            </p>
                            </div>
                            <div>
                                <Image src={bg} className="object-cover" />
                            </div>
                        </div>
                    </div>
                    <div className="bg-primary10">
                    <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-16 justify-between px-6  container">
                    <div>
                                <Image src={bg} className="object-cover" />
                            </div>
                        <div><p className="text-center text-black lg:text-lg md:text-left">
                            The institute makes all attempts to establish strong research collaborations in evolving fields of research in science and engineering. The programmes like joint thesis work, inter-institute collaborative projects, institute assistantship to PG and doctoral students, and administrative support to faculty members for taking up research and consultancy work (sponsored by external agencies). From 2022-23 academic session, the institute has started the Post-Doctoral Fellowship (PDF) programme to further escalate the research activities.

                        </p></div>
                        

                        </div>
                    </div>
                    <div>
                        <p className="text-center text-black lg:text-lg md:text-left">
                            NIT Delhi has implemented the guidelines of National Education Policy (NEP) 2020 for current batches of students.
                        </p>
                    </div>


                </div>
            </div>
        </section>

    )
}