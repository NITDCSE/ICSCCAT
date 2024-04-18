import Link from "next/link";
import Image from "next/image";
import CountdownTimer from "./CountdownTimer";
import bg from "@/public/hero-bg.jpg";
import icsccatLogo from "@/public/icsccat.png";
import icsccatLogotransparent from "@/public/icsccatlogo.png";
import styles from './AddressCard.module.css';
import './CountdownTimer.css';
import ImportantDates from "./ImportantDates";
import { dates } from "./data";

export default function HeroSection() {
  return (
    <>
      <section
        className="bg-no-repeat bg-cover relative"
        id="hero"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(233, 233, 245, 0.7), rgba(233, 233, 245, 0.8)), url(${bg.src})`,
        }}
      >
        <div className="container relative flex flex-col-reverse md:flex-row justify-center items-start px-6 mx-auto pt-12 space-y-0 md:justify-start">
          <div className="flex flex-col mb-8 mx-auto items-center">
            <div className="flex flex-col items-center mb-2">
              {/* <Image
                className="w-32 md:w-64 mb-4 p-4 rounded-lg shadow-md flex items-center object-contain"
                src={icsccatLogotransparent}
                width={256}
                quality={100}
                priority
              /> */}
              <div className="flex flex-col mx-auto md:mx-0">
                <p className="font-bold text-4xl text-center md:text-5xl">
                  1<sup>st</sup> 
                </p>
                <p className=" text-4xl text-center md:text-5xl font-bold">
                <span className="text-blue-800">I</span>nternational  
                <span className="text-blue-800"> C</span>onference
                </p>
                
                <p className="font-bold text-center text-lg text-black md:text-xl my-2">
                  on
                </p>
                <h1 className="text-center text-2xl text-black md:text-3xl mt-4">
                  <span className="font-[Ananda] font-semibold">Pioneering Developments in</span>
                  </h1>
                <h1 className="text-center text-3xl text-black md:text-5xl mt-4">
                  <p className="font-bold mt-4"><span className="text-blue-800"> C</span>omputer 
                  <span className="text-blue-800"> S</span>cience & 
                  <span className="text-blue-800"> D</span>igital 
                  <span className="text-blue-800"> T</span>echnologies <br />
                  </p>
                </h1>
                <p className="font-bold text-center text-lg text-black md:text-2xl mt-4 mb-2">
                  02<sup>th</sup> - 04<sup>th</sup> August, 2024
                </p>
                <p className="text-center text-base text-black md:text-lg">
                  (Hybrid Mode)
                </p>
                {/* <p className="text-2xl text-center md:text-3xl">
                    Coming Soon
                </p> */}
              </div>
            </div>
            <div className="flex justify-center">
                <CountdownTimer /> {/* Use the CountdownTimer component here */}
            </div>
            {/* <div className="flex pt-8 justify-center">
              <Link href="/register"
                  className="p-3 pt-3 text-xl uppercase text-primary05 bg-gray-400 rounded-full baseline md:block px-6 disabled">Registration Closed
              </Link>
            </div> */}
          </div>
        </div>
          <div className={styles.addressCard}>
            <h2 className={styles.addressTitle}>Venue</h2>
            <div className={styles.addressDetails}>
              <p className={styles.addressText}>
                Department of Computer Science & Engineering<br />
                Administrative Block, National Institute of Technology Delhi <br />
                Plot No. FA7, Zone, P1, GT Karnal Road, Delhi, 110036
              </p>
            </div>
          </div><br />
      </section>
      <ImportantDates></ImportantDates>
    </>
  );
}
