import React, { Component } from "react";
import SectionOne from "./child-components/SectionOne";
import SectionTwo from "./child-components/SectionTwo";
import SectionThree from "./child-components/SectionThree";
import SectionFour from "./child-components/SectionFour";
import SectionFive from "./child-components/SectionFive";
import SectionSix from "./child-components/SectionSix";
import SectionSeven from "./child-components/SectionSeven";
import SectionEight from "./child-components/SectionEight";
import SectionNine from "./child-components/SectionNine";
import SectionTen from "./child-components/SectionTen";
import SectionEleven from "./child-components/SectionEleven";
import FormHeader from "./child-components/utility/formHeader";
import Doc from "../views/pdfTemplate/DocService";
import PdfContainer from "../views/pdfTemplate/PdfContainer";

class GTSAForm extends Component {
  state = {
    modal: false,
    data: {}
  };

  modalToggle = () => {
    this.setState({ modal: !this.state.modal });
  };
  handleChange = e => {
    let data = this.state.data;
    data[[e.target.name]] = e.target.value;
    this.setState({
      data
    });
  };

  createPdf = html => Doc.createPdf(html);

  render() {
    // console.log(<FormHeader />, "hello")
    // console.log(this, "hello 2")

    return (
      <div>
        <div className="container">
    
          <button className="btn download-btn" onClick={this.modalToggle}>
            Create PDF
          </button>
          <FormHeader />
          <SectionOne
            data={this.state.data}
            handleChange={this.state.handleChange}
          />
          <SectionTwo
            data={this.state.data}
            handleChange={this.state.handleChange}
          />
          <SectionThree
            data={this.state.data}
            handleChange={this.state.handleChange}
          />
          <SectionFour data={""} handleChange={""} />
          <SectionFive
            data={this.state.data}
            handleChange={this.state.handleChange}
          />
          <SectionSix
            data={this.state.data}
            handleChange={this.state.handleChange}
          />
          <SectionSeven
            data={this.state.data}
            handleChange={this.state.handleChange}
          />
          <SectionEight
            data={this.state.data}
            handleChange={this.state.handleChange}
          />
          <SectionNine
            data={this.state.data}
            handleChange={this.state.handleChange}
          />
          <SectionTen
            data={this.state.data}
            handleChange={this.state.handleChange}
          />
          <SectionEleven
            data={this.state.data}
            handleChange={this.state.handleChange}
          />
        </div>
        <div
          id="myModal"
          className={`modal ${this.state.modal ? "display" : ""}`}
        >
          <div className="modal-content">
            <div className="container">
              <span className="close" onClick={this.modalToggle}>
                &times;
              </span>
              <PdfContainer createPdf={this.createPdf}>
                <FormHeader />

                <SectionOne
                  data={this.state.data}
                  handleChange={this.state.handleChange}
                />
                <SectionTwo
                  data={this.state.data}
                  handleChange={this.state.handleChange}
                />
                <SectionThree
                  data={this.state.data}
                  handleChange={this.state.handleChange}
                />
                <SectionFour data={""} handleChange={""} />
                <SectionFive
                  data={this.state.data}
                  handleChange={this.state.handleChange}
                />
                <SectionSix
                  data={this.state.data}
                  handleChange={this.state.handleChange}
                />
                <SectionSeven
                  data={this.state.data}
                  handleChange={this.state.handleChange}
                />
                <SectionEight
                  data={this.state.data}
                  handleChange={this.state.handleChange}
                />
                <SectionNine
                  data={this.state.data}
                  handleChange={this.state.handleChange}
                />
                <SectionTen
                  data={this.state.data}
                  handleChange={this.state.handleChange}
                />
                <SectionEleven
                  data={this.state.data}
                  handleChange={this.state.handleChange}
                />
              </PdfContainer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GTSAForm;
