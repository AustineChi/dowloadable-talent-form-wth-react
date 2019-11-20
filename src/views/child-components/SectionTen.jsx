import React from "react";
import TableOne from "./utility/tableOne";

const SectionTen = ({ data, handleChange }) => {
  return (
    <div className="add-border remove-border-top remove-border-bottom">
      <div className="gray-header add-border-bottom ">
        SECTION 10: COMPLEMENTARY LABOUR MARKET BENEFITS (FOR FIRST GLOBAL
        TALENT APPLICATION ONLY)
      </div>
      <div className="pt10 box">
        <p>
          In this section, you must choose at least two complementary benefits
          from the list of benefits in the Global Talent Applicant Guide, or
          create your own. For each benefit selected, you must describe the
          activities/milestones/benchmarks you will undertake to achieve the
          benefit.
        </p>
      </div>
      <div className="gray-header x add-border-top ">
        Complementary Benefit # 1
      </div>
      <div className="pt10 box add-border-top">
        <label >
          Which complementary benefit will be achieved by hiring a TFW for the
          position identified in this application?
          <textarea type="text" className="text-input" />
        </label>
      </div>
      <div className="pt10 box add-border-top">
        <p>
          Please list the activities/milestones/targets that will be used to
          achieve the mandatory benefit:
        </p>
      </div>
      <TableOne />

      <div className="gray-header x ">
        Complementary Benefit # 2
      </div>
      <div className="pt10 box add-border-top">
        <label >
          Which complementary benefit will be achieved by hiring a TFW for the
          position identified in this application?
          <textarea type="text" className="text-input" />
        </label>
      </div>
      <div className="pt10 box add-border-top">
        <p>
          Please list the activities/milestones/targets that will be used to
          achieve the mandatory benefit:
        </p>
      </div>
      <TableOne />
      <div className="gray-header x ">
        Complementary Benefit # 3
      </div>
      <div className="pt10 box add-border-top">
        <label >
          Which complementary benefit will be achieved by hiring a TFW for the
          position identified in this application?
          <textarea type="text" className="text-input" />
        </label>
      </div>
      <div className="pt10 box add-border-top">
        <p>
          Please list the activities/milestones/targets that will be used to
          achieve the mandatory benefit:
        </p>
      </div>
      <TableOne />
      <div className="gray-header x  ">
        Complementary Benefit # 4
      </div>
      <div className="pt10 box add-border-top">
        <label >
          Which complementary benefit will be achieved by hiring a TFW for the
          position identified in this application?
          <textarea type="text" className="text-input" />
        </label>
      </div>
      <div className="pt10 box add-border-top">
        <p>
          Please list the activities/milestones/targets that will be used to
          achieve the mandatory benefit:
        </p>
      </div>
      <TableOne />
      <div className="gray-header x ">
        Complementary Benefit # 5
      </div>
      <div className="pt10 box add-border-top">
        <label >
          Which complementary benefit will be achieved by hiring a TFW for the
          position identified in this application?
          <textarea type="text" className="text-input" />
        </label>
      </div>
      <div className="pt10 box add-border-top">
        <p>
          Please list the activities/milestones/targets that will be used to
          achieve the mandatory benefit:
        </p>
      </div>
      <TableOne />
      <div className="gray-header x ">
        Complementary Benefit # 6
      </div>
      <div className="pt10 box add-border-top">
        <label >
          Which complementary benefit will be achieved by hiring a TFW for the
          position identified in this application?
          <textarea type="text" className="text-input" />
        </label>
      </div>
      <div className="pt10 box add-border-top">
        <p>
          Please list the activities/milestones/targets that will be used to
          achieve the mandatory benefit:
        </p>
      </div>
      <TableOne />
    </div>
  );
};

export default SectionTen;
