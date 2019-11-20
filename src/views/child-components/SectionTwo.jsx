import React from "react";

const SectionTwo = ({ data, handleChange }) => {
  return (
    <div className="add-border remove-border-top">
      <div className="gray-header add-border-bottom">
        SECTION 2: EMPLOYER BUSINESS INFORMATON
      </div>
      <div className="box pt10">
        <label >
          Canada Revenue Agency Payroll deductions program account number (15
          digits):
          <input type="text" className="text-input" />
        </label>
      </div>
      <div className="box add-border-top pt10">
        <label >
          Business Legal Name:
          <input type="text" className="text-input" />
        </label>
      </div>

      <div className="box add-flex add-border-top">
        <div className="inner-box two ">
          <div className="add-flex">
            <label>Business Address:</label>
            <input type="text" className="text-input2" />
          </div>
          <div>
            <label>
              Line 1 :
              <input type="text" className="text-input" />
            </label>
          </div>
        </div>
        <div className="inner-box one add-border-left">
          <label>
            City:
            <input type="text" className="text-input" />
          </label>
        </div>
        <div className="inner-box one add-border-left">
          <label>
            Province/Territory/State:
            <input type="text" className="text-input" />
          </label>
        </div>
      </div>

      <div className="box add-flex">
        <div className="inner-box two">
          <label>
            Line 2 :
            <input type="text" className="text-input" />
          </label>
        </div>
        <div className="inner-box one add-border-left add-border-top">
          <label>
            Country:
            <input type="text" className="text-input" />
          </label>
        </div>
        <div className="inner-box one add-border-left add-border-top">
          <label>
            Postal/Zip Code:
            <input type="text" className="text-input" />
          </label>
        </div>
      </div>
      <div className="box add-flex add-border-top">
        <div className="inner-box two ">
          <div className="add-flex">
            <label>Mailing Address (if different from business address):</label>
            <input type="text" className="text-input2" />
          </div>
          <div>
            <label>
              Line 1 :
              <input type="text" className="text-input" />
            </label>
          </div>
        </div>
        <div className="inner-box one add-border-left">
          <label>
            City:
            <input type="text" className="text-input" />
          </label>
        </div>
        <div className="inner-box one add-border-left">
          <label>
            Province/Territory/State:
            <input type="text" className="text-input" />
          </label>
        </div>
      </div>

      <div className="box add-flex">
        <div className="inner-box two">
          <label>
            Line 2 :
            <input type="text" className="text-input" />
          </label>
        </div>
        <div className="inner-box one add-border-left add-border-top">
          <label>
            Country:
            <input type="text" className="text-input" />
          </label>
        </div>
        <div className="inner-box one add-border-left add-border-top">
          <label>
            Postal/Zip Code:
            <input type="text" className="text-input" />
          </label>
        </div>
      </div>
      <div className="box add-flex add-border-top">
        <div className="inner-box two">
          <label>
            Website Address:
            <input type="text" className="text-input" />
          </label>
        </div>
        <div className="inner-box one add-border-left">
          <label>
            Date business started (YYYY-MM-DD):
            <input type="text" className="text-input" />
          </label>
        </div>
      </div>
      <div className="box add-border-top">
        <p>Organization type and structure (select all that apply):</p>
        <div className="mb10 ms-label">
          Business:
          <label className="check-box-container">
            sole proprietorship
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <label className="check-box-container">
            partnership
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <label className="check-box-container">
            corporation
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <label className="check-box-container">
            co-operative
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          Other:
          <label className="check-box-container">
            non-profit
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <label className="check-box-container">
            registered charity
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
        </div>
      </div>

      <div className="box add-flex add-border-top">
        <div className="inner-box one-eight">
          <label>
            How many employees are employed nationally under the employer's
            Canada Revenue Agency business number?
            <input type="text" className="text-input" />
          </label>
        </div>
        <div className="inner-box one add-border-left">
          <label>
            What is the annual gross revenue of the business (in $CAD)
            <input type="text" className="text-input" />
          </label>
        </div>
      </div>

      <div className="box add-border-top">
        <p>
          Does your business receive support through Employment and Social
          Development Canada's Work-Sharing Program?
        </p>
        <div className="add-flex mb10">
          <div className=" checkbox-area">
            <label className="check-box-container">
              No
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
            <label className="check-box-container">
              Yes
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
          </div>

          <div className="inner-box one ">
            <label>
              If yes, provide details:
              <input type="text" className="text-input" />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
