/**
 *  Include.js
 *  --- js code to add common code blocks
 *  --- like the header and footer into multiply pages.
 * */

/*************** Prepend the nav into Header Dom *************/
{
  $("body header").prepend(`
    <nav class="headroom">
    <div class="menu-bar" id="menuToggle">
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    </div>
    <a href='index.html' class="logo">
    <i class="fa fa-envira "></i>
    <h3 class="title">E-STORE</h3>
    </a>

    <ul class="navbar">
    <li class="active"><a href="index.html">HOME</a></li>
    <li><a href="women.html">WOMEN</a></li>
    <li><a href="kids.html">KIDS</a></li>
    <li><a href="about.html">ABOUT</a></li>
    <li><a href="contact.html">CONTACT</a></li>
    </ul>
    <ul class="navbar-right">
    <li class="nav-hide btn"><i class="fa fa-search"></i></li>
    <li id="cart-toggle" class="btn">
        <i class="fa fa-shopping-cart"></i><span class="badge cartQuantity">0</span>
    </li>
    </ul>
    </nav>
`);
}
/************** Added SlideBar into body Dom *****************/
{
  $("body header").before(`
    <section class="slideBar sideBar hide" id="slidebar">
      <div class="content grid">
        <div>
          <div class="header flex">
            <div class="logo btn flex">
              <i class="fa fa-envira "></i>
              <h3>E-STORE</h3>
            </div>
            <div class=" btn" id="close-menu">
              <i class="fa fa-close"></i>
            </div>
          </div>
          <div class="main grid">
            <div class="input-group2">
              <input type="text" placeholder="Search for products" />
              <i class="fa fa-search btn"></i>
            </div>
            <ul class="navbar">
              <li class="active"><a href="index.html">HOME</a></li>
              <li><a href="./women.html">WOMEN</a></li>
              <li><a href="kids.html">KIDS</a></li>
              <li><a href="about.html">ABOUT</a></li>
              <li><a href="contact.html">CONTACT</a></li>
            </ul>
          </div>
        </div>
        <div class="footer">
          <ul class="social-links flex-sb">
            <li>
              <i class="fa fa-facebook-official"></i>
            </li>
            <li>
              <i class="fa fa-instagram"></i>
            </li>
            <li>
              <i class="fa fa-twitter"></i>
            </li>
          </ul>
        </div>
      </div>
      <div class="cf-overlay" id="slidebar-overlay"></div>
    </section>
`);
}
/************** Added the Cart into body Dom *****************/
{
  $("body header").before(`
    <!---------------- cart ---------------->
    <section id="cart" class="sideBar hide">
      <div class="content">
        <div id="close-cart">
          <i class="fa fa-close btn"></i>
        </div>
        <div class="heading"><h2>YOUR CART</h2></div>
        <!---------------- cart products--------------->
        <div id="cart-products" class="grid">

        </div>
        <div class="total flex">
          <div>Total Price:</div>
          <div id="total-price">N0.00</div>
        </div>
        <div class="options grid">
          <button class="btn red" id="clear-cart">CLEAR CART</button>
          <button class="btn"><a href="checkout.html">CHECK OUT</a></button>
        </div>
      </div>
      <div class="cf-overlay" id="cart-overlay"></div>
    </section>
`);
}
/************** Prepend the Footer into Footer Dom ****************/
{
  $("body footer").html(`
  <section class="footer-menu">
  <section class="footer-nav">
    <h4>QUICK LINKS</h4>
    <ul class="navbar">
      <li><a href="">About</a></li>
      <li><a href="">Help</a></li>
      <li><a href="">Contact us</a></li>
      <li><a href="">Shopping cart</a></li>
      <li><a href="">Terms & Conditions </a></li>
      <li><a href="">Privacy Policy</a></li>
    </ul>
  </section>
  <section class="contact-info">
    <h4>CONTACT INFO</h4>
    <ul>
      <li class="">
        <i class="fa fa-map"></i>
        <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
      </li>
      <li class="">
        <i class="fa fa-phone"></i>
        <p>+2 392 3929 210</p>
      </li>
      <li class="">
        <i class="fa fa-envelope"></i>
        <p>emailaddress@domain.com</p>
      </li>
    </ul>
  </section>
</section>
<section>
  <center>
    <p>Copyright ©2019 E-STORE. All rights reserved.</p>
  </center>
</section>
  `);
}
