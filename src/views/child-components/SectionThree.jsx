import React from "react";

const SectionThree = ({ data, handleChange }) => {
  return (
    <div className="add-border remove-border-top">
      <div className="gray-header add-border-bottom">
        SECTION 3: EMPLOYER CONTACT INFORMATION
      </div>
      <div className="box-header remove-border-top">
        PRINCIPAL EMPLOYER CONTACT INFORMATION
      </div>

      <div className="box add-flex ">
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

      <div className="box add-flex add-border-top">
        <div className="inner-box one">
          <p>Preferred Official Language of Oral Communication:</p>
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
          <p>Preferred Official Language of Written Communication:</p>
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

      <div className="box-header">ALTERNATE EMPLOYER CONTACT INFORMATION</div>

      <div className="box add-flex ">
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

      <div className="box add-flex add-border-top">
        <div className="inner-box one">
          <p>Preferred Official Language of Oral Communication:</p>
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
          <p>Preferred Official Language of Written Communication:</p>
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
    </div>
  );
};

export default SectionThree;
