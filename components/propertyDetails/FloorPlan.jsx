import React from "react";
import Image from "next/image";

export default function FloorPlan({ property }) {
  const floorPlans = Array.isArray(property?.floor_plans) ? property.floor_plans : [];

  if (!floorPlans.length) return null;

  return (
    <>
      <div className="wg-title text-11 fw-6 text-color-heading">
        Floor Plans
      </div>

      <ul className="box-floor" id="parent-floor">
        {floorPlans.map((plan, index) => {
          const collapseId = `floor-${index + 1}`;
          const showDefault = index === 0;

          return (
            <li className="floor-item" key={index}>
              <div
                role="button"
                className={`floor-header ${showDefault ? "" : "collapsed"}`}
                data-bs-target={`#${collapseId}`}
                data-bs-toggle="collapse"
                aria-expanded={showDefault ? "true" : "false"}
                aria-controls={collapseId}
              >
                <div className="inner-left">
                  <i className="icon icon-CaretDown" />
                  <span className="text-btn">{plan.floor_name || `Floor ${index + 1}`}</span>
                </div>

                <ul className="inner-right">
                  <li className="flex items-center gap-8">
                    <i className="icon icon-beds-3" />
                    {plan.bedrooms || 0} Bedroom
                  </li>
                  <li className="flex items-center gap-8">
                    <i className="icon icon-baths" />
                    {plan.bathrooms || 0} Bathroom
                  </li>
                </ul>
              </div>

              <div
                id={collapseId}
                className={`collapse ${showDefault ? "show" : ""}`}
                data-bs-parent="#parent-floor"
              >
                <div className="faq-body">
                  {plan.description ? (
                    <p style={{ marginBottom: "16px" }}>{plan.description}</p>
                  ) : null}

                  {plan.floor_image_url ? (
                    <div className="box-img">
                      <Image
                        alt={plan.floor_name || "img-floor"}
                        src={plan.floor_image_url}
                        width={712}
                        height={501}
                      />
                    </div>
                  ) : (
                    <div className="box-img" style={{ padding: "20px", textAlign: "center" }}>
                      <p>No floor image available</p>
                    </div>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}