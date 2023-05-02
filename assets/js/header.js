class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header class="header">
    <div class="header-top d-none d-lg-block">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-6">
                    <p>Have any question ? +27 82 529 5911</p>
                </div>
                <div class="col-lg-6  col-md-6">
                    <ul class="socail-top">
                        <li><a href="#"><i class="zmdi zmdi-facebook"></i></a></li>
                        <li><a href="#"><i class="zmdi zmdi-twitter"></i></a></li>
                        <li><a href="#"><i class="zmdi zmdi-vimeo"></i></a></li>
                        <li><a href="#"><i class="zmdi zmdi-linkedin"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="header-bottom-area">
        <div class="container">
            <div class="row align-items-center">
               
                <div class="col-lg-3 col-md-6 col-6">
                    <div class="cuscol">
                        <div class="logo">
                            <a href="index.html">
                                <img style="max-width: 80px;" src="assets/images/logo/logo.png" alt="logo">
                            </a>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-9 d-none d-lg-block">
                    <div class="menu-area d-flex align-items-center justify-content-end">
                        <nav class="main-menu text-center">
                            <ul>
                                <li><a href="index.html">HOME</a></li>
                                <li><a href="about.html">ABOUT</a></li>
                                <li><a href="service.html">SERVICES</a></li>
                                <li><a href="gallery.html">GALLERY</a></li>
                                <!-- <li><a href="team.html">TEAM</a></li> -->
                                <!-- <li><a href="#">BLOG</a>
                                    <ul class="sub-menu">
                                        <li><a href="blog.html">Blog page</a></li>
                                        <li><a href="blog-details.html">Blog Details Page</a></li>
                                    </ul>
                                </li> -->
                                <li><a href="contact-us.html">CONTACT</a></li>
                            </ul>
                        </nav><!--// main-menu -->
                    </div>
                </div>
                
                <!-- Show in small device Start -->
                <div class="clickable-menu clickable-mainmenu-active d-block d-lg-none  col-md-6 col-6">
                    <a href="#"><i class="zmdi zmdi-menu"></i></a>
                </div>
                <div class="clickable-mainmenu">
                    <div class="clickable-mainmenu-icon">
                        <button class="clickable-mainmenu-close">
                            <span class="zmdi zmdi-close"></span>
                        </button>
                    </div>
                    
                    <div id="menu" class="text-start clickable-menu-style">
                        <ul>
                            <li><a href="index.html">HOME</a></li>
                            <li><a href="about.html">ABOUT</a></li>
                            <li><a href="service.html">SERVICES</a></li>
                            <li><a href="gallery.html">GALLERY</a></li>
                             <!-- <li><a href="team.html">TEAM</a></li> -->
                            <!-- <li><a href="#">BLOG</a>
                                <ul>
                                    <li><a href="blog.html">Blog page</a></li>
                                    <li><a href="blog-details.html">Blog Details Page</a></li>
                                </ul>
                            </li> -->
                        </ul>
                    </div>
                    
                    <div class="mobile-more-info">
                        <p>Have any question ? +27 82 529 5911</p>
                        <ul class="socail-top">
                            <li><a href="#"><i class="zmdi zmdi-facebook"></i></a></li>
                            <li><a href="#"><i class="zmdi zmdi-twitter"></i></a></li>
                            <li><a href="#"><i class="zmdi zmdi-vimeo"></i></a></li>
                            <li><a href="#"><i class="zmdi zmdi-linkedin"></i></a></li>
                        </ul>
                    </div>
                    
                    
                </div>
                <!-- Show in small device End -->
            </div>
        </div>
    </div>
</header>
        `
    }
}

class MyFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <footer class="footer">
    <div class="footer-top bg-gray section-pt-90 section-pb">
        <div class="container">
            <div class="row" style="text-align:center">


                <!-- Start Single Widget -->
                <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="footer-widget footer-style-1 space-left">
                        <h5 class="ft-title">CONTACT <span>US</span></h5>
                        <div class="content">
                            <p>HeadOffice: 20th Floor, Commercial City, 40 Dr AB Xuma Street (Commercial
                                Road), Durban, Kwa-Zulu Natal</p>
                            <div class="ft-address">
                                <p>Phone : <a href="tel:+27825295911">+27 82 529 5911</a></p>
                                <p>Email : <a href="mailto:info@bossprotection.co.za">info@bossprotection.co.za</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End Single Widget -->

                <!-- Start Single Widget -->
                <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="footer-widget footer-style-1 space-left">
                        <h5 class="ft-title">QUICK <span>LINKS</span></h5>
                        <div class="content">
                            <ul class="ft-menu">
                                <li><a href="service.html">Our Services</a></li>
                                <li><a href="gallery.html">Our Gallery</a></li>
                                <li><a href="about.html">Vision & Mission</a></li>
                                <li><a href="team.html">Our Team</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- End Single Widget -->

            </div>
        </div>
    </div>
    <div class="copyright">
        <div class="container">
            <div class="row">

                <div class="col-12">
                    <div class="copyright-left content text-center">
                        <p>Copyright &copy; by <a href="#"></a>Blue Ocean</a>. All right reserved</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
</footer>
        `
    }
}

customElements.define("my-header", MyHeader);
customElements.define("my-footer", MyFooter);