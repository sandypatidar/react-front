/* eslint-disable no-unused-vars */
/* eslint-disable react/no-direct-mutation-state */
import React from "react";
import { default as img1, default as img2, default as img3, default as img4, default as Olympiad } from "../../utility/images/Olympiad-slider.jpg";
import Olympiad1 from "../../utility/images/Olympiad-slider1.jpg";
import Olympiad2 from "../../utility/images/Olympiad-slider2.jpg";
import Footer from "../Footer";
import "./home.css";

class Home extends React.Component {
  render() {
    return (
      <>
        <h6 className="header01">Hello guys this is me sandeep </h6>
       

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
              {/*<span className="glyphicon glyphicon-chevron-left"> </span>*/}
              <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#myCarousel" data-slide="next">
              {/*<span className="glyphicon glyphicon-chevron-right"></span>*/}
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        <h5 className="header05">
          Here you find all details about me and my relatives
        </h5>
        <h6 className="header06">below mention about my home my room and full address and contact detail about.</h6>


        <section className="second-setion">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 head-margin">

                <h1 className="subtitle fancy top-br wel"><span>Welcome to My Family, You can find all about me...</span></h1>
                <p style={{ textAlign: "center" }}>Hello guys here you can see my family is very enjoying the moment so you can join us the enjoyment. Thanks
                </p>
                <div className="text-center">
                  <button className="btn btn-primary" data-toggle="modal" data-target="#PosterModalPopup">More</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="third-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">

                <div className="row">
                  <div className="col-lg-12">
                    <p className="subtitle fancy"><span>CRICKET OLYMPIAD</span></p>
                  </div>
                </div>
                <div className="row text-center">
                  <div className="col-lg-12">
                    <img src="images/batsmen1.png" alt="Cricket Olympiad" className="img-responsive image-center animated infinite pulse slow delay-1s" />
                    <br />
                    <br />
                    <p className="description">Indian Cricket Academy proudly presents a gateway to display your cricketing <br />skills and play for India! Cricket Olympaid will help you achieve your dream <br />of being the next Legend like Sachin, Virat, Dhoni</p>
                    <br />
                    <br />
                    <button type="button" className="btn btn-join header-hidden">REGISTER NOW</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="fourth-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <p className="subtitle fancy"><span>Cricket GALLERY</span></p>
              </div>
            </div>
          </div>
        </section>

        <section class="five-section">
          <div class="container-fluid padding-0">
            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6 padding-0">
              <a data-fancybox="cricket-gallery" href="images/library/1.jpg" alt="Cricket Olympiad" title="Cricket Olympiad" data-caption="This image has a simple caption">
                <img class="img-responsive Gal_Image cover-img" alt="Cricket Olympiad" src={img1}/>
              </a>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6 padding-0">
              <a data-fancybox="cricket-gallery" href="images/library/2.jpg" alt="Cricket Olympiad" title="Cricket Olympiad" data-caption="This image has a simple caption">
                <img class="img-responsive Gal_Image cover-img" alt="Cricket Olympiad" src={img2}/>
              </a>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6 padding-0">
              <a data-fancybox="cricket-gallery" href="images/library/3.jpg" alt="Cricket Olympiad" title="Cricket Olympiad" data-caption="This image has a simple caption">
                <img class="img-responsive Gal_Image cover-img" alt="Cricket Olympiad" src={img3}/>
              </a>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6 padding-0">
              <a data-fancybox="cricket-gallery" href="images/library/4.jpg" alt="Cricket Olympiad" title="Cricket Olympiad" data-caption="This image has a simple caption">
                <img class="img-responsive Gal_Image cover-img" alt="Cricket Olympiad" src={img4}/>
              </a>
            </div>
          </div>

        </section>

        <Footer />
      </>
    );
  }
}
export default Home;
