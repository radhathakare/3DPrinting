import React from "react";
import './Services.css';
import Footer from "./Footer";
import Header from "./Header";

function Services(){
    return(
        <>
		 <Header navPosition="right" className="reveal-from-bottom" />
        <br/><br/><br/><br/><br/>
        <section className="pb-5 pt-5" id="services">
        <div className="container">
            
         <div className="center-heading">
            {/* <h4 className="section-title reveal-from-bottom" data-reveal-delay="400"> Our Services</h4> */}
         
                <div className="section-head reveal-from-bottom" data-reveal-delay="400">
          <h4><span> Our Services</span> </h4>
          
        </div> 
        </div>

            <div className="row reveal-from-bottom" data-reveal-delay="400">
                <div className="col-lg-3 col-sm-6">
                    <a  className="services-small-item active">
                        <div className="icon">
                            <i className="far fa-check-square"></i>
                        </div>
                        <h5 className="services-title">Lorem Ipsum</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        <div className="button">
                            <i className="fa fa-chevron-right"></i>
                        </div>
                    </a>
                    
                </div>
                <div className="col-lg-3 col-sm-6">
                    <a  className="services-small-item">
                        <div className="icon">
                            <i className="fa fa-bed"></i>
                        </div>
                        <h5 className="services-title">Lorem Ipsum</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        <div className="button">
                            <i className="fa fa-chevron-right"></i>
                        </div>
                    </a>
                   
                </div>
                <div className="col-lg-3 col-sm-6">
                    <a className="services-small-item">
                        <div className="icon">
                            <i className="fas fa-chart-bar"></i>
                        </div>
                        <h5 className="services-title">Lorem Ipsum</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        <div className="button">
                            <i className="fa fa-chevron-right"></i>
                        </div>
                    </a>
                   
                </div>
                <div className="col-lg-3 col-sm-6">
                    <a  className="services-small-item">
                        <div className="icon">
                            <i className="fa fa-shopping-cart"></i>
                        </div>
                        <h5 className="services-title">Lorem Ipsum</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        <div className="button">
                            <i className="fa fa-chevron-right"></i>
                        </div>
                    </a>
                   
                </div>
            </div>
        </div>
    </section>
	

<Footer/>
        
        </>
    )
}
export default Services;