import React, { useEffect, useState } from 'react';
import { Head, router } from "@inertiajs/react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Course from './Course';
import MessagePop from '@/Components/Learning/MessagePop';


interface CourseProps {
    id:             number;
    title:          string;
    url:            string;
    platform:       string;
    category:       string;
    description:    string;
    complete:       boolean;
}

interface Props {
    hasCourse:      boolean;
    courseCreated:  CourseProps[];
    successMessage: string | null;
}

const Index: React.FC<Props> = ({ hasCourse, courseCreated, successMessage }) => {

    const [courses, setCourses] = useState<CourseProps[]>(courseCreated);

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if(successMessage) {
            setIsVisible(true);
        }
    }, [successMessage]);

    const handleClose = () => {
        setIsVisible(false);
    };

    const handleCreateCourse = () => {
        router.visit('/course/create');
    };

    const handleDeleteCourse = (courseId: number) => {
            router.delete(`/course/${courseId}`, {
                onSuccess: () => {
                    setCourses((prevCourses) => prevCourses.filter((course) => course.id !== courseId));
                }
            });
    }

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Learning
                </h2>
            }
        >
            <Head title='Learning' />

            <MessagePop 
                message={ successMessage || '' }
                isVisible={ isVisible }
                onClose={ handleClose }
            />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 text-center">
                        {!hasCourse && (
                            <>
                                <h1 className='text-xl py-10 m-5 font-bold'>You don't have any course enrolled yet!</h1>
                                <button 
                                    onClick={ handleCreateCourse } 
                                    className="btn btn-active btn-secondary"
                                >
                                    Create New Course
                                </button>
                            </>
                            
                        )}
                        {hasCourse && courseCreated.map((c) => (
                            <Course key={ c.id } course={ c } onDelete={ handleDeleteCourse } />
                        ))}
                        {hasCourse && (
                            <div>
                                <button
                                    onClick={ handleCreateCourse }
                                    className='btn btn-secondary'
                                >
                                    Add New Course
                                </button>
                            </div>
                        )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}

export default Index;