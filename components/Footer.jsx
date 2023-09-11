import "assets/css/footer.css";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="bg-primary10" id="footer">
        <div className="container mx-auto px-6 py-8">
          <div className="footer_content">
            <div className="footerAdress">
              <div className="footerAddress_icon">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  version="1.1"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 0c-2.761 0-5 2.239-5 5 0 5 5 11 5 11s5-6 5-11c0-2.761-2.239-5-5-5zM8 8c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"></path>
                </svg>
              </div>
              <div className="footer_address_content">
                <h3 class="Footer_Address_heading">Address</h3>
                <p class="Footer_Address_line__Tu0_Q undefined">
                  National Institute of Technology Delhi
                </p>
                <p class="Footer_Address_line__Tu0_Q undefined">
                  Plot No. FA7, Zone P1, GT Karnal Rd
                </p>
                <p class="Footer_Address_line__Tu0_Q undefined">
                  Delhi - 110036
                </p>
              </div>
            </div>
            <div className="footer_contact">
              <div className="footer_contact_icon">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  version="1.1"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11 10c-1 1-1 2-2 2s-2-1-3-2-2-2-2-3 1-1 2-2-2-4-3-4-3 3-3 3c0 2 2.055 6.055 4 8s6 4 8 4c0 0 3-2 3-3s-3-4-4-3z"></path>
                </svg>
              </div>
              <div className="footer_contact_content">
                <h3 class="Footer_ContactUs_heading__F1Du9">Contact Us</h3>
                <div className="contact_details">
                  <ul class="contact_list">
                    <li class="Footer_ContactUs_item__rFApu undefined">
                      +91 80033 89258
                    </li>
                    <li class="Footer_ContactUs_item__rFApu undefined">
                      +91 82925 56170
                    </li>
                  </ul>
                  <ul className="emailList">
                    <li>
                      <a href="mailto:karanverma@nitdelhi.ac.in">
                        karanverma@nitdelhi.ac.in
                      </a>
                    </li>
                    <li>
                      <a href="mailto:gautam@nitdelhi.ac.in">
                        gautam@nitdelhi.ac.in
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="social-media-handle">
              <div className="social-media-icon"></div>
              <h3>Social Media Handles</h3>
              <a
                href="https://www.instagram.com/nitdelhiofficial"
                target="blank"
              >
                <svg
                  className="my-icon"
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 48 48"
                >
                  <path d="M 16.5 5 C 10.159 5 5 10.159 5 16.5 L 5 31.5 C 5 37.841 10.159 43 16.5 43 L 31.5 43 C 37.841 43 43 37.841 43 31.5 L 43 16.5 C 43 10.159 37.841 5 31.5 5 L 16.5 5 z M 34 12 C 35.105 12 36 12.895 36 14 C 36 15.104 35.105 16 34 16 C 32.895 16 32 15.104 32 14 C 32 12.895 32.895 12 34 12 z M 24 14 C 29.514 14 34 18.486 34 24 C 34 29.514 29.514 34 24 34 C 18.486 34 14 29.514 14 24 C 14 18.486 18.486 14 24 14 z M 24 17 A 7 7 0 1 0 24 31 A 7 7 0 1 0 24 17 z"></path>
                </svg>{" "}
                Instagram{" "}
              </a>
              <a
                href="https://www.facebook.com/nitdelhiofficialpage"
                target="blank"
              >
                <svg
                  className="my-icon"
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 50 50"
                >
                  <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
                </svg>
                Facebook{" "}
              </a>
              <a href="https://twitter.com/nitdofficial" target="blank">
                <svg
                  className="my-icon"
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 30 30"
                >
                  <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"></path>
                </svg>
                Twitter{" "}
              </a>
            </div>
          </div>
          <p className="text-sm text-center mt-12">
            Powered by Department of Computer Science & Engineering, NIT Delhi
          </p>
        </div>
        <div className="bg-black text-white text-sm">
          <div className="container mx-auto px-6 py-2">
            <p className="text-center">
              Designed and Developed by -{" "}
              <Link href="" className="underline hover:text-primary20">
                Sajal Sahu{" "}
              </Link>
              ,{" "}
              <Link href="" className="underline hover:text-primary20">
                {" "}
                Rohit Kumar
              </Link>
              ,{" "}
              <Link href="" className="underline hover:text-primary20">
                Utkarsh Trivedi
              </Link>{" "}
              &{" "}
              <Link href="" className="underline hover:text-primary20">
                Shreyansh Gupta
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
