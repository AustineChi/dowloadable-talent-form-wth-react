import React from "react";
import TableOne from "./utility/tableOne";
const SectionNine = ({ data, handleChange }) => {
  return (
    <div className="add-border remove-border-top remove-border-bottom">
      <div className="gray-header add-border-bottom ">
        SECTION 9: MANDATORY LABOUR MARKET BENEFIT (FOR FIRST GLOBAL TALENT
        APPLICATION ONLY)
      </div>
      <div className="box ">
        <p>
          All employers applying under the Global Talent Stream for the first
          time must complete
          <span className="bold-text">
            
            Section 9: Mandatory Labour Market Benefit and Section 10:
            Complementary Labour Market Benefits.
          </span>
        </p>
        <p>
          <span className="bold-text"> Important: </span> Employers who have
          already completed these sections, and are submitting a subsequent
          application under the Global Talent Stream, are not required to
          complete them again.
        </p>
      </div>
      <div className="add-border-top" />
      <div className="box">
        <p>
          In this section, you must choose the appropriate mandatory benefit
          from the list of mandatory benefits available in the Global Talent
          Applicant Guide. You must also describe the activities/milestones and
          targets that you will use to achieve the benefit.
        </p>
      </div>

      <div className="pt10 box add-border-top">
        <label >
          Which mandatory benefit will be achieved by hiring a TFW for the
          position identified in this application?
          <textarea type="text" className="text-input" />
        </label>
      </div>
      <div className="pt10 box add-border-top">
       <p>Please list the activities/milestones/targets that will be used to
        achieve the mandatory benefit:</p> 
      </div>
      <TableOne />
    </div>
  );
};

export default SectionNine;
