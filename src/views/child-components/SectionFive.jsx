import React from "react";

const SectionFive = ({ data, handleChange }) => {
  return (
    <div className="add-border remove-border-top">
      <div className="gray-header add-border-bottom ">
        SECTION 5: JOB OFFER DETAILS
      </div>
      <div className="box">
        <p>
          In this section, please provide details about the job offer and the
          position (with the same duration, wage, job description, and work
          location) for which the employer is requesting a TFW or TFW(s).
        </p>
        <p>
          <span className="bold-text">Note: </span> If the employer is applying
          for additional occupations at this time, or for any TFWs with
          different wage rates within the same position, they must complete anclassName=
          <span className="bold-text">Annex 1: Additional Occupation </span>for
          each additional occupation or position with a different wage that must
          be assessed.
        </p>
        <div className=" add-flex add-border-top">
          <div className="inner-box one">
            <label>
              Job Title:
              <input type="text" className="text-input " />
            </label>
          </div>
          <div className="inner-box one add-border-left">
            <label>
              Suggested National Occupational Classification (NOC):
              <input type="text" className="text-input" />
            </label>
          </div>
        </div>
        <div className=" add-border-top">
          <label >
            How many TFWs is the employer requesting for this job offer and
            position (with same duration, wage, job description, work location,
            etc.)?
            <input type="text" className="text-input" />
          </label>
        </div>
        <div className=" add-border-top">
          <label >
            Main duties of the job:
            <textarea type="text" className="text-input" />
          </label>
        </div>
        <div className=" add-flex add-border-top">
          <div className="inner-box one">
            <label>
              Expected employment start date (YYYY-MM-DD):
              <input type="text" className="text-input " />
            </label>
          </div>
          <div className="inner-box one add-border-left">
            <p>Expected employment duration:</p>
            <div className="mb10 checkbox-area">
              <label className="check-box-container">
                day(s)
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
              <label className="check-box-container">
                week(s)
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
              <label className="check-box-container">
                month(s)
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
              <label className="check-box-container">
                year(s)
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </div>
          </div>
        </div>
        <div className=" add-border-top">
          <label >
            Employment duration rationale:
            <textarea type="text" className="text-input" />
          </label>
        </div>
        <p className="bold-text">
          Note: 2 years is the maximum duration of employment for Labour Market
          Impact Assessments issued under the Global Talent Stream
        </p>
        <div className="inner-box one add-border-left">
          <p>Is the position part of a union?</p>
          <div className="mb10 checkbox-area">
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
        </div>
        <p>
          Indicate the language requirement stated in the offer of employment:
        </p>
        <div className="mb10 checkbox-area2 ">
          <label className="check-box-container">
            The offer of employment does not require the ability to communicate
            in any specific language.
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <label className="check-box-container">
            The offer of employment requires the ability to communicate orally
            in:
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
        </div>
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
          <label className="check-box-container">
            English and French
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
        </div>
        <div className="mb10 checkbox-area2 ">
          <label className="check-box-container">
            The offer of employment requires the ability to communicate in
            writing in:
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
        </div>
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
          <label className="check-box-container">
            English and French
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
        </div>
        <div className="mb10 checkbox-area2 ">
          <label className="check-box-container">
            The offer of employment requires the ability to communicate in a
            language other than English and French.
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
        </div>
        <p>
          If this option is selected, identify the specific language needed and
          clearly describe why this is a bona fide employment requirement for
          performing the duties associated with the employment (if insufficient
          space, attach a separate signed and dated sheet):
        </p>
        <textarea type="text" className="text-input" />

        <div className="add-border-top">
          <p>Minimum education requirements of the job:</p>
          <div className=" add-flex ">
            <div className="inner-box one checkbox-area2">
              <label className="check-box-container">
                Doctorate/PhD
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
              <label className="check-box-container">
                Bachelor's degree
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
              <label className="check-box-container">
                Trade diploma/certificate
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
              <label className="check-box-container">
                No formal education requirement
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </div>
            <div className="inner-box one checkbox-area2">
              <label className="check-box-container">
                Doctor of Medicine
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
              <label className="check-box-container">
                College level diploma/certificate
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
              <label className="check-box-container">
                Secondary school
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </div>
            <div className="inner-box one checkbox-area2">
              <label className="check-box-container">
                Master's degree
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
              <label className="check-box-container">
                Apprenticeship diploma/certificate
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
              <label className="check-box-container">
                Vocational school diploma/certificate
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </div>
          </div>
          <label>Additional Information:</label>
          <textarea type="text" className="text-input" />
        </div>

        <div className="add-border-top">
          <label>
            Minimum experience/skills requirements of the job: (include years of
            experience and/or occupational designations such as CA, CMA, CGA,
            R.N., P. Eng)
          </label>
          <textarea type="text" className="text-input" />
        </div>
        <div className="add-border-top">
          <p>
            Have you tried to recruit Canadians/permanent residents prior to
            submitting your application for this job?
          </p>
          <div className="inner-box one checkbox-area2">
            <label className="check-box-container">
              Yes - Please describe your efforts to recruit Canadians/permanent
              residents:
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
            <textarea type="text" className="text-input" />
            <label className="check-box-container">
              No - Please explain why you have not attempted to recruit
              Canadians/permanent residents:
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
            <textarea type="text" className="text-input" />
          </div>
        </div>
        <div className="add-border-top">
          <p>
            Were any employees working in the position being requested in this
            application laid off by the employer in the last 12 months?
          </p>
          <div className="add-flex">
            <div className="mb10 checkbox-area">
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
              <label className="add-flex">
                <span> If yes, how many Canadians/permanent residents?</span>
                <input type="text" className="text-input3 auto-width" />
                <span> How many TFWs? </span>
                <input type="text" className="text-input3 auto-width" />
              </label>
            </div>
          </div>
          <label className="mt10">
            Reason(s) for layoff(s) and positions affected:
          </label>
          <textarea type="text" className="text-input" />
        </div>
        <div className="add-border-top mb10">
          <p>
            Will the hiring of the TFW in the position being requested in this
            application lead to job losses or a reduction in work hours due to
            layoffs, now or in the foreseeable future, for Canadian/permanent
            resident employees in your workforce or in the Canadian workforce
            more generally? This includes job losses or reductions in work hours
            for Canadian/permanent resident employees resulting from
            outsourcing, off-shoring or other factors related to employing the
            TFW in the position being requested in this application. For the
            definition of outsourcing and off-shoring, see the applicant guide.
          </p>
          <div className="add-flex ">
            <div className="mb10 checkbox-area">
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
              If yes, provide details on the impact of hiring this TFW on your
              workforce and the Canadian workforce more generally:
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
