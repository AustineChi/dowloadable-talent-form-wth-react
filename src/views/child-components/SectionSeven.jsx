import React from 'react';

const SectionSeven = ({data, handleChange}) => {
    return ( 
        <div className="add-border remove-border-top">
        <div className="gray-header add-border-bottom">
        SECTION 7: WORK LOCATION
        </div>
        <div className="box pt10">
        <label >
        Describe in your own words and in as much details as possible the principal business activity at this work location:
          <textarea  className="text-input" />
        </label>
      </div>
      <div className="box pt10">
        <label >
        Business operating name of this work location:
          <input type="text" className="text-input" />
        </label>
      </div>
      <div className="gray-header add-border-bottom add-border-top">
      PRIMARY WORK LOCATION
        </div>
        <div className="box pt10">
        <label >
        Provide the exact location of the TFW(s) primary work location:
          <input type="text" className="text-input" />
        </label>
      </div>

      <div className="box add-flex add-border-top">
        <div className="inner-box one-and-half">
          <label>
          City:
            <input type="text" className="text-input " />
          </label>
        </div>
        <div className="inner-box one-and-half add-border-left">
          <label>
          Province/Territory:
            <input type="text" className="text-input" />
          </label>
        </div>

        <div className="inner-box one add-border-left">
          <label>
          Postal Code:
            <input type="text" className="text-input" />
          </label>
        </div>
      </div>
      <div className="gray-header add-border-bottom add-border-top">
      OTHER WORK LOCATION(S)
        </div>
        <div className="box pt10">
        <label >
        Provide the exact location of any other work locations for this job offer (attach a separate page if required):
          <input type="text" className="text-input" />
        </label>
      </div>

      <div className="box add-flex add-border-top">
        <div className="inner-box one-and-half">
          <label>
          City:
            <input type="text" className="text-input " />
          </label>
        </div>
        <div className="inner-box one-and-half add-border-left">
          <label>
          Province/Territory:
            <input type="text" className="text-input" />
          </label>
        </div>

        <div className="inner-box one add-border-left">
          <label>
          Postal Code:
            <input type="text" className="text-input" />
          </label>
        </div>
      </div>
      <div className="box add-border-top">
        <p>
          Is there a labour dispute in progress at the job location?
        </p>
        <div className="add-flex">
          <div className="mb10 checkbox-area one">
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

          <div className="inner-box two ">
            <label>
            If yes, provide details regarding the labour dispute:
              <input type="text" className="text-input" />
            </label>
          </div>
        </div>
      </div>

    </div> );
}
 
export default SectionSeven;