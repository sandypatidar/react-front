import React from "react";
import Footer from "../Footer";
import Olympiad from "../../utility/images/Olympiad-slider.jpg";
import Olympiad1 from "../../utility/images/Olympiad-slider1.jpg";
import Olympiad2 from "../../utility/images/Olympiad-slider2.jpg";
import "./Contact.css";
class Contact extends React.Component {
  render() {
    return (
      <>
        <div className="container-fluid pad-0">
          <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="15000">
            <ol className="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>

            <div className="carousel-inner" id="Topslider">

              <div className="item active">
                <img className="img-size" src={Olympiad} alt="Cricket Olympiad" title="Cricket Olympiad" />
                <div className="carousel-caption headr-slide-tex" style={{ marginLeft: "5%" }}>

                  <button type="button" onClick="headerbtn()" className="btn btn-primary bt-header glow">REGISTER NOW  </button>


                </div>
              </div>

              <div className="item">
                <img src={Olympiad1} alt="Cricket Olympiad" title="Cricket Olympiad" />
                <div className="carousel-caption headr-slide-tex" style={{ marginLeft: "-8%" }}>


                  <button type="button" onClick="headerbtn()" className="btn btn-primary bt-header1 glow">REGISTER NOW  </button>

                </div>
              </div>

              <div className="item">
                <img src={Olympiad2} alt="Cricket Olympiad" title="Cricket Olympiad" />
                <div className="carousel-caption headr-slide-tex" style={{ marginLeft: "-7%;" }}>

                  <button type="button" onClick="headerbtn()" className="btn btn-primary bt-header2 glow">REGISTER NOW  </button>

                </div>
              </div>

            </div>


            <a className="left carousel-control" href="#myCarousel" data-slide="prev">
              <span className="glyphicon glyphicon-chevron-left"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#myCarousel" data-slide="next">
              <span className="glyphicon glyphicon-chevron-right"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
export default Contact;
