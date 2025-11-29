import React from "react";
import { OneAppStyleWrapper } from "../HomePageStyles";
import HeroImg from "../../../images/Aatumate_Mobile.jpg";
import icon1 from "../../../images/tow-theft-notifications.svg";
import icon2 from "../../../images/find-grid-points.svg";
import icon3 from "../../../images/check-charge-status.svg";
import icon4 from "../../../images/multi-stop-trip.svg";
import icon5 from "../../../images/find-my-scooter.svg";

const OneApp = () => {
  return (
    <OneAppStyleWrapper>
      <div className="title">
        One app
        <span> Affordable and reliable workshops for all your car needs</span>
      </div>
      <div className="app-section">
        <div className="image-section">
          <img src={HeroImg} alt="App Img" />
        </div>
        <div className="facility-flex">
          <div className="flex-box">
            <span>
              <img src={icon1} alt="Tow & Theft Notification" />
            </span>
            <p>
              Tow <br /> Service
            </p>
            <p className="responsive">Tow Service</p>
          </div>
          <div className="flex-box">
            <span>
              <img src={icon2} alt="Find Grid Points" />
            </span>
            <p>
              Find Workshops
              <br /> Near You
            </p>
            <p className="responsive">Find Workshops Near You</p>
          </div>
          <div className="flex-box">
            <span>
              <img src={icon3} alt="Check Charge" />
            </span>
            <p>
              Honest <br /> Pricing
            </p>
            <p className="responsive">Honest Pricing</p>
          </div>
          <div className="flex-box">
            <span>
              <img src={icon4} alt="Trip Planner" />
            </span>
            <p>
              Reliable <br /> Workshops
            </p>
            <p className="responsive">Reliable Workshops</p>
          </div>
          <div className="flex-box">
            <span>
              <img src={icon5} alt="" />
            </span>
            <p>
              Locate <br /> Your Vehicle
            </p>
            <p className="responsive">Locate Your Vehicle</p>
          </div>
        </div>
      </div>
    </OneAppStyleWrapper>
  );
};

export default OneApp;
