import React from 'react';
import canadaImage from "../../../images/canada.jpg";
const FormHeader = () => {
    return ( 
    <div className="form-header">
    <div className="add-flex fk">
    <div className="one add-flex">
    <img src={canadaImage} className="image-style" alt="logo" />
     <span className="one ml20">Employment and <br/>
Social Development Canada</span>
    </div>
    <div className=""> Emploi et <br/>
Développement social Canada</div>
    <div className="one-and-half float-right">
    Please Print <br/>
PROTECTED WHEN COMPLETED - B
    </div>
    </div>
        <h1>GLOBAL TALENT STREAM APPLICATION</h1>
<p className="bold-text mb20 mt20 fs16">
Employers should visit the <a href="/">Temporary Foreign Worker (TFW) Program website,</a>   to verify that the Program is accepting applications
for the specific occupation or sector for which they wish to hire the temporary foreign worker (TFW) and to determine if they are
eligible to participate in the Program. 
</p>
<h3 className="mb20 mt20">Privacy Notice Statement</h3>
<p>The personal information that you provide is collected by Employment and Social Development Canada (ESDC) under the authority of the <span className="oblique"> Immigration and Refugee Protection Act</span>
(IRPA) and the<span className="oblique"> Immigration and Refugee Protection Regulations</span> (IRPR), for the purpose of administering and enforcing the TFW Program.</p>
<p>The information that you provide may be shared with: Immigration, Refugees and Citizenship Canada and the Canada Border Services Agency for the administration and enforcement
of the TFW Program and IRPA/IRPR; the Canada Revenue Agency for the administration and enforcement of the TFW Program; and, provincial/territorial governments for the
administration and enforcement of provincial/territorial legislation and programs. The information may also be used by ESDC for research and evaluation purposes and to support the
administration or enforcement of other programs in ESDC, including Service Canada and the Labour Program.</p>
<p>This information may also be shared with any Party identified by the employer on the LMIA application form or in the employment agreement.</p>
<p>Your personal information is administered in accordance with the IRPA, IRPR, the Privacy Act, the Department of Employment and Social Development Act (DESDA) and other
applicable laws. You have the right to the protection of, access to, and correction of your personal information, which is described in Personal Information Banks: TFWP ESDC PPU
440 and TFWP Employer Compliance Reviews and Inspections ESDC PPU 715. Instructions for obtaining this information are outlined in the <a href="/">Treasury Board of Canada Secretariat
website.</a> </p>
<p>This website may also be accessed on-line at any Service Canada Centre. You have the right to file a complaint with the Privacy Commissioner of Canada regarding the institution's
handling of your personal information on the <a href="/"> Office of the Privacy Commissioner of Canada website.</a></p>
<p className="bold-text mt40">A person, who contravenes a provision set out under sections 126 or 127 of the Immigration and Refugee Protection Act (misrepresentation), could be liable to a fine or to
imprisonment, or to both. Also, providing inaccurate information, in the context of this application, may lead to an administrative penalty such as being ineligible to
access the Program for a period of two years.</p>
    </div> );
}
 
export default FormHeader;