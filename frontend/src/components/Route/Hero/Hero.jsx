import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import bannerImage from '../../../Assests/images/banner.jpg';

const Hero = () => {
  return (
    <div
      className={`bannerImage relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage:bannerImage,
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[white] font-[600] capitalize`}
        >
          Tailored Care <br /> For Happy Tails
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[white]">
          Transforming Pet Care through Innovation & Heartfelt Commitment. Our Platform Offers Seamless Access to Premium Pet Services. 
          <br />We Link Pet Owners with Reputable Providers, Focused on Optimal Pet Welfare. We're Not Just a Service, We're a Movement - A Force Against Unethical Practices in the Industry. 
          <br />Our Vision Extends Beyond Convenience - We're Building a Community, Bridging Gaps, and Fostering Positive Change. 
          <br />Join Us in Uplifting Pet Care Standards, One Paw at a Time.
                </p>
        <Link to="/products" className="inline-block">
            <div className={`${styles.button} mt-5`}>
                 <span className="text-[#fff] font-[Poppins] text-[18px]">
                    Explore
                 </span>
            </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
