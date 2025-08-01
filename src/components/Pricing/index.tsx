"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const PricingComponent = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
  };

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Simple and Affordable Pricing"
          paragraph="Clear, flexible packages designed to fit your project needs — no hidden costs, just real value."
          center
          width="665px"
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0 }}>
            <PricingBox
              packageName="Basic"
              price="5000"
              duration="one-time"
              subtitle="Perfect for individuals or startups needing just a landing page or login/signup system."
            >
              <OfferList text="Responsive Landing Page" status="active" />
              <OfferList text="Login & Signup System" status="active" />
              <OfferList text="1 Revision Request" status="active" />
              <OfferList text="Basic Deployment Support" status="active" />
              <OfferList text="Ongoing Modifications" status="inactive" />
              <OfferList text="Custom Features" status="inactive" />
            </PricingBox>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.2 }}>
            <PricingBox
              packageName="Premium"
              price="35000"
              duration="one-time"
              subtitle="Best suited for full-featured websites with complete frontend and backend support."
            >
              <OfferList text="Full Stack Web Application" status="active" />
              <OfferList text="Admin & Client Panels" status="active" />
              <OfferList text="Payment Gateway Integration" status="active" />
              <OfferList text="SEO Optimization" status="active" />
              <OfferList text="Basic Support & Bug Fixes" status="active" />
              <OfferList text="Ongoing Modifications" status="inactive" />
            </PricingBox>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.4 }}>
            <PricingBox
              packageName="Custom"
              price="NA"
              duration="one-time"
              subtitle="Tailored website built fully based on your needs and vision."
            >
              <OfferList text="Custom Design & Features" status="active" />
              <OfferList text="Unlimited Modifications" status="active" />
              <OfferList text="Lifetime Support & Updates" status="active" />
              <OfferList text="Priority Communication" status="active" />
              <OfferList text="Ongoing Collaboration" status="active" />
              <OfferList text="Any Tech Stack as per Need" status="active" />
            </PricingBox>
          </motion.div>
        </div>
      </div>

      {/* Background SVG Decoration */}
      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default PricingComponent;
