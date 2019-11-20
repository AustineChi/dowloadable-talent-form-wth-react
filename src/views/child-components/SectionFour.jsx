import React from "react";

const SectionFour = ({ data, handleChange }) => {
  return (
    <div className="add-border remove-border-top">
      <div className="gray-header add-border-bottom ">
        SECTION 4: THIRD-PARTY INFORMATION
      </div>
      <div className="box">
        <div className=" checkbox-area2 ">
          <p>
            
            Are you appointing a third-party to represent you in completing this
            application or to provide advice in an immigration process?
          </p>
          <label className="check-box-container">
            Yes - If yes, continue completing 
            <span className="bold-text">  Section 4: Third-Party Information
            </span>
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <label className="check-box-container">
            No - If no, skip to 
             <span className="bold-text"> Section 5: Job Offer Details </span>
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
        </div>
        <div className=" add-border-top">
          <label >
            Canada Revenue Agency Payroll deductions program account number (15
            digits):
            <input type="text" className="text-input" />
          </label>
        </div>
        <div className=" add-flex add-border-top">
          <div className="inner-box one">
            <label>
              Business Legal Name:
              <input type="text" className="text-input " />
            </label>
          </div>
          <div className="inner-box one add-border-left">
            <label>
              Business Operating Name (if different from Legal Name):
              <input type="text" className="text-input" />
            </label>
          </div>
        </div>
        <div className="box-header">THIRD-PARTY CONTACT INFORMATION</div>
        <div className=" add-flex ">
          <div className="inner-box one">
            <label>
              Job Title:
              <input type="text" className="text-input" />
            </label>
          </div>
          <div className="inner-box one add-border-left">
            <label>
              First Name:
              <input type="text" className="text-input" />
            </label>
          </div>
          <div className="inner-box one">
            <label>
              Middle Name:
              <input type="text" className="text-input" />
            </label>
          </div>

          <div className="inner-box one">
            <label>
              Last Name:
              <input type="text" className="text-input" />
            </label>
          </div>
        </div>

        <div className="box add-flex add-border-top">
          <div className="inner-box one">
            <label>
              Telephone Number:
              <input type="text" className="text-input" />
            </label>
          </div>
          <div className="inner-box one">
            <label>
              Ext.:
              <input type="text" className="text-input" />
            </label>
          </div>
          <div className="inner-box one add-border-left">
            <label>
              Alternate Telephone Number:
              <input type="text" className="text-input" />
            </label>
          </div>
          <div className="inner-box one">
            <label>
              Ext.:
              <input type="text" className="text-input" />
            </label>
          </div>
          <div className="inner-box one add-border-left ">
            <label>
              Fax Number:
              <input type="text" className="text-input" />
            </label>
          </div>
        </div>

        <div className="add-border-top ">
          <label>
            E-mail Address:
            <input type="text" className="text-input " />
          </label>
        </div>
        <div className=" add-flex add-border-top">
          <div className="inner-box one">
            <p>Preferred Official Language of Oral Communication:</p>
            <div className="mb10 checkbox-area">
              <label className="check-box-container x">
                English
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
              <label className="check-box-container">
                French
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </div>
          </div>
          <div className="inner-box one add-border-left">
            <p>Preferred Official Language of Written Communication:</p>
            <div className="mb10 checkbox-area">
              <label className="check-box-container x">
                English
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
              <label className="check-box-container">
                French
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </div>
          </div>
        </div>

        <div className="add-flex add-border-top">
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

        <div className=" add-flex">
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
        <div className=" add-flex add-border-top">
          <div className="inner-box two ">
            <div className="add-flex">
              <label>
                Mailing Address (if different from business address):
              </label>
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

        <div className="add-border-top">
          <p>
            Is the third-party being paid by the employer to represent them for
            the purpose of obtaining this Labour Market Impact Assessment
            (LMIA)?:
          </p>
          <div className=" add-flex">
            <div className="inner-box one">
              <label className="check-box-container">
                Yes - If yes, which one applies to the Third-Party?
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>

              <div className="inner-box checkbox-area2">
                <label className="check-box-container">
                  A member of the Immigration Consultants of Canada Regulatory
                  Council (ICCRC)
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <label className="add-flex">
                  <span className="">Membership ID:</span>
                  <input type="text" className="text-input3  auto-width" />
                </label>
                <label className="check-box-container">
                  A member of the law society of the following
                  province/territory
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <label>
                  <input type="text" className="text-input3" />
                </label>
                <label className="add-flex">
                  <span className="">Membership ID:</span>
                  <input type="text" className="text-input3  auto-width" />
                </label>
                <label className="check-box-container">
                  Other (please describe):
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <label>
                  <input type="text" className="text-input3" />
                </label>
              </div>
            </div>
            <div className="inner-box one add-border-left">
              <label className="check-box-container">
                No - If no, which one applies from these options?
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
              <div className="inner-box checkbox-area2">
                <label className="check-box-container">
                  a family member or a friend
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <label className="check-box-container">
                  a member of a non-governmental or a religious organization
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <label className="check-box-container">
                  a member in good standing of the Immigration Consultants of
                  Canada Regulatory Council (ICCRC), a provincial or territorial
                  law society or the Chambre des notaires du Québec doing
                  pro-bono work
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <label className="check-box-container">
                  Other (please describe):
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <label>
                  <input type="text" className="text-input3" />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
