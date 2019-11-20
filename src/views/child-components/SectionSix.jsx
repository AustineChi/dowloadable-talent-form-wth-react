import React from "react";

const SectionSix = ({ data, handleChange }) => {
  return (
    <div className="add-border remove-border-top">
      <div className="gray-header add-border-bottom ">
        SECTION 6: COMPENSATON AND BENEFITS
      </div>
      <div className="box">
        <p>
          What is the wage range for all employees currently working in this
          same occupation, with the same skills and years of experience, at this
          work location?
        </p>
        <div className="inner-box one mb10">
          <label className="add-flex">
            <span>Low-wage: $</span>
            <input type="text" className="text-input3 auto-width" />
            <span>High-wage: $ </span>
            <input type="text" className="text-input3 auto-width" />
          </label>
        </div>
        <div className="checkbox-area">
          <span className="bold-text ms20">OR</span>
          <label className="check-box-container">
            There are no employees currently working in this occupation at this
            work location
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
        </div>
        <p className="mt10">
          <span className="bold-text"> Note: </span> The wage range should be
          from the last two pay periods that have occurred within the six weeks
          prior to submitting the application.
        </p>
        <div className="add-border-top">
          <p>
            Is the job offer for full-time employment (at least 30 hours of work
            per week) throughout the duration of employment covered by the LMIA?
          </p>
          <div className="add-flex ">
            <div className="mb10 checkbox-area">
              <label className="check-box-container">
                Yes
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
              <label className="check-box-container">
                No
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </div>
            <div className="inner-box one">
              <label>
                If no, explain:
                <textarea type="text" className="text-input" />
              </label>
            </div>
          </div>
        </div>
        <div className="add-border-top add-flex ">
          <div className="inner-box one">
            <label>
              How many hours will the TFW work each day?
              <input type="text" className="text-input " />
            </label>
          </div>
          <div className="inner-box one add-border-left ">
            <p>How many hours will the TFW work each (choose one)?</p>
            <label className="add-flex mb10">
              <span className="x">Week:</span>
              <input type="text" className="text-input3 auto-width" />
              <span>Month: </span>
              <input type="text" className="text-input3 auto-width" />
            </label>
          </div>
        </div>
        <div className="add-border-top add-flex ">
          <div className="inner-box one">
            <p>
              What is the regular (non-overtime) wage in Canadian dollars per
              hour being offered to the TFW?
            </p>
            <div className="inner-box one mb10 mt10">
              <label className="add-flex">
                <span>$ per hour (mandatory)</span>
                <input type="text" className="text-input3 auto-width" />
              </label>
            </div>
            <p>
              {" "}
              <span className="bold-text">Note: </span> Employers must provide
              the calculation of an hourly wage in Canadian dollars, even if the
              position is salaried or paid in foreign currency.
            </p>
          </div>
          <div className="inner-box one add-border-left">
            <p>
              What is the overtime wage in Canadian dollars per hour being
              offered to the TFW (if applicable)?
            </p>
            <label className="add-flex">
              <span>Overtime rate of $ per hour:</span>
              <input type="text" className="text-input3 auto-width" />
            </label>
            <label className="add-flex">
              <span>Starting after:</span>
              <input type="text" className="text-input3 auto-width" />
              <span>hours per day</span>
            </label>
            <span className="bold-text ml50Percent">OR</span>
            <label className="add-flex">
              <span className="white-text">Starting after:</span>
              <input type="text" className="text-input3 auto-width" />
              <span>hours per week</span>
            </label>
          </div>
        </div>

        <div className="add-border-top">
          <p>
            Did you convert the wage from a monthly or yearly salary, or a
            currency other than Canadian dollars, or both?
          </p>
          <div className="add-flex ">
            <div className="mb10 checkbox-area">
              <label className="check-box-container">
                No
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
              <label className="check-box-container">
                YES
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </div>
            <div className="inner-box one">
              <label>
                If yes, provide calculations used to obtain hourly Canadian
                dollar wage:
                <textarea type="text" className="text-input" />
              </label>
            </div>
          </div>
        </div>

        <div className="add-border-top mb10">
          <p>Benefits:</p>
          <div className="mb10 checkbox-area">
            <label className="check-box-container">
              Disability Insurance
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
            <label className="check-box-container">
              Dental Insurance
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
            <label className="check-box-container">
              Pension
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
            <label className="check-box-container">
              Extended medical insurance (e.g. prescription drugs, paramedical
              services, medical services and equipment)
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
          </div>
        </div>
        <div className="add-border-top">
          <label>
            Other benefits (specify):
            <textarea type="text" className="text-input" />
          </label>
        </div>
        <div className="add-border-top mb10">
          <p>Vacation (if applicable):</p>
          <div className=" add-flex">
            <div className="inner-box one">
              <label className="add-flex">
                <span>Days</span>
                <input type="text" className="text-input3 auto-width" />
                <span>(number of business days per year) </span>
              </label>
            </div>
            <div className="inner-box one">
              <label className="add-flex">
                <span>Remuneration:</span>
                <input type="text" className="text-input3 auto-width" />
                <span>(% of gross salary) </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionSix;