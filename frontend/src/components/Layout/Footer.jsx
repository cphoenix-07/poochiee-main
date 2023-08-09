import React from "react";
import { motion } from "framer-motion";
import { AiFillFacebook, AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from "react-icons/ai";
import { Link } from "react-router-dom";
import { footercompanyLinks, footerProductLinks, footerSupportLinks } from "../../static/data";
import logo from '../../Assests/images/logo.png';

const Footer = () => {
  const logoVariants = {
    initial: { opacity: 0, y: -100 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <motion.div className="footer text-white bg-[#333]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-8 text-sm">
        <div className="flex flex-col items-center sm:items-start">
          <motion.img
            src={logo}
            height={'150px'}
            width={'200px'}
            alt=""
            style={{ filter: "brightness(0) invert(1)" }}
            variants={logoVariants}
            initial="initial"
            animate="animate"
          />
          <p className="mt-4">The home and elements needed to create beautiful products.</p>
          <div className="flex items-center mt-4">
            <AiFillFacebook size={25} className="cursor-pointer" />
            <AiOutlineTwitter size={25} className="ml-4 cursor-pointer" />
            <AiFillInstagram size={25} className="ml-4 cursor-pointer" />
            <AiFillYoutube size={25} className="ml-4 cursor-pointer" />
          </div>
        </div>

        {/* Other columns (commented out for brevity) */}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center py-4 text-white-400 text-sm">
        <span>© 2023 Poochiee. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <div className="sm:block flex items-center justify-center w-full">
          <img
            src="https://hamart-shop.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-payment.a37c49ac.png&w=640&q=75"
            alt=""
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
