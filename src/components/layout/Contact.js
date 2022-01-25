import React from "react";
import './Contact.css';

function Contact(){
    return(
        <>
        
	<div class="container">
		<div class="innerwrap">
		
			<section class="section1 clearfix">
				<div class="textcenter">
					<span class="shtext">Contact Us</span>
					<span class="seperator"></span>
					<h1>Drop Us a Mail</h1>
				</div>
			</section>
		
			<section class="section2 clearfix">
				<div class="col2 column1 first">
					<script src='https://maps.googleapis.com/maps/api/js?v=3.exp'></script>
                    <div class="sec2map" style='overflow:hidden;height:550px;width:100%;'>
                        <div id='gmap_canvas' style='height:100%;width:100%;'></div>
                        <div><small><a href="http://embedgooglemaps.com">									embed google maps							</a></small>
                        </div><div><small><a href="http://freedirectorysubmissionsites.com/">free web directories</a></small></div>
                       
				</div>
                </div>
				<div class="col2 column2 last">
					<div class="sec2innercont">
						<div class="sec2addr">
							<p>45 BC, a Latin professor at Hampden-Sydney College in Virginia</p>
							<p><span class="collig">Phone :</span> +91 976885083</p>
							<p><span class="collig">Email :</span> vivek.mengu016@gmail.com</p>
							<p><span class="collig">Fax :</span> +91 9768850839</p>
						</div>
					</div>
					<div class="sec2contactform">
						<h3 class="sec2frmtitle">Want to Know More?? Drop Us a Mail</h3>
						<form action="">
							<div class="clearfix">
								<input class="col2 first" type="text" placeholder="FirstName"/>
								<input class="col2 last" type="text" placeholder="LastName"/>
							</div>
							<div class="clearfix">
								<input  class="col2 first" type="Email" placeholder="Email"/>
								<input class="col2 last" type="text" placeholder="Contact Number"/>
							</div>
							<div class="clearfix">
								<textarea name="textarea" id="" cols="30" rows="7">Your message here...</textarea>
							</div>
							<div class="clearfix"><input type="submit" value="Send"/></div>
						</form>
					</div>

				</div>
			</section>
		
		</div>
	</div>

        
        </>
    )
}
export default Contact;