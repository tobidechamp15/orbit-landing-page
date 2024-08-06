import React from "react";
import loansImg from "../assets/loanImg.svg";
import eligibleImg from "../assets/eligibleIcon.svg";
import processImg from "../assets/processImg.svg";
import timeImg from "../assets/timeImg.svg";
import financeImg from "../assets/financeImg.svg";
import impactImg from "../assets/impactImg.svg";
import ava1 from "../assets/ava1.svg";
import ava2 from "../assets/ava2.svg";
import ayra3 from "../assets/ayra 3.svg";

const Questions = () => {
  return (
    <div className="py-[96px] flex flex-col items-center px-3">
      <section className="flex flex-col gap-3 ">
        <span className="questions-head">Frequently asked questions</span>
        <span className="questions-desc">
          Everything you need to know about Orbit.
        </span>
      </section>
      <section className="flex flex-wrap gap-[32px] items-center justify-center mt-[64px] max-w-[1216px]">
        <div className="question-card">
          <img src={loansImg} alt="" />
          <span>What types of loans do you offer?</span>
          <map>
            We offer various types of micro-loans tailored to meet the unique
            needs of women entrepreneurs. These include startup loans, business
            expansion loans, and sector-specific loans designed to support
            different industries.
          </map>
        </div>
        <div className="question-card">
          <img src={eligibleImg} alt="" />
          <span>Who is eligible to apply for a loan?</span>
          <map>
            Our loans are available to women entrepreneurs who have a viable
            business plan and demonstrate a commitment to their business. We
            consider applications from women across various sectors and stages
            of business development.
          </map>
        </div>
        <div className="question-card">
          <img src={processImg} alt="" />
          <span>What is the application process like?</span>
          <map>
            The application process is straightforward. You need to fill out an
            online application form, provide necessary documentation such as
            your business plan and financial statements, and undergo a brief
            interview.
          </map>
        </div>
        <div className="question-card">
          <img src={timeImg} alt="" />
          <span>How long does it take to get a loan?</span>
          <map>
            We offer various types of micro-loans tailored to meet the unique
            needs of women entrepreneurs. These include startup loans, business
            expansion loans, and sector-specific loans designed to support
            different industries.
          </map>
        </div>
        <div className="question-card">
          <img src={financeImg} alt="" />
          <span>What support do you offer besides financial assistance?</span>
          <map>
            In addition to loans, we provide comprehensive support, including
            mentorship, business training, and access to resources and networks.
            Our goal is to equip you with the tools and knowledge necessary for
            your business to thrive.
          </map>
        </div>
        <div className="question-card">
          <img src={impactImg} alt="" />
          <span>How has your program impacted communities?</span>
          <map>
            Our program has significantly impacted communities by creating over
            15,000 jobs and supporting the growth of numerous businesses. By
            empowering women entrepreneurs, we foster a sense of community and
            collaboration.
          </map>
        </div>
      </section>
      <section className="flex item-center justify-center bg-[#F9FAFB] my-[64px] py-[32px] w-full container rounded-[20px] flex-col gap-4">
        <div className="flex relative items-center justify-center">
          <img src={ava1} className="circle-image " />
          <img src={ayra3} className="circle-image middle-image " />
          <img src={ava2} className="circle-image " />
        </div>

        <span className="text-[20px] font-semibold text-center">
          Still have questions?
        </span>
        <span className=" text-center ">
          Can’t find the answer you’re looking for? Please chat to our friendly
          team.
        </span>
        <span className="get-started my-[48px] rounded-lg w-fit self-center cursor-pointer">
          Get in touch
        </span>
      </section>
    </div>
  );
};

export default Questions;
