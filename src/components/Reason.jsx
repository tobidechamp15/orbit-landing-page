import React from "react";
import reasonImg from "../assets/reason-img.svg";

const Reason = () => {
  return (
    <div className="flex md:flex-row w-full items-center justify-center gap-16 py-[56px] xsm:p-4 flex-wrap">
      <div className="flex flex-col gap-4">
        <span className="res-head">Why Choose Orbit</span>
        <span className="res-desc">
          With over a decade of experience, we have successfully supported
          thousands of women entrepreneurs, helping them achieve financial
          independence and business growth. Our programs boast an impressive 85%
          business success rate, demonstrating the effectiveness of our support
          and the determination of the women we empower. We provide not only
          financial assistance but also mentorship, training, and resources,
          ensuring that our entrepreneurs have all they need to succeed. Our
          efforts have created over 15,000 jobs, positively affecting local
          economies and fostering community development. We offer customised
          loan programs that meet the unique needs of women entrepreneurs across
          various sectors, ensuring the best chance of success. By choosing us,
          you&apos;re not only receiving comprehensive support but also joining
          a community dedicated to empowering women and transforming lives.
        </span>
      </div>
      <img src={reasonImg} alt="" />
    </div>
  );
};

export default Reason;
