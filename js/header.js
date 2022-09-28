function header() {
    let top = document.querySelector(".header");
    top.innerHTML =`<div class="head_content">
    <div class="logo_left"> <a href="index.html"><img alt="assumptioncollegeofnursing" class="logo-white" src="images/logo.png"  /> </a>  <img alt="assumptioncollegeofnursing" class="logo-dark" src="images/logo.png"/> </div>
    
    <div class="menu_right_left">
                          <ul>
                           <li class="wow fadeInDown" data-wow-delay="0.5s"><p>Mail us : assumptionconsby@gmail.com </p></li>
                            <li class="wow fadeInDown" data-wow-delay="0.6s"><p>Contact :  04936 - 225 190</p></li>
                          </ul>
                          <div class="clear"></div>
                         </div>
             
    
    <div class="menu_right">                                              
      <div class="button_container" id="toggle">
  <span class="top"></span>
  <span class="middle"></span>
  <span class="bottom"></span>
</div>

<div class="overlay" id="overlay">
  <nav class="overlay-menu">
    <ul>
      <li ><a href="index.html">Home</a></li>
      <li><a href="about.html">About us</a></li>
      <li><a href="course-details.html">course</a></li>
       <li><a href="gallery.html">Gallery</a></li>
      <li><a href="contact.html">Contact us</a></li>
    </ul>
  </nav>
</div>
      
    </div>
                     
    <div class="clear"></div>
  </div>`;
}
header();
$('#toggle').click(function() {
  $(this).toggleClass('active');
  $('#overlay').toggleClass('open');
 });