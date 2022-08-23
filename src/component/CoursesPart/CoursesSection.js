import React, { useState } from "react";
import SingleCoursesSection from "./SingleCoursesSection";
import data from "./data";

function CoursesSection() {
  const [tab, setTab] = useState("Python");
  const changeTab = (val) => {
    console.log(val);
    setTab(val);
  };
  return (
    <div className="p-3">
        <h1>A broad selection of courses</h1>
        <div>Choose from 204,000 online video courses with new additions published every month</div>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="Python-tab"
            data-bs-toggle="tab"
            data-bs-target="#Python"
            type="button"
            role="tab"
            aria-controls="Python"
            aria-selected="true"
            onClick={() => changeTab("Python")}
          >
            Python
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="Excel-tab"
            data-bs-toggle="tab"
            data-bs-target="#Excel"
            type="button"
            role="tab"
            aria-controls="Excel"
            aria-selected="false"
            onClick={() => changeTab("Excel")}
          >
            Excel
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="WebDevelopment-tab"
            data-bs-toggle="tab"
            data-bs-target="#WebDevelopment"
            type="button"
            role="tab"
            aria-controls="WebDevelopment"
            aria-selected="false"
            onClick={() => changeTab("WebDevelopment")}
          >
            Web Development
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="JavaScript-tab"
            data-bs-toggle="tab"
            data-bs-target="#JavaScript"
            type="button"
            role="tab"
            aria-controls="JavaScript"
            aria-selected="false"
            onClick={() => changeTab("JavaScript")}
          >
            JavaScript
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="DataScience-tab"
            data-bs-toggle="tab"
            data-bs-target="#DataScience"
            type="button"
            role="tab"
            aria-controls="DataScience"
            aria-selected="false"
            onClick={() => changeTab("DataScience")}
          >
            Data Science
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="AWSCertificate-tab"
            data-bs-toggle="tab"
            data-bs-target="#AWSCertificate"
            type="button"
            role="tab"
            aria-controls="AWSCertificate"
            aria-selected="false"
            onClick={() => changeTab("AWSCertificate")}
          >
            AWS Certificate
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="Drawing-tab"
            data-bs-toggle="tab"
            data-bs-target="#Drawing"
            type="button"
            role="tab"
            aria-controls="Drawing"
            aria-selected="false"
            onClick={() => changeTab("Drawing")}
          >
            Drawing
          </button>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        {tab==='Python' && <SingleCoursesSection data={data.Python}/>}
        {tab==='Excel' && <SingleCoursesSection data={data.Excel}/>}
        {tab==='WebDevelopment' && <SingleCoursesSection data={data.WebDevelopment}/>}
        {tab==='JavaScript' && <SingleCoursesSection data={data.JavaScript}/>}
        {tab==='DataScience' && <SingleCoursesSection data={data.DataScience}/>}
        {tab==='AWSCertificate' && <SingleCoursesSection data={data.AWSCertificate}/>}
        {tab==='Drawing' && <SingleCoursesSection data={data.Drawing}/>}
      </div>
    </div>
  );
}

export default CoursesSection;

/*

<div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active pt-2"
          id="Python"
          role="tabpanel"
          aria-labelledby="Python-tab"
        >
            
        </div>
        <div
          className="tab-pane fade"
          id="Excel"
          role="tabpanel"
          aria-labelledby="Excel-tab"
        >
          Excel
        </div>
        <div
          className="tab-pane fade"
          id="WebDevelopment"
          role="tabpanel"
          aria-labelledby="WebDevelopment-tab"
        >
          Web Development
        </div>
        <div
          className="tab-pane fade"
          id="JavaScript"
          role="tabpanel"
          aria-labelledby="JavaScript-tab"
        >
          JavaScript
        </div>
        <div
          className="tab-pane fade"
          id="DataScience"
          role="tabpanel"
          aria-labelledby="DataScience-tab"
        >
          Data Science
        </div>
        <div
          className="tab-pane fade"
          id="AWSCertificate"
          role="tabpanel"
          aria-labelledby="AWSCertificate-tab"
        >
          AWS Certificate
        </div>
        <div
          className="tab-pane fade"
          id="Drawing"
          role="tabpanel"
          aria-labelledby="Drawing-tab"
        >
          Drawing
        </div>
      </div>*/
