import React from "react";

const SectionOne = ({ data, handleChange }) => {
  return (
    <div className="add-border">
      <div className="gray-header add-border-bottom">
        SECTION 1: GLOBAL TALENT STREAM ELIGIBILITY
      </div>
      <div className="box add-border-bottom">
        <p>
          Does the occupation of the position(s) you are seeking to fill appear
          on the Global Talent Occupations List that has been published on the
          TFW Program website?
        </p>
        <div className="mb10 checkbox-area">
          <label className="check-box-container">
            Yes <span className="fw7">- skip to Section 2</span>
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <label className="check-box-container">
            No - Proceed to next question
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
        </div>
      </div>
      <div className="box">
        <p>
          Are you an innovative employer referred to the Global Talent Stream by
          an ESDC Designated Referral Partner?
        </p>
        <div className="mb10 checkbox-area">
          <label className="check-box-container">
            Yes
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <label className="check-box-container">
            No - you are not eligible to apply for an LMIA using this Global
            Talent Stream LMIA application form.
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
        </div>
      </div>
      <div className="gray-header add-border-top add-border-bottom">
        DESIGNATED REFERRAL PARTNER CONTACT INFORMATION
      </div>
      <div className="box pt10">
        <label>
          Designated Referral Partner Organization Name:
          <input type="text" className="text-input" />
        </label>
      </div>
      <div className="box-header">
        PRINCIPAL DESIGNATED REFERRAL PARTNER CONTACT INFORMATION
      </div>
      <div className="box add-flex">
        <div className="inner-box one">
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
        <div className="inner-box two">
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

      <div className="box add-border-top">
        <label >
        E-mail Address:
          <input type="text" className="text-input" />
        </label>
      </div>

      <div className="box add-flex add-border-top">
        <div className="inner-box one">
        <p>
        Preferred Official Language of Oral Communication:
        </p>
        <div className="mb10 checkbox-area">
          <label className="check-box-container">
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
        <p>
        Preferred Official Language of Written Communication:
        </p>
        <div className="mb10 checkbox-area">
        <label className="check-box-container">
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

      <div className="box-header">
      ALTERNATE DESIGNATED REFERRAL PARTNER CONTACT INFORMATION
      </div>

      <div className="box add-flex">
        <div className="inner-box one">
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
        <div className="inner-box two">
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

      <div className="box add-border-top">
        <label >
        E-mail Address:
          <input type="text" className="text-input" />
        </label>
      </div>

      <div className="box add-flex add-border-top">
        <div className="inner-box one">
        <p>
        Preferred Official Language of Oral Communication:
        </p>
        <div className="mb10 checkbox-area">
          <label className="check-box-container">
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
        <p>
        Preferred Official Language of Written Communication:
        </p>
        <div className="mb10 checkbox-area">
        <label className="check-box-container ">
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

    </div>
  );
};

export default SectionOne;
