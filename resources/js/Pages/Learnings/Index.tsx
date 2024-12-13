import React from 'react';
import { Head, router } from "@inertiajs/react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';


interface Props {
    hasCourse: boolean
}


const Index: React.FC<Props> = ({ hasCourse }) => {

    const handleCreateCourse = () => {
        router.visit('/course/create');
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
                            
                        )
                        }
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
        
    )
}

export default Index;