"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { socials } from "../constants";

import styles from "../styles";
import { footerVariants } from "../utils/motion";

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          Explore Courses
        </h4>

        <Link href="https://portal.piaic.org/signup" target="blank">
          <button
            type="button"
            className="flex items-center h-fit py-4 px-6 bg-[white] rounded-[32px] gap-[12px]"
          >
            <img
              src="/PIAIC.PNG"
              alt="headset"
              className="w-[30px] h-[30px] object-contain"
            />
            <span className="font-bold text-[16px] text-[#374151]">APPLY</span>
          </button>
        </Link>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">PANAVERSE</h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            Web 3.0 and Metaverse Developer program of PIAIC, will create
            developers for next Generation of the Internet
          </p>

          <div className="flex gap-4">
            {socials.map((social) => (
              <Link key={social.name} href={social.link} target="blank">
                <img
                  src={social.url}
                  alt={social.name}
                  className="w-[24px] h-[24px] object-contain cursor-pointer"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
