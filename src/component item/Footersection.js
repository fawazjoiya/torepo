function Footersection(){
    return(
        <div>
            <section className=" footersetup">
            <img  src="img/footer-under.png"/>
                
                <div className="container">
                    <div className="row py-4">
                        <div className="col-lg-3 col-md-3 col-10 mx-auto">
                            <div className="logigg">
                                <img src="img/logo-image.png" />
                            </div>
                            <div className="footertext">
                            <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                            </div>
                            <div className="social-icon">
                                <p><i class="bi bi-facebook"></i></p>
                                <p><i class="bi bi-instagram"></i></p>
                                <p><i class="bi bi-twitter"></i></p>
                                <p><i class="bi bi-linkedin"></i></p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 footerulseting col-10 mx-auto">
                            <div className="insurplane">
                                <h3>INSURANCE PLANS</h3>
                            </div>
                            <ul>
                                <li><a href="#">Crytronics</a></li>
                                <li><a href="#">Adventure</a></li>
                                <li><a href="#">Beatches</a></li>
                                <li><a href="#">Popular</a></li>
                                <li><a href="#">Audio</a></li>
                                <li><a href="#">Friendly</a></li>
                                <li><a href="#">video</a></li>
                            
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-3 footerulseting  col-10 mx-auto">
                            <div className="insurplane">
                                <h3>MY ACCOUNT</h3>
                            </div>
                            <ul>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Delivery Information</a></li>
                                <li><a href="#">Privacy policy</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">Special</a></li>
                                
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-3 footerulseting col-10 mx-auto">
                            <div className="insurplane">
                                <h3>CONTACT INFORMATION</h3>
                            </div>
                            <ul className="uliconmet">
                                <li><i class="bi bi-geo-alt-fill"></i><a href="#">line 504</a></li>
                                <li><i class="bi bi-telephone-fill"></i><a href="#">1234567</a></li>
                                <li><i class="bi bi-envelope"></i><a href="#">info@holidream</a></li>
                               
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footersection;