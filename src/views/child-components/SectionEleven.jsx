import React from "react";

const SectionEleven = ({ data, handleChange }) => {
  return (
    <div className="add-border remove-border-top">
      <div className="gray-header add-border-bottom ">
      SECTION 11: SIGNATURE OF EMPLOYER
      </div>
      <div className="pt10 box">
        <p>
          The individual signing this form must have authority for either the
          hiring or financial decisions of the organization (e.g. owner,
          franchisee, general manager, or senior executive - such as VP Human
          Resources).
        </p>
        <p>
          I have read and I understand the Privacy Notice Statement found at the
          beginning of this application.
        </p>
        <p>
          I declare that the information provided in this Labour Market Impact
          Assessment application is true, accurate and complete.
        </p>
        <p>
          By signing this document I attest that I have read and understood the
          Privacy Notice Statement found at the beginning of this application;
          that the information provided in this Labour Market Impact Assessment
          application is true, accurate and complete; and I will comply with all
          Temporary Foreign Worker Program requirements as laid out, the
          Immigration and Refugee Protection Act, and the Immigration and
          Refugee Protection Regulations.
        </p>
      </div>

      <div className="box2 add-flex ">
        <div className="inner-box one">
          <input type="text" className="text-input3 " />
          <label>Signature of Employer</label>
        </div>

        <div className="inner-box one">
          <input type="text" className="text-input3" />
          <label>Printed Name of the Employer</label>
        </div>
      </div>
      <div className="box2 add-flex ">
        <div className="inner-box one">
          <input type="text" className="text-input3 " />
          <label>Title of Employer</label>
        </div>

        <div className="inner-box one">
          <input type="text" className="text-input3" />
          <label>Date (YYYY-MM-DD)</label>
        </div>
      </div>
      <div className="box">
        <p className="bold-text mb10 mt10">
          A person, who contravenes a provision set out under sections 126 or
          127 of the Immigration and Refugee Protection Act (misrepresentation),
          could be liable to a fine or to imprisonment, or to both. Also,
          providing inaccurate information, in the context of this application,
          may lead to an administrative penalty such as being ineligible to
          access the Program for a period of two years.
        </p>
      </div>

      <div className="gray-header add-border-bottom add-border-top">
        SECTION 11a: DECLARATION OF THE THIRD-PARTY REPRESENTATIVE
      </div>
      <div className="box">
        <p className="mb10">
          I, hereby, declare that the information in
          <span className="bold-text">Section 4: THIRD-PARTY INFORMATION</span>className=
          is true, accurate and complete.
        </p>
      </div>
      <div className="box2 add-flex mb20 ">
        <div className="inner-box two">
          <input type="text" className="text-input3 " />
          <label>Signature of the Third-party Representative</label>
        </div>
        <div className="inner-box two">
          <input type="text" className="text-input3 " />
          <label>Printed name of the Third-party Representative</label>
        </div>
        <div className="inner-box one">
          <input type="text" className="text-input3" />
          <label>Date (YYYY-MM-DD)</label>
        </div>
      </div>

      <div className="gray-header add-border-bottom add-border-top">
        SECTION 11b : APPOINTMENT OF THIRD-PARTY (IF APPLICABLE)
      </div>
      <div className="box">
        <p className="bold-text">
          FOR THE PURPOSE OF THIS LABOUR MARKET IMPACT ASSESSMENT APPLICATION:
        </p>
        <p>
          I, hereby, appoint the third-party named in
          <span className="bold-text"> SECTION 4: THIRD-PARTY INFORMATION </span>
           as my representative to act on my behalf in order to obtain a Labour
          Market Impact Assessment from ESDC/Service Canada in order to hire a
          foreign national for the position described above.
        </p>
        <p>
          I, hereby, agree to ratify and confirm all that my third-party
          representative shall do or cause to be done by virtue of this
          appointment.
        </p>
        <p>
          This appointment shall remain in full force and effect only for the
          processing of this application, unless due notice in writing of its
          revocation has been given to ESDC/Service Canada.
        </p>
      </div>
      <div className="box2 add-flex mb20 ">
        <div className="inner-box two">
          <input type="text" className="text-input3 " />
          <label>Signature of Employer</label>
        </div>
        <div className="inner-box two">
          <input type="text" className="text-input3 " />
          <label>Printed Name of Employer</label>
        </div>
        <div className="inner-box one">
          <input type="text" className="text-input3" />
          <label>Date (YYYY-MM-DD)</label>
        </div>
      </div>
      <div className="box2 add-flex mb20 ">
        <div className="inner-box two">
          <input type="text" className="text-input3 " />
          <label>Signature of Witness</label>
        </div>
        <div className="inner-box two">
          <input type="text" className="text-input3 " />
          <label>Printed Name of Witness</label>
        </div>
        <div className="inner-box one">
          <input type="text" className="text-input3" />
          <label>Date (YYYY-MM-DD)</label>
        </div>
      </div>
    </div>
  );
};

export default SectionEleven;
