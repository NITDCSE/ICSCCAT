import Image from "next/image"
import nitdAdmin from '@/public/nitd_admin.jpg'
import nitdAcad from '@/public/nitd_acad.jpg'
export default function AboutNITD() {
    return (
        <>
        <section id="about" className="justify-center flex">
           
                <div className="flex flex-col md:flex-col mt-4  container">
                    <h3 className="text-3xl px-6 font-bold text-center md:text-4xl md:text-left">
                        About National Institute of Technology Delhi
                    </h3>
                    <div className="bg-primary10 py-3 mt-10">
                        <p className="text-center px-6  mx-auto text-black lg:text-lg  text-justify">
                            National Institute of Technology Delhi (NITD) is one of the thirty NIT(s) established in the year 2010 by an act of the parliament and has been declared as an Institute of National importance. NIT Delhi is an autonomous Institute, which functions under the aegis of the Ministry of Education, Government of India. It aims to provide education and research facilities in various disciplines of Engineering, Science and Technology, Management, Social Sciences, and Humanities for advanced learning and dissemination of knowledge. The mission of NIT Delhi is to develop a highly intelligent and deeply ethical human resource, a workforce which is creative, competitive and innovative. The Institute is imparting holistic education, along with inculcating high moral values in its students.

                        </p>
                    </div>
                    <div>
                        <div className="grid grid-cols-2 py-3">
                            <div><p className="text-center flex-1 px-6 text-black py-6 lg:text-lg  text-justify">
                                NIT Delhi started its academic session in 2010 and it was operating from its transit campus at Narela, Delhi until recently. The institute has now completely shifted to its permanent campus situated on NH-1 (GT Karnal Road), Narela sub-city, New Delhi. The institute offers B. Tech. programmes in three areas of technology (Computer Science and Engineering, Electronics and Communication Engineering, and Electrical Engineering), M. Tech. programmes in five disciplines, along with Ph.D. programmes in all branches of Science and Engineering. The institute is all set to start B. Tech. programmes in two new branches (Mechanical Engineering and Civil Engineering) from academic session 2022-23.
                            </p>
                            </div>
                            <div className="flex-1">
                                <Image src={nitdAdmin} className="object-cover" />
                            </div>
                           
                        </div>
                    </div>
                    <div className="bg-primary10">
                    <div className="grid grid-cols-2">
                    <div className="flex-1">
                                <Image src={nitdAcad} className="object-cover" />
                            </div>
                        <div className="flex-1">
                            <p className="text-center  p-6 py-6 text-black lg:text-lg text-justify">
                            The institute makes all attempts to establish strong research collaborations in evolving fields of research in science and engineering. The programmes like joint thesis work, inter-institute collaborative projects, institute assistantship to PG and doctoral students, and administrative support to faculty members for taking up research and consultancy work (sponsored by external agencies). From 2022-23 academic session, the institute has started the Post-Doctoral Fellowship (PDF) programme to further escalate the research activities.
                            NIT Delhi has implemented the guidelines of National Education Policy (NEP) 2020 for current batches of students.

                        </p></div>
                        

                        </div>
                    </div>
                    


                </div>
        
        </section>
        <section id="about" className="justify-center flex">
           
        <div className="flex flex-col md:flex-col mt-4  container">
        <h3 className="text-2xl px-6 font-bold text-center md:text-3xl md:text-left">
         About Department of Applied Sciences, NIT Delhi
        </h3>
        <div className="bg-primary10 py-3 mt-10">
                        <p className="text-center px-6  mx-auto text-black lg:text-lg text-justify">
                        The Department of Applied Sciences provides an inclusive environment by integrating a range of educational, research and consultancy opportunities to enhance knowledge and skills. The department acts as a bridge between the basic sciences like physics, chemistry and mathematics with engineering procedures. Faculty in applied sciences is involved in teaching high quality basic and advanced courses to the undergraduate students to make them strong in fundamentals related to their concerned engineering disciplines. Also, our faculty provides the graduate students with knowledge and skills by offering specialized courses across a broad range of study options in M. Tech. and Doctoral programmes. The department has its own doctoral programme in applied physics, chemistry, and pure and applied mathematics. The department aspires to develop the full potential of our students whilst offering an enriched educational experience that equips them with the qualifications and skills to achieve their scientific and technical ambitions. The department has several specialized research laboratories, and is all set to start M. Tech. programmes in "Smart Materials and Technology" and "Mathematics and Computation".
                        </p>
                    </div>
            
        </div>
        </section>
        </>

    )
}