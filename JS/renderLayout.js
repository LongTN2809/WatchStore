document.querySelector(".navbar").innerHTML = `
<div class="logo">
                <img src="../Image/IMG-HOME/logo-removebg-preview.png" alt="">
                <span>ROYAL TIME</span>
            </div>
            <div class="nav">
                <ul class="nav-list">
                    <li><a class="nav-link" href="home.html">HOME</a></li>
                    <li><a class="nav-link" href="product.html">PRODUCT</a></li>
                    <li><a class="nav-link" href="home.html#about">ABOUT</a></li>
                    <li><a class="nav-link" href="#contact">CONTACT</a></li>
                </ul>
            </div>
            <div class="nav-icon">
                <a href="login.html"><i class="fa-solid fa-circle-user"></i></a>
            </div>
`;

// Render footer
document.getElementById("contact").innerHTML = `
<div class="footer-container">
                    <div class="footer-content">
                        <div class="footer-section">
                            <div class="footer-brand">Royal Time</div>
                            <p class="footer-description">
                                Your trusted destination for luxury timepieces and exceptional craftsmanship.
                            </p>
                            <div class="social-links">
                                <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                                <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                                <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                            </div>
                        </div>


                        <div class="footer-section">
                            <h3>Quick Links</h3>
                            <ul class="footer-links">
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Our Story</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Press</a></li>
                            </ul>
                        </div>


                        <div class="footer-section">
                            <h3>Customer Care</h3>
                            <ul class="footer-links">
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">Shipping Info</a></li>
                                <li><a href="#">Returns</a></li>
                                <li><a href="#">Size Guide</a></li>
                            </ul>
                        </div>


                        <div class="footer-section">
                            <h3>Contact Info</h3>
                            <ul class="contact-info">
                                <li>
                                    <i class="fas fa-phone"></i>
                                    <span>0934117789</span>
                                </li>
                                <li>
                                    <i class="fas fa-envelope"></i>
                                    <span>TNLong1128@gmail.com</span>
                                </li>
                                <li>
                                    <i class="fas fa-map-marker-alt"></i>
                                    <span>123 Nguyen Hue TPHCM</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="footer-bottom">
                        © 2025 RoyalTime. All rights reserved. | <a href="#">Website Builder</a>
                    </div>
                </div>
                <script src="../JS/qty.js"></script>
`;