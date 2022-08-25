import React from "react";
import SingleCourse from "./SingleCourse";
import style from "./SingleCoursesSection.module.css";

function SingleCoursesSection(props) {
  // const img1 = "./image/python1.jpg";
  const dataCategory = props.data;
  return (
    <div className={style.showCourses}>
      <div className={style.hderOfCoursesSection}>
        <div className={style.title}>{dataCategory.header}</div>
        <div className={style.details}>{dataCategory.description}</div>
      </div>
      <button type="button" className={style.btnExplore}>
        Explore {dataCategory.nameCategory}
      </button>
      <div className={style.lstCourses}>
        <div className={style.lstGroupCourses}>
          <div className={style.groupCourses}>
            {dataCategory.courses.map((course, index) => (
              <SingleCourse
                key={index}
                image={course.image}
                title={course.title}
                instructors={course.instructors}
                rating={course.rating}
                stars={course.stars}
                price={course.price}
              />
            ))}
          </div>
          <button className={style.rightArrow}>
            <i className="fa-solid fa-circle-chevron-right"></i>
          </button>
          <button className={style.leftArrow}>
            <i className="fa-solid fa-circle-chevron-left"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleCoursesSection;
