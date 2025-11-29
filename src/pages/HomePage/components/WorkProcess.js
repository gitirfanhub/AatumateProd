import React from "react";
import { WorkProcessWrapper } from "../HomePageStyles";

const WorkProcess = () => {
  return (
    <WorkProcessWrapper>
      <h1 className="section-title">How Aatumate Works</h1>
      <div className="work-process">
        <div className="work-process-card">
          <div className="count">01</div>
          <div className="work-title">Register and Enter Car Details</div>
          <p className="work-content">
            Sign up to Aatumate and provide your car details, ensuring accurate
            information to tailor the service specifically to your vehicle.
          </p>
        </div>
        <div className="work-process-card">
          <div className="count">02</div>
          <div className="work-title">Select Service or Repair</div>
          <p className="work-content">
            Choose the type of service or repair required from our comprehensive
            options, ensuring we address your specific automotive needs.
          </p>
        </div>
        <div className="work-process-card">
          <div className="count">03</div>
          <div className="work-title">
            Discover Low Prices for Car Spare Parts
          </div>
          <p className="work-content">
            Explore our range of affordable car spare parts, with transparent
            pricing clearly displayed, allowing you to make informed decisions
            and save money.
          </p>
        </div>
        <div className="work-process-card">
          <div className="count">04</div>
          <div className="work-title">Connect with Local Workshop</div>
          <p className="work-content">
            Based on your location and requirements, we'll connect you with
            trusted workshops in your area, ensuring convenient access to
            reliable service providers.
          </p>
        </div>
      </div>
    </WorkProcessWrapper>
  );
};

export default WorkProcess;
