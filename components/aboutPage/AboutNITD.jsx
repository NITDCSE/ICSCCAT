import Image from "next/image"
import CollegeTabs from "@/components/aboutPage/CollegeTabs";

export default function AboutNITD({ college, nitdActive, setNitdActive }) {
    return (
        <>
            <section id="about" className=" flex flex-col">
                {/*<CollegeTabs nitdActive={nitdActive} setNitdActive={setNitdActive} />*/}
                <div className="flex flex-col justify-center md:flex-col mt-4 mx-auto">
                    <h3 className="text-3xl px-6 pt-4 font-bold text-center md:text-4xl">
                        {college.heading1}
                    </h3>
                    {/* <div className="bg-primary10 py-3 mt-10">
                        <p className="text-justify px-6 mx-auto text-black lg:text-lg">
                            {college.text1}
                        </p>
                    </div> */}
                    <div>
                        <div className="grid md:grid-cols-2 ">
                            <div><p className="text-justify flex-1 px-6 text-black py-6 lg:text-lg">
                                {college.text1} <br />
                                {college.text2} <br />
                                {college.text3} <br />
                            </p>
                            </div>
                            <div className="flex-1 p-8">
                                <Image src={college.image2} className="object-cover h-5/6" />
                            </div>

                        </div>
                    </div>
                    <div className="bg-primary10">
                    <h3 className="text-3xl px-6 pt-4 font-bold text-center md:text-4xl my-4">
                        {college.heading2}
                    </h3>
                        <div className="grid  md:grid-cols-2">
                            <div className="flex-1  p-8 rounded-2xl">
                                <Image src={college.image1} className="object-cover" />
                            </div>
                            <div className="flex-1">
                                <p className="text-justify p-14 py-6 text-black lg:text-lg">
                                    {college.text4}
                                    <ul>
                                        {college.bullets && college.bullets.map(function (ele, idx) {
                                            return <li className="list-disc ml-12 text-lg my-2">{ele}</li>
                                        })}
                                    </ul><br />
                                    {college.text5}
                                </p></div>


                        </div>
                    </div>


                </div>

            </section>
            {/* <section id="about">

                <div className="flex flex-col md:flex-col mt-4  mx-auto">
                    <h3 className="text-2xl px-6 font-bold text-center md:text-3xl">
                        {college.heading2}
                    </h3>
                    <div className=" py-3 px-6 mb-4 mt-10">
                        <p className="text-justify px-6  mx-auto text-black lg:text-lg">
                            {college.text4}
                        </p><br />
                        <ul>
                            {college.bullets && college.bullets.map(function(ele,idx){
                                return <li className="list-disc ml-12 text-lg my-2">{ele}</li>
                            })}
                        </ul><br />
                        <p className="text-justify px-6  mx-auto text-black lg:text-lg">
                            {college.text5}
                        </p>
                    </div>
                </div>
            </section> */}
        </>

    )
}