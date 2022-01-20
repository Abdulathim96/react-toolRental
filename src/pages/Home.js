import "./Home.css"
import { Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import navbarBrand from "../assets/img/navbar-logo.svg"
import portfolio1 from "../assets/img/portfolio/1.jpg"
import portfolio2 from "../assets/img/portfolio/2.jpg"
import portfolio3 from "../assets/img/portfolio/3.jpg"
import portfolio4 from "../assets/img/portfolio/4.jpg"
import portfolio5 from "../assets/img/portfolio/5.jpg"
import portfolio6 from "../assets/img/portfolio/6.jpg"
import about1 from "../assets/img/about/1.png"
import about2 from "../assets/img/about/2.jpg"
import about3 from "../assets/img/about/3.png"
import about4 from "../assets/img/about/4.png"
import microsoft from "../assets/img/logos/microsoft.svg"
import google from "../assets/img/logos/google.svg"
import facebook from "../assets/img/logos/facebook.svg"
import ibm from "../assets/img/logos/ibm.svg"
function Home(props) {
  const { offer } = props

  return (
    <>

          <body id="page-top">
        <header class="masthead">
          <div class="container">
            <div class="masthead-subheading">Welcome To Our Studio!</div>
            <div class="masthead-heading text-uppercase">It's Nice To Meet You</div>
            <a class="btn btn-primary btn-xl text-uppercase" href="#services">
              Tell Me More
            </a>
          </div>
        </header>
        <section class="page-section" id="services">
          <div class="container">
            <div class="text-center">
              <h2 class="section-heading text-uppercase">Services</h2>
              <h3 class="section-subheading text-muted">Some of our services you may need to know.</h3>
            </div>
            <div class="row text-center">
              <div class="col-md-4">
                <Link to="/offers">
                  <span class="fa-stack fa-4x">
                    <i class="fas fa-circle fa-stack-2x text-primary"></i>
                    <i class="fa-box-open-full fa-stack-1x fa-inverse"></i>
                  </span>
                </Link>
                <h4 class="my-3">Offer</h4>
                <p class="text-muted">You can display any tool you have for rent.</p>
              </div>
              <div class="col-md-4">
                <Link to="/requests">
                  <span class="fa-stack fa-4x">
                    <i class="fas fa-circle fa-stack-2x text-primary"></i>
                    <i class="fas fa-add fa-stack-1x fa-inverse"></i>
                  </span>
                </Link>
                <h4 class="my-3">Request</h4>
                <p class="text-muted">You can request anything you may need in order to rent.</p>
              </div>
              <div class="col-md-4">
                <Link to="/">
                  <span class="fa-stack fa-4x">
                    <i class="fas fa-circle fa-stack-2x text-primary"></i>
                    <i class="fas fa-lock fa-stack-1x fa-inverse"></i>
                  </span>
                </Link>
                <h4 class="my-3">insurance</h4>
                <p class="text-muted">We provide insurance for your offers.</p>
              </div>
            </div>
          </div>
        </section>
        <section class="page-section bg-light" id="portfolio">
          <div class="container">
            <div class="text-center">
              <h2 class="section-heading text-uppercase">Portfolio</h2>
              <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
            <div class="row">
              <div class="col-lg-4 col-sm-6 mb-4">
                <div class="portfolio-item">
                  <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
                    <div class="portfolio-hover">
                      <div class="portfolio-hover-content">
                        <i class="fas fa-plus fa-3x"></i>
                      </div>
                    </div>
                    <img class="img-fluid" src={portfolio1} alt="..." />
                  </a>
                  <div class="portfolio-caption">
                    <div class="portfolio-caption-heading">Threads</div>
                    <div class="portfolio-caption-subheading text-muted">Illustration</div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-sm-6 mb-4">
                <div class="portfolio-item">
                  <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal2">
                    <div class="portfolio-hover">
                      <div class="portfolio-hover-content">
                        <i class="fas fa-plus fa-3x"></i>
                      </div>
                    </div>
                    <img class="img-fluid" src={portfolio2} alt="..." />
                  </a>
                  <div class="portfolio-caption">
                    <div class="portfolio-caption-heading">Threads</div>
                    <div class="portfolio-caption-subheading text-muted">Illustration</div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-sm-6 mb-4">
                <div class="portfolio-item">
                  <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal2">
                    <div class="portfolio-hover">
                      <div class="portfolio-hover-content">
                        <i class="fas fa-plus fa-3x"></i>
                      </div>
                    </div>
                    <img class="img-fluid" src={portfolio2} alt="..." />
                  </a>
                  <div class="portfolio-caption">
                    <div class="portfolio-caption-heading">Explore</div>
                    <div class="portfolio-caption-subheading text-muted">Graphic Design</div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-sm-6 mb-4">
                <div class="portfolio-item"></div>
              </div>
            </div>
          </div>
        </section>
        <section class="page-section" id="about">
          <div class="container">
            <div class="text-center">
              <h2 class="section-heading text-uppercase">About</h2>
              <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
            <ul class="timeline">
              <li>
                <div class="timeline-image">
                  <img class="rounded-circle img-fluid" src={about1} alt="..." style={{clipPath: "circle()", width: 250 }} />
                </div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4>16/12/2021</h4>
                    <h4 class="subheading">the beginning</h4>
                  </div>
                  <div class="timeline-body">
                    <p class="text-muted">We developed a project plan!</p>
                  </div>
                </div>
              </li>
              <li class="timeline-inverted">
                <div class="timeline-image">
                  <center><img class="rounded-circle img-fluid" src={about2} alt="..." style={{width: 110 ,marginTop: 20}} /></center>
                </div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4>19/12/2021</h4>
                    <h4 class="subheading">We started programming the back-end</h4>
                  </div>
                  <div class="timeline-body">
                    <p class="text-muted">We worked on the data base for the project!</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="timeline-image">
                <center><img class="rounded-circle img-fluid" src={about3} alt="..." style={{clipPath: "circle()", width: 250 ,marginTop: 20}} /></center>
                </div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4>6/1/2022</h4>
                    <h4 class="subheading">We made a dashboard for the site</h4>
                  </div>
                  <div class="timeline-body">
                    <p class="text-muted">We made a dashboard for the Admin!</p>
                  </div>
                </div>
              </li>
              <li class="timeline-inverted">
                <div class="timeline-image">
                  <img class="rounded-circle img-fluid" src={about4} alt="..." />
                </div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4>11/1/2022</h4>
                    <h4 class="subheading">We started developing our website</h4>
                  </div>
                  <div class="timeline-body">
                    <p class="text-muted">Finally, we developed our website!</p>
                  </div>
                </div>
              </li>
              <li class="timeline-inverted">
                <div class="timeline-image">
                  <h4>
                    We hope
                    <br />
                    you
                    <br />
                    like it!
                  </h4>
                </div>
              </li>
            </ul>
          </div>
        </section>
        
        {/* <section class="page-section" id="contact">
          <div class="container">
            
          </div>
        </section> */}
        <footer class="footer py-4" style={{ backgroundColor: "rgb(44, 52, 64)", color: "#eee"}}>
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-4 text-lg-start">Copyright &copy; Your Website 2021</div>
              <div class="col-lg-4 my-3 my-lg-0">
                <a class="btn btn-dark btn-social mx-2" href="#!">
                  <i class="fab fa-twitter"></i>
                </a>
                <a class="btn btn-dark btn-social mx-2" href="#!">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a class="btn btn-dark btn-social mx-2" href="#!">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
              <div class="col-lg-4 text-lg-end">
                <a class="link-dark text-decoration-none me-3" href="#!">
                  Privacy Policy
                </a>
                <a class="link-dark text-decoration-none" href="#!">
                  Terms of Use
                </a>
              </div>
            </div>
          </div>
        </footer>
        <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="close-modal" data-bs-dismiss="modal">
                <img src="assets/img/close-icon.svg" alt="Close modal" />
              </div>
            </div>
          </div>
        </div>
        <footer class="page-footer" style={{ backgroundColor: "rgb(44, 52, 64)" , color: "white"}}>
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">BBBootstrap.com</h5>
                <p class="grey-text text-lighten-4">
                  House of cool code snippets, With the increase demand of online customers.
                </p>
              </div>
              <div class="col l4 offset-l1 s12">
                <h5 class="white-text">Help</h5>
                <ul>
                  <li>
                    <a class="grey-text text-lighten-3" href="#!">
                      Payment
                    </a>
                  </li>
                  <li>
                    <a class="grey-text text-lighten-3" href="#!">
                      Shipping
                    </a>
                  </li>
                  <li>
                    <a class="grey-text text-lighten-3" href="#!">
                      Cancellation
                    </a>
                  </li>
                  <li>
                    <a class="grey-text text-lighten-3" href="#!">
                      Returns
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Policy</h5>
                <ul>
                  <li>
                    <a class="grey-text text-lighten-3" href="#!">
                      Return
                    </a>
                  </li>
                  <li>
                    <a class="grey-text text-lighten-3" href="#!">
                      Security
                    </a>
                  </li>
                  <li>
                    <a class="grey-text text-lighten-3" href="#!">
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a class="grey-text text-lighten-3" href="#!">
                      Sitemap
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Social</h5>
                <ul>
                  <li>
                    <a class="grey-text text-lighten-3" href="#!">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a class="grey-text text-lighten-3" href="#!">
                      Linkedin
                    </a>
                  </li>
                  <li>
                    <a class="grey-text text-lighten-3" href="#!">
                      Google
                    </a>
                  </li>
                  <li>
                    <a class="grey-text text-lighten-3" href="#!">
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
              {" "}
              © 2019 Copyright BBBootstrap.com{" "}
              <a class="grey-text text-lighten-4 right" href="#!">
                House of cool code snippet!
              </a>{" "}
            </div>
          </div>
        </footer>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
        <script src="js/scripts.js"></script>

        <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
      </body>
    </>
  )
}

export default Home
