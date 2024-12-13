import React from "react";

interface Course {
    id:             number;
    title:          string;
    url:            string;
    platform:       string;
    category:       string;
    description:    string;
    complete:       boolean;
}

interface CourseProps {
    course: Course
}


const Course: React.FC<CourseProps> = ({ course } ) => {
    return(
        <section className="border-b pb-5 mb-5">
            <div className="mb-10">
                <p>Title: { course.title }</p>
                <p>Link: { course.url }</p>
                <p>Description: { course.description }</p>
                <p>Course from: { course.platform }</p>
                <p>Category: { course.category }</p>
                <p>Completed?: { course.complete ? 'Yes' : 'Not yet' }</p>
            </div>
        </section>
    )
}

export default Course;