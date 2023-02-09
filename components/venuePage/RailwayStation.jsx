import Link from "next/link";
import "./venue.css";
export default function railwayStation() {
    return (
        <>
        <h1 className=" bg-primary10 py-3 text-center hed">How to Reach NIT Delhi</h1>
        <section id="railway" className=" bg-primary10 px-3 py-12 justify-center items-center venue">
            <div className="mapdiv">
                <h1>From Delhi railway junction, 6, Old Delhi, Delhi, 110006
                </h1>
                <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d111946.48146171824!2d77.11424529159626!3d28.73963598485484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x390cfdbecc77e081%3A0x26582c4c786f4e17!2sDelhi%20railway%20junction%2C%20Old%20Delhi%2C%20Delhi!3m2!1d28.6616862!2d77.2304635!4m5!1s0x390dab5cd0fb849d%3A0x7ab58dbc07e97512!2sR48M%2B8GJ%20NIT%20mini%20campus%2C%20Garthi%20Khurad%2C%20Bakoli%2C%20Delhi%2C%20110040%2C%20India!3m2!1d28.815827499999997!2d77.13375049999999!5e0!3m2!1sen!2sin!4v1675891062200!5m2!1sen!2sin" width="400" height="380"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="textdiv">
                {/* <p> */}
                    (Distance: Approximately 24.6 Kms; Travel time: 40 - 50 min) :<br /><br />

                    (i) Walk 400m to G.G.S. Indraprastha University<br /><br />

                    (ii) From G.G.S. Indraprastha University take bus number 901 to Azad Pur Terminal<br /><br />

                    (iii) From Azad Pur Terminal take bus number 120 to Bakoli Xing<br /><br />
                    (iv) From Bakoli Xing walk about 600m to NIT Delhi<br /><br />
            </div>
        </section>

        <br />
        <section id="railway" className=" bg-primary10 px-3 py-12 justify-center items-center venue">
            <div className="mapdiv">
                <h1>From Indira Gandhi International Airport
                </h1>
                <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d222844.73966366955!2d77.02400034411485!3d28.686731504813284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x390d1b85fc2a2d89%3A0xbef376182c43ed9d!2sIndira%20Gandhi%20International%20Airport%20(DEL)%2C%20New%20Delhi%2C%20Delhi!3m2!1d28.556162399999998!2d77.0999578!4m5!1s0x390dab5cd0fb849d%3A0x7ab58dbc07e97512!2sR48M%2B8GJ%20NIT%20mini%20campus%2C%20Garthi%20Khurad%2C%20Bakoli%2C%20Delhi%2C%20110040%2C%20India!3m2!1d28.815827499999997!2d77.13375049999999!5e0!3m2!1sen!2sin!4v1675920054686!5m2!1sen!2sin" width="400" height="380" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="textdiv">
                {/* <p> */}
                    (Distance: Approximately 33 Kms; Travel time: 1hr - 1hr 15 min) :<br /><br />
{/* 
                    (i) Walk 400m to G.G.S. Indraprastha University<br /><br />

                    (ii) From G.G.S. Indraprastha University take bus number 901 to Azad Pur Terminal<br /><br />

                    (iii) From Azad Pur Terminal take bus number 120 to Bakoli Xing<br /><br />
                    (iv) From Bakoli Xing walk about 600m to NIT Delhi<br /><br /> */}
            </div>
        </section>
        </>
    )
}