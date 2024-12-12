import React from 'react';
import { Head, router } from "@inertiajs/react";
import Navbar from '@/Components/Learning/Navbar';


interface Props {
    hasCourse: boolean
}


const Index: React.FC<Props> = ({ hasCourse }) => {

    const handleCreateCourse = () => {
        router.visit('/course/create');
    }

    return (
        <>
            <Navbar />
            <main className='flex flex-col text-center py-10'>
                <Head title='Learning' />
            {!hasCourse && (
                <button 
                    onClick={ handleCreateCourse } 
                    className="btn btn-active btn-secondary"
                >
                    Create New Course
                </button>
            )
            }
            </main>
        </>
        
    )
}

export default Index;