import React from "react";

const SectionEight = ({ data, handleChange }) => {
  return (
    <div className="add-border remove-border-top">
      <div className="gray-header add-border-bottom ">
        SECTION 8: LABOUR MARKET BENEFITS
      </div>
      <div className="box">
        <p>
          Does your organisation have an active Labour Market Benefits Plan?
        </p>
        <div className="mb10 checkbox-area2 ">
          <label className="check-box-container">
            No, <span className="ml20">If no, proceed to next section</span>
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <label className="check-box-container">
            Yes
            <span className="ml20">
              If yes, proceed to section 11 Signature of Employer
            </span>
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default SectionEight;
