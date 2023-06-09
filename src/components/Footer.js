import { BsFacebook, BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

import { BsLinkedin } from "react-icons/bs";

import { BiChevronDown } from "react-icons/bi";
import { BsPinterest } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BsTencentQq } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="m-10">
      {/* Links */}
      <div className="border-t border-b border-gray-100 p-3 mb-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {/* column 1 */}
          <div className="flex flex-col space-y-3 items-start">
            <a href="/">
              <strong>Why netlify</strong>
            </a>
            <a href="/">Customers</a>
            <a href="/">Enterprise</a>
            <a href="/">Resourses</a>
            <a href="/">Agency partner program</a>
            <a href="/">Technology partner program</a>
          </div>
          {/* column 2 */}
          <div className="flex flex-col space-y-3 items-start">
            <a href="/">
              <strong>Products</strong>
            </a>
            <a href="/">Platform</a>
            <a href="/">Netlify Build</a>
            <a href="/">Netlify Edge</a>
            <a href="/">Netlify CLI</a>
            <a href="/">Pricing</a>
            <a href="/">Addons</a>
          </div>
          {/* column 3 */}
          <div className="flex flex-col space-y-3 items-start">
            <a href="/">
              <strong>Docs</strong>
            </a>
            <a href="/">Jamstack book</a>
            <a href="/">Community</a>
            <a href="/">Security</a>
            <a href="/">Site speed test</a>
            <a href="/">Remotely Interesting</a>
            <a className="flex flex-row items-center space-x-1" href="/">
              <span>Technologies</span> <BiChevronDown />
            </a>
          </div>
          {/* column 4 */}
          <div className="flex flex-col space-y-3 items-start">
            <a href="/">
              <strong>Contact us</strong>
            </a>
            <a href="/">Sales</a>
            <a href="/">Support</a>
            <a href="/">Status</a>
            <a href="/">Forums</a>
            <a href="/">Hire an agency</a>
          </div>
          {/* column 5 */}
          <div className="flex flex-col space-y-3 items-start">
            <a href="/">
              <strong>Company</strong>
            </a>
            <a href="/">Blog</a>
            <a href="/">About</a>
            <a href="/">Careers</a>
            <a href="/">Press</a>
            <a href="/">Jamstack Fund</a>
            <a href="/">Netlify Store</a>
            <a href="/">Sustainability</a>
          </div>
          {/* column 6 */}
          <div className="flex flex-col space-y-3 items-start">
            <a href="/">
              <strong>Trust</strong>
            </a>
            <a href="/">Trust Center</a>
            <a href="/">Privacy</a>
            <a href="/">Security</a>
            <a href="/">GDPR/CCPA</a>
            <a href="/">Abuse</a>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-4 items-center">
        {/* trade marks */}
        <h3 className="font-semibold">&copy; 2023 027.net</h3>
        {/* Socials */}
        <div className="flex flex-row space-x-4 items-center">
          <a href="https://qq.com" target="_blank" rel="noreferrer">
            <svg
              className="w-12 h-12"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="QQ"
              viewBox="0 0 512 512"
              id="qq"
            >
              <rect width="512" height="512" fill="#fff" rx="15%"></rect>
              <path
                fill="#ffc107"
                d="M261 398a57 32 0 0 0 114 0 57 32 0 0 0-114 0zm-124 0a57 32 0 0 0 114 0 57 32 0 0 0-114 0z"
              ></path>
              <path
                fill="#37474f"
                d="M238 149a10 14 0 0 1-20 0 10 14 0 0 1 20 0zm46-13c-6 0-10 6-10 13 0 8 4-4 10-4 5 0 9 12 9 4 0-7-4-13-9-13zm27 14a23 33 0 0 1-46 0 23 33 0 0 1 46 0zm-64 0a23 33 0 0 1-46 0 23 33 0 0 1 46 0zm127 79v-56a119 119 0 0 0-237 0v56c-18 25-35 55-37 78 0 44 13 40 13 40 5 0 15-9 23-20 19 55 65 93 120 93s101-38 120-93c8 11 18 20 23 20 0 0 13 4 13-40 0-23-17-54-37-78z"
              ></path>
              <path fill="#ffc107" d="M183 204a73 13 0 1 1 146 0 73 23 0 1 1-146 0z"></path>
              <path fill="#eceff1" d="M171 237a88 132 0 1 0 170 0z"></path>
              <path
                fill="#ff3d00"
                d="M391 220c-4-14-9-20-19-12a235 225 0 0 1-230 0c-10-7-15-2-19 12s-6 18 6 26l32 15c-6 32-5 63-5 65 1 13 12 12 27 12 14-1 26 0 26-15 0-8 0-27 3-46 15 3 29 5 46 5 67 0 126-35 127-36 11-7 9-11 6-26z"
              ></path>
            </svg>
          </a>
          <a href="https://gmail.com" target="_blank" rel="noreferrer">
            <svg
              className=" w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              data-name="Layer 1"
              viewBox="0 0 32 32"
              id="gmail"
            >
              <path
                fill="#ea4435"
                d="M16.58,19.1068l-12.69-8.0757A3,3,0,0,1,7.1109,5.97l9.31,5.9243L24.78,6.0428A3,3,0,0,1,28.22,10.9579Z"
              ></path>
              <path
                fill="#00ac47"
                d="M25.5,5.5h4a0,0,0,0,1,0,0v18a3,3,0,0,1-3,3h0a3,3,0,0,1-3-3V7.5a2,2,0,0,1,2-2Z"
                transform="rotate(180 26.5 16)"
              ></path>
              <path
                fill="#ffba00"
                d="M29.4562,8.0656c-.0088-.06-.0081-.1213-.0206-.1812-.0192-.0918-.0549-.1766-.0823-.2652a2.9312,2.9312,0,0,0-.0958-.2993c-.02-.0475-.0508-.0892-.0735-.1354A2.9838,2.9838,0,0,0,28.9686,6.8c-.04-.0581-.09-.1076-.1342-.1626a3.0282,3.0282,0,0,0-.2455-.2849c-.0665-.0647-.1423-.1188-.2146-.1771a3.02,3.02,0,0,0-.24-.1857c-.0793-.0518-.1661-.0917-.25-.1359-.0884-.0461-.175-.0963-.267-.1331-.0889-.0358-.1837-.0586-.2766-.0859s-.1853-.06-.2807-.0777a3.0543,3.0543,0,0,0-.357-.036c-.0759-.0053-.1511-.0186-.2273-.018a2.9778,2.9778,0,0,0-.4219.0425c-.0563.0084-.113.0077-.1689.0193a33.211,33.211,0,0,0-.5645.178c-.0515.022-.0966.0547-.1465.0795A2.901,2.901,0,0,0,23.5,8.5v5.762l4.72-3.3043a2.8878,2.8878,0,0,0,1.2359-2.8923Z"
              ></path>
              <path
                fill="#4285f4"
                d="M5.5,5.5h0a3,3,0,0,1,3,3v18a0,0,0,0,1,0,0h-4a2,2,0,0,1-2-2V8.5a3,3,0,0,1,3-3Z"
              ></path>
              <path
                fill="#c52528"
                d="M2.5439,8.0656c.0088-.06.0081-.1213.0206-.1812.0192-.0918.0549-.1766.0823-.2652A2.9312,2.9312,0,0,1,2.7426,7.32c.02-.0475.0508-.0892.0736-.1354A2.9719,2.9719,0,0,1,3.0316,6.8c.04-.0581.09-.1076.1342-.1626a3.0272,3.0272,0,0,1,.2454-.2849c.0665-.0647.1423-.1188.2147-.1771a3.0005,3.0005,0,0,1,.24-.1857c.0793-.0518.1661-.0917.25-.1359A2.9747,2.9747,0,0,1,4.3829,5.72c.089-.0358.1838-.0586.2766-.0859s.1853-.06.2807-.0777a3.0565,3.0565,0,0,1,.357-.036c.076-.0053.1511-.0186.2273-.018a2.9763,2.9763,0,0,1,.4219.0425c.0563.0084.113.0077.169.0193a2.9056,2.9056,0,0,1,.286.0888,2.9157,2.9157,0,0,1,.2785.0892c.0514.022.0965.0547.1465.0795a2.9745,2.9745,0,0,1,.3742.21A2.9943,2.9943,0,0,1,8.5,8.5v5.762L3.78,10.9579A2.8891,2.8891,0,0,1,2.5439,8.0656Z"
              ></path>
            </svg>
          </a>
        </div>
        {/* 备案信息 */}
        <ul className="flex flex-col items-center space-y-3 bg-gray-50 p-3 w-full rounded-md md:flex-row md:space-y-0 md:space-x-4 md:justify-center">
          <li className="flex flex-row items-center">公安备:42010302000132</li>
          <li className="flex flex-row items-center">
            <a href="https://beian.miit.gov.cn/#/Integrated/index">鄂ICP备:B2-20110095-13</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
