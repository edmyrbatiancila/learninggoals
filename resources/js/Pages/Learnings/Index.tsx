import React from 'react';
import Course from './Course';
import { Head, Link } from "@inertiajs/react";
import Navbar from '@/Components/Learning/Navbar';


interface Props {
    hasCourse: boolean
}


const Index: React.FC<Props> = ({ hasCourse }) => {

    const handleCreateCourse = () => {
        
    }

    return (
        <>
            <Navbar />
            <main className='flex flex-col text-center py-10'>
                <Head title='Learning' />
                <Course 
                    course='IACCS 2013' 
                    href='https://help.coredev.ph/pages/17' 
                    description='Learn basic and fundamentals of IACCS developed by coreDev' 
                />

                <Course 
                    course='Learn ReactJS' 
                    href='https://scrimba.com/learn-react-c0e' 
                    description='Learn basic and fundamentals of ReactJS by Scrimba' 
                />

                <Course 
                    course='Learn Laravel + ReactJS + TypeScript with InertiaJS' 
                    href='https://youtu.be/q6zxLf3_CxQ?si=9pFxLhgTSzugl2Pm' 
                    description='Learn advanced concept of creating project using Laravel Framework, ReactJS and TypeScript.' 
                />
            </main>
        </>
        
    )
}

export default Index;