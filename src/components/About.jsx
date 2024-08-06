import React from "react";

const About = () => {
  return (
    <div className="flex flex-col gap-5 items-center justify-center py-[96px] xsm:p-4">
      <span className="abt-head">Our Impact in Numbers</span>
      <span className="abt-desc max-w-[768px]">
        Explore the transformative results of our efforts to empower women and
        drive economic growth.
      </span>
      <div className=" flex numbers justify-center gap-[72px] flex-wrap items-center bg-[#F9FAFB] p-[30px] rounded-[16px]">
        <div className="number flex flex-col gap-3">
          <span>40,000+</span>
          <map>Total Loans Distributed</map>
        </div>
        <div className="number flex flex-col gap-3">
          <span>85%</span>
          <map>Business Success Rate</map>
        </div>
        <div className="number flex flex-col gap-3">
          <span>15k</span>
          <map>Job Creation</map>
        </div>
      </div>
    </div>
  );
};

export default About;
