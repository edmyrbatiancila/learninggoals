import React, { useState } from "react";

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
    course:     Course;
    onDelete:   (courseId: number) => void;
}


const Course: React.FC<CourseProps> = ({ course, onDelete } ) => {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleDeleteClick = () => {
        setIsModalVisible(true);
    };

    const handleCloseModal = () => {
        setIsModalVisible(false);
    }

    const handleConfirmDelete = () => {
        onDelete(course.id);
        setIsModalVisible(false);
    }

    return(
        <section className="border-b pb-5 mb-5">
            <div className="text-right">
                <i 
                    className="fa-regular fa-circle-xmark font-bold text-xl cursor-pointer"
                    onClick={ handleDeleteClick }
                ></i>
            </div>
            <div className="mb-10">
                <p>Title: { course.title }</p>
                <p>Link: { course.url }</p>
                <p>Description: { course.description }</p>
                <p>Course from: { course.platform }</p>
                <p>Category: { course.category }</p>
                <p>Completed?: { course.complete ? 'Yes' : 'Not yet' }</p>
            </div>

            {isModalVisible &&  (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
                        <h3 className="text-xl font-semibold mb-4">Are you sure you want to delete this course?</h3>
                        <div className="flex justify-between">
                            <button
                                onClick={handleConfirmDelete}
                                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                            >
                                Yes, Delete
                            </button>
                            <button
                                onClick={handleCloseModal}
                                className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Course;