import React from "react";
import './Contact.css';
import Footer from "./Footer";
import Header from "./Header";

function Contact(){
    return(
        <>
		 <Header navPosition="right" className="reveal-from-bottom" />
        <br/><br/><br/><br/><br/>
	<div className="container">
	<div className="section-head col-sm-12 reveal-from-bottom" data-reveal-delay="400">
          <h4><span>Contact Us</span></h4>
          
        </div>



<div className="wrapper reveal-from-bottom" data-reveal-delay="400">

	
	<div className="company-info">
		

		<ul>
			<li><i className="fa fa-road"></i> 44 Main Street</li>
			<li><i className="fa fa-phone"></i> (555) 555-5555</li>
			<li><i className="fa fa-envelope"></i> test@phoenix.com</li>
		</ul>
	</div>
	
	<div className="contact">
		<h3>E-mail Us</h3>

		<form id="contact-form">

			<p>
				<label>Name</label>
				<input type="text" name="name" id="name" required/>
			</p>

			<p>
				<label>Company</label>
				<input type="text" name="company" id="company"/>
			</p>

			<p>
				<label>E-mail Address</label>
				<input type="email" name="email" id="email" required/>
			</p>

			<p>
				<label>Phone Number</label>
				<input type="text" name="phone" id="phone"/>
			</p>

			<p className="full">
				<label>Message</label>
				<textarea name="message" rows="5" id="message"></textarea>
			</p>

			<p className="full">
				<button type="submit">Submit</button>
			</p>

		</form>
	
	</div>
	
</div>

</div>

<Footer/>
        
        </>
    )
}
export default Contact;