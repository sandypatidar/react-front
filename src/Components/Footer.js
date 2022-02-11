import React from 'react';

function Footer() {
	return (
		<>
			<footer>
				<div className="footer">
					{/*<div className="container">
						<div className="row">
							<div className="col-lg-8 col-lg-offset-2">
								<div className="by-book">
									<div className="row text-center">
										<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 bor-book">
											<h2>A-Z of Cricket</h2>
											<p className="lover"><small>A book must for every cricket lover</small></p>
										</div>
										<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
											<p className="description game"><i>Sneak a peek of this book here!</i></p>
											<button type="button" className="btn btn-buy" data-toggle="modal" data-target="#myModal">BUY NOW</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>*/}
					<div className="container">
						<div className="row">
							<div className="col-lg-5 col-md-5 col-sm-5 col-xs-12">
								<h2 className="footer-head">USEFUL LINKS</h2>
								<div style={{display: "inline-flex"}}>
									<p className="txt-footer"><a href="/" title="HOME">HOME</a></p>
									<p><a href="/contact" title="ABOUT US">Contact&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></p>
									<p><a href="super60.html" title="SUPER 60">SUPER 60</a></p>
								</div>
								<br />

									<div style={{display: "inline-flex"}}>
										<p><a href="cricket-olympiad.html" title="CRICKET OLYMPIAD">OLYMPIAD&nbsp;&nbsp;&nbsp;</a></p>
										<p><a href=" register.html" title="REGISTER"> REGISTER&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></p>
										<p><a href="login.html" title="LOGIN"> LOGIN</a></p>
									</div>
							</div>
							<div className="col-lg-2 col-md-2 col-sm-3 col-xs-12 footer-mobile-1">

								<div className="footer-follow" style={{display: "inline-flex"}}>
									<p style={{paddingRight: "34px", borderRight: "1px solid white"}}>
										<a href="https://www.facebook.com/indiancricketacademyica/" target="_blank"  rel="noreferrer"  title="Facebook"><i className="fab fa-facebook-f icon-footer"></i></a>
									</p>

									<p style={{paddingLeft:"20px"}}>

										<a href="https://www.instagram.com/indiancricketacademyica/" target="_blank" rel="noreferrer"  title="Instagram">
											<i className="fab fa-instagram icon-footer"></i>
										</a>
									</p>
								</div>
							</div>
							<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 col-md-offset-1">
								<h2 className="footer-head">CONTACT</h2>
								<div style={{display: "inline-flex"}}>
									<p style={{color: "#a2a2a2"}}>Write to us at :</p>
								</div>
								<p><a href="mailto:info@indiancricketacademy.com?subject=Say_Hello">info@cricketolympiad.com</a></p>
							</div>
						</div>
					</div>
				</div>
				<div className="footer-links">
					<div className="container">
						<div className="row">
							<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
								<a href="terms.html">
									<p className="footer-head-txt-last ipad-view-footer" style={{color: "#af821e !important", textDecoration: "underline",textAlign: "left"}}>TERMS AND CONDITIONS</p>
								</a>
							</div>
							<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 text-center">
								<p className="footer-head-txt-last">© INDIAN CRICKET ACADEMY PVT. LTD. 2019</p>
							</div>
							<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 text-center">
								<p className="footer-head-txt-last">POWERED BY: VINSYS IT SERVICES (I) PVT.LTD </p>
							</div>

						</div>
					</div>
				</div>
			</footer>
		</>
	)
}
export default Footer;