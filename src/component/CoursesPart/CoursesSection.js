import React, { useState } from "react";
import SingleCoursesSection from "./SingleCoursesSection";
import data from "./data";

function CoursesSection() {
  const TABS_BTN = [
    { info: "Python", title: "Python" },
    { info: "Excel", title: "Excel" },
    { info: "WebDevelopment", title: "Web Development" },
    { info: "JavaScript", title: "JavaScript" },
    { info: "DataScience", title: "Data Science" },
    { info: "AWSCertificate", title: "AWS Certificate" },
    { info: "Drawing", title: "Drawing" },
  ];
  const [tab, setTab] = useState("Python");

  const changeTab = (val) => {
    setTab(val);
  };
  return (
    <div className="p-3">
      <h1>A broad selection of courses</h1>
      <div>
        Choose from 204,000 online video courses with new additions published
        every month
      </div>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        {TABS_BTN.map((e, index) => (
          <li key={index} className="nav-item" role="presentation">
            <button
              className={`nav-link ${index === 0 ? "active" : ""}`}
              id={`${e.info}-tab`}
              data-bs-toggle="tab"
              data-bs-target={`#${e.info}`}
              type="button"
              role="tab"
              aria-controls={`${e.info}`}
              aria-selected={`${index === 0 ? "true" : "false"}`}
              onClick={() => changeTab(`${e.info}`)}
            >
              {e.title}
            </button>
          </li>
        ))}
      </ul>
      <div className="tab-content" id="myTabContent">
        <SingleCoursesSection data={data[tab]} />
      </div>
    </div>
  );
}

export default CoursesSection;
