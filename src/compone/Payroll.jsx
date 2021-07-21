import React from "react";
import AccountBalanceRoundedIcon from "@material-ui/icons/AccountBalanceRounded";
import css from "../index.css";
import css2 from "../payroll.css";
import MonetizationOnRoundedIcon from "@material-ui/icons/MonetizationOnRounded";
import BookmarkRoundedIcon from "@material-ui/icons/BookmarkRounded";
import SmsRoundedIcon from "@material-ui/icons/SmsRounded";

import EventAvailableRoundedIcon from "@material-ui/icons/EventAvailableRounded";

function Payroll() {
  return (
    <section>
      <div className="container-payrol1l">
        <h6 style={{ color: "blue", fontSize: "20px" }}>
          <AccountBalanceRoundedIcon
            style={{ color: "blue", fontSize: "60px" }}
          />
          <span style={{ color: "blue", fontSize: "36px" }}>
            <strong>Payroll</strong>{" "}
          </span>
          Payroll that's easy to use and seriously smart.{" "}
        </h6>
      </div>
      <div className="icons-1">
        <li>
          {" "}
          <MonetizationOnRoundedIcon
            style={{ color: "#7df0b2", fontSize: "100px" }}
          />{" "}
        </li>
        <li>
          {" "}
          <BookmarkRoundedIcon style={{ color: "pink", fontSize: "100px" }} />
        </li>
        <li>
          {" "}
          <SmsRoundedIcon style={{ color: "#65b6f0", fontSize: "100px" }} />
        </li>
        <li>
          {" "}
          <EventAvailableRoundedIcon
            style={{ color: "blue", fontSize: "100px" }}
          />
        </li>
      </div>
      <div className="container-payroll"></div>
    </section>
  );
}

export default Payroll;
