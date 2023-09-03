import Link from "next/link";
import "./venue.css";
import Image from "next/image";
import plane from './airplane.jpg'
import train from './train.jpg'
import bus from './bus.jpg'

export default function Contact() {
    return (
        <>

            <h1 className=" py-3 text-center hed underline">Contact Us</h1>
            <section >
                <div id="railway" className=" bg-primary10 px-3 py-12  venue ">
                    <div className="textdiv">
                        <div className="px-8">
                            <br></br>
                            <span className="px-3 font-bold pl">Dr. Karan Varma
                        </span>
                            <br></br>
                            
                            <span className="px-3 pl">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className="bi bi-telephone-fill inline-block" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"></path>
                            </svg>
                        </span>
                            +91 12345 67890 (M)
                            <br></br>
                            <span className="px-3 pl">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className="bi bi-telephone-fill inline-block" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"></path>
                            </svg>
                        </span>
                            Office Number (O)
                        </div>
                        
                        <div className="px-8">
                            {/* <h1 className="px-3">Email Id:</h1> */}
                            <span className="px-3 pl">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="bi bi-envelope-at inline-block" viewBox="0 0 16 16">
                                <path
                                    d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z"></path>
                                <path
                                    d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"></path>
                                </svg>
                            </span>
                               email[at]nitdelhi.ac.in
                                <br></br>
                                <br></br>
                                <span className="font-bold px pl">Address:</span> Auditorium, Administrative Block <br></br> National Institute of Technology Delhi<br></br> Plot No. FA7, Zone, P1, GT Karnal Road, Delhi, 110036
                                <br></br>
                                <br></br>
                        </div>
                        <div className="px-8">
                            <h1 className="px-3 pl">For more information, visit institute website:
                            </h1>
                            
                            {/* <span className="px-3">NIT Delhi:</span> */}
                            <Link href="https://www.nitdelhi.ac.in" className="underline hh px-3" target={"_blank"}>www.nitdelhi.ac.in
                            </Link>
                            <br></br>
                            {/* <span className="px-3">SS.DU:</span> */}
                             
                        </div>
                    </div>
                    <div className="mapdiv">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4744.460631183506!2d77.12986422380546!3d28.81701263912285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b1923ada2e3%3A0x1169930518add2fe!2sNational%20Institute%20of%20Technology%20Delhi!5e0!3m2!1sen!2sin!4v1676052566798!5m2!1sen!2sin"
                            width="550" height="380" allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                </div>

            </section>


            {/* How to reach Section */}
            {/* <br></br> */}
            <section id="railway" className=" px-3 py-12 justify-center items-center flex justify-center flex-col">
                <h1 className="hed text-center">How to Reach NIT DELHI</h1>
                <div className="venue card-sec justify-center">
                    <div className="card-c ">
                        <div className="a-box">
                            <div className="img-container">
                                <div className="img-inner">
                                    <div className="inner-skew">
                                        <Image src={plane} alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="text-container">
                                <Link
                                    href="https://www.google.co.in/maps/dir/Indira+Gandhi+International+Airport+(DEL),+New+Delhi,+Delhi/R48M%2B8GJ+NIT+mini+campus,+Garthi+Khurad,+Bakoli,+Delhi,+110040,+India/@28.6869704,76.9810009,11z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x390d1b85fc2a2d89:0xbef376182c43ed9d!2m2!1d77.0999578!2d28.5561624!1m5!1m1!1s0x390dab5cd0fb849d:0x7ab58dbc07e97512!2m2!1d77.1337505!2d28.8158275!3e0" target={"_blank"}>
                                    <h3>From Indira Gandhi International Airport</h3>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="card-c ">
                        <div className="a-box">
                            <div className="img-container">
                                <div className="img-inner">
                                    <div className="inner-skew">
                                        <Image src={bus} alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="text-container">
                                <Link href="https://goo.gl/maps/Zh6DtvfGz5Dt5cNj9" target={"_blank"}><h3>From Kashmiri Gate (ISBT)</h3>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="card-c ">
                        <div className="a-box">
                            <div className="img-container">
                                <div className="img-inner">
                                    <div className="inner-skew">
                                        <Image src={train} alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="text-container">
                                <Link href="https://goo.gl/maps/FYg9TEDneGg36JZm7" target={"_blank"}><h3>From New Delhi Railway
                                    Station</h3>
                                </Link>
                                {/* <h3>From Indira Gandhi International Airport</h3> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}