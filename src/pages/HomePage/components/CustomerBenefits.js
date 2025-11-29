import React from "react";
import { CustomerBenefitsWrapper } from "../HomePageStyles";
import { motion } from "framer-motion";
import Image1 from "../../../images/Complete Service.png";
import Image2 from "../../../images/We Know Vehicle.png";
import Image3 from "../../../images/Logistics_Solution.png";
import Image4 from "../../../images/Better Warranties.png";

const CustomerBenefits = () => {
  return (
    <CustomerBenefitsWrapper>
      <h1 className="section-title">
        <span>Customer </span>
        <br />
        Benefits
      </h1>
      <div className="customer-benefits">
        <div className="customer-container">
          <motion.div
            className="customer-benefit-card"
            initial="hidden"
            whileInView="visible"
            variants={{
              visible: { y: 0 },
              hidden: { y: 100 },
            }}
            transition={{ type: "just", duration: 0.3 }}
          >
            <div className="customer-benefit-content">
              <h5 className="customer-benefit-title">Complete Service</h5>
              <p className="customer-benefit-para">
                One-stop solution for all your automotive problems.
              </p>
            </div>
            <img src={Image1} alt="Complete Car Service" />
          </motion.div>
          <motion.div
            className="customer-benefit-card"
            initial="hidden"
            whileInView="visible"
            variants={{
              visible: { y: 0 },
              hidden: { y: 200 },
            }}
            transition={{ type: "just", duration: 0.3 }}
          >
            <div className="customer-benefit-content">
              <h5 className="customer-benefit-title">Lowest prices</h5>
              <p className="customer-benefit-para">
                cost-effective solutions without compromising quality of service
                & spares.
              </p>
            </div>
            <img src={Image2} alt="Complete Car Service" />
          </motion.div>
          <motion.div
            className="customer-benefit-card"
            initial="hidden"
            whileInView="visible"
            variants={{
              visible: { y: 0 },
              hidden: { y: 300 },
            }}
            transition={{ type: "just", duration: 0.3 }}
          >
            <div className="customer-benefit-content">
              <h5 className="customer-benefit-title">Customer support</h5>
              <p className="customer-benefit-para">
                Aatumate provides dedicated customer support for all car service
                and spares.
              </p>
            </div>
            <img src={Image3} alt="Complete Car Service" />
          </motion.div>
          <motion.div
            className="customer-benefit-card"
            initial="hidden"
            whileInView="visible"
            variants={{
              visible: { y: 0 },
              hidden: { y: 400 },
            }}
            transition={{ type: "just", duration: 0.3 }}
          >
            <div className="customer-benefit-content">
              <h5 className="customer-benefit-title">Warranty for all works</h5>
              <p className="customer-benefit-para">
                Aautmate come with a warranty, offering car owners knowing their
                vehicles are covered.
              </p>
            </div>
            <img src={Image4} alt="Complete Car Service" />
          </motion.div>
        </div>
      </div>
    </CustomerBenefitsWrapper>
  );
};

export default CustomerBenefits;
