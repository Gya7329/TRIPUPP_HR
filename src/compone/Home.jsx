import React from "react";
import css from "../index.css";
import web from "./bg1.jpeg";
import CheckIcon from "@material-ui/icons/Check";
import PeopleRoundedIcon from "@material-ui/icons/PeopleRounded";
import bg1 from "./hr1.jpeg";
import bg2 from "./hr2.jpeg";
import Payroll from "./Payroll";
import WorkWithUs from "./WorkWithUs";

import Signin from "./SignIn";
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
function Home() {
  return (
    <>
      <section id="header" className="header">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="col-md-6 pt-5 pt-lg-0 order-1 order-lg-1>">
                <div className="row">
                  <div className="mt-3">
                    <button
                      className="btn btn-outline-success my-2 my-sm-0"
                      type="submit"
                      style={{ color: "whitesmoke", fontFamily: "sans-serif" }}
                    >
                      <strong>Try For Free Now! ></strong>
                    </button>

                    <div className="row">
                      <div className="col-10 mx-auto"></div>
                      <strong>
                        <h1>Set Your Business Up</h1>
                        <h1>With Modern Payroll,</h1>
                        <h1>Benefits, And HR.</h1>
                      </strong>
                      <form className="form-inline">
                        <input
                          className="form-control mr-sm-1"
                          type="text"
                          placeholder="@"
                        />
                        <button
                          className="btn btn-outline-success my-2 my-sm-0"
                          type="submit"
                        >
                          <strong
                            style={{
                              color: "whitesmoke",
                              fontFamily: "sans-serif",
                            }}
                          >
                            Get Started
                          </strong>
                        </button>
                      </form>

                      <h5 className="heading-5">
                        Our plans were built to fit your unique needs.
                        Streamline onboarding, benefits,payroll,PTO and more
                        with our simple, intuitive platform.
                      </h5>
                      <div className="row">
                        <div
                          className="col-lg-9 order-3 order-lg-3 header-img "
                          id="img1"
                        >
                          <img
                            src={web}
                            className="img-fluid animated"
                            id="img1"
                            alt="home img"
                          />
                        </div>

                        <ul className="heading3">
                          {" "}
                          <li>
                            {" "}
                            <CheckIcon
                              style={{ color: "blue", fontSize: "30px" }}
                            />{" "}
                            Free 14-day Demo
                          </li>
                          <li>
                            {" "}
                            <CheckIcon
                              style={{ color: "blue", fontSize: "30px" }}
                            />
                            No Credit Card Needed
                          </li>
                          <li>
                            {" "}
                            <CheckIcon
                              style={{ color: "blue", fontSize: "30px" }}
                            />
                            No Setup
                          </li>
                        </ul>
                      </div>

                      <h4> </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container-hr">
          <h6 style={{ color: "blue", fontSize: "20px" }}>
            <PeopleRoundedIcon style={{ color: "blue", fontSize: "60px" }} />
            <span style={{ color: "blue", fontSize: "36px" }}>
              <strong>HR </strong>{" "}
            </span>
            Manage your people with ease
          </h6>
          <img src={bg1} className="img-2" id="img-2" alt="home img" />
          <img src={bg2} className="img-3" id="img-3" alt="home img" />
        </div>
      </section>
      <section>
        <Payroll />
      </section>
      <section>
        <WorkWithUs />
      </section>
   
    </>
  );
}

export default Home;
