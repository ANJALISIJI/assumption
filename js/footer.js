function footer () {
    let nav = document.querySelector(".footer_inner_full");
    nav.innerHTML =` <div class="footer_inner">
    <div class="footer_inner_left">
        <div class="footer_inner_left_top">
          <h1 class="wow fadeInDown" data-wow-delay="0.4s">Address <span></span></h1>
          <p class="wow fadeInDown" data-wow-delay="0.5s">Assumption College Of Nursing<br>
          Sulthan Bathery, Wayanad
          <br>Pin - 67 35 92
           </p>
        </div>
        <div class="footer_inner_left_down">
           <h1 class="wow fadeInDown" data-wow-delay="0.4s"> Contact us <span>  </span></h1>
           <p class="wow fadeInDown" data-wow-delay="0.5s">Ph : 04936 - 225 190
<br />
Email : assumptionconsby@gmail.com</p>
        </div>
    </div>
     <div class="footer_inner_right">
        <div class="footer_inner_right_inner">
            <h1 class="wow fadeInDown" data-wow-delay="0.4s">Seek us Out <span></span></h1>
            <p class="wow fadeInDown" data-wow-delay="0.5s">Subscribe to our news letter for the down_low</p>
              
<div class="msg_inn_btm">
<form action="mailsend.php" method="post">
<input type="email" class="text_box_dsn" name="txtDescription" placeholder="Enter your E-mail id" id="ContentPlaceHolder1_Place" required />
<span id="ContentPlaceHolder1_req2" class="spn_Error" style="display:none;">subscuribe our newsletter</span>

<button type="submit" class="botton_dsn"  id="#"><div class="botton_dsn_img"><img src="images/btn.png" /></div></button>
<div class="clear"></div>
</form>
</div>  
           
               
                <div class="footer_inner_right_inner_list">
                <ul>
                     <div class="effect egeon">
<div class="buttons">
<li class="wow fadeInDown" data-wow-delay="0.8s"> <a href="#" class="insta" title="Join us on instagram"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
<li class="wow fadeInDown" data-wow-delay="0.6s"> <a href="#" class="tw" title="Join us on Twitter"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
<li class="wow fadeInDown" data-wow-delay="0.9s">  <a href="#" class="youtube" title="Join us on Dribbble"><i class="fa fa-youtube-play " aria-hidden="true"></i></a></li>
<li class="wow fadeInDown" data-wow-delay="0.4s"><a href="#" class="fb" title="Join us on Facebook"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>

</div>
</div>
</ul>

                 <div class="clear"></div>
                </div>
        </div>
     </div>
     <div class="clear"></div>
</div>
<div class="footer_down_mian fadeIn">                   

   <div class="footer_down">
 <div class="footer_down_left">
<p>© 2022 assumptioncollegeofnursing.com All rights reserved</p>
</div>
<div class="footer_down_right">
<p> Powered by : <a href="http://uniquedotz.com/" target="_blank"> <span >unique dotz</span></a></p>
</div>
<div class="clear"></div>
</div>
</div>

`;
}
footer();







