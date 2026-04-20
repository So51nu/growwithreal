import React from "react";
import PropertyOverview from "./PropertyOverview";
import VideoReview from "./VideoReview";
import ExtraInfo from "./ExtraInfo";
import Features from "./Features";
import Location from "./Location";
import FloorPlan from "./FloorPlan";
import Attachments from "./Attachments";
import VirtualTour from "./VirtualTour";
import LoanCalculator from "./LoanCalculator";
import PropertyNearby from "./PropertyNearby";
import Reviews from "./Reviews";
import Sidebar from "./Sidebar";

export default function Details1({ property }) {
  return (
    <section className="section-property-detail">
      <div className="tf-container">
        <div className="row">
          <div className="col-xl-8 col-lg-7">
            <div className="wg-property box-overview">
              <PropertyOverview property={property} />
            </div>
            <div className="wg-property video">
              <VideoReview property={property} />
            </div>
            <div className="wg-property box-property-detail">
              <ExtraInfo property={property} />
            </div>
            <div className="wg-property box-amenities">
              <Features property={property} />
            </div>
            <div className="wg-property single-property-map">
              <Location property={property} />
            </div>
            <div className="wg-property single-property-floor">
              <FloorPlan property={property} />
            </div>
            <div className="wg-property box-attachments">
              <Attachments property={property} />
            </div>
            <div className="wg-property box-virtual-tour">
              <VirtualTour property={property} />
            </div>
            <div className="wg-property box-loan">
              <LoanCalculator property={property} />
            </div>
            <div className="wg-property single-property-nearby">
              <PropertyNearby property={property} />
            </div>
            <div className="wg-property mb-0 box-comment">
              <Reviews property={property} />
            </div>
          </div>

          <div className="col-xl-4 col-lg-5">
            <Sidebar property={property} />
          </div>
        </div>
      </div>
    </section>
  );
}