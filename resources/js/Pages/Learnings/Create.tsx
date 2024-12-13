import { Head, useForm } from "@inertiajs/react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useState } from "react";
import InputError from "@/Components/InputError";
import PrimaryButton from '@/Components/PrimaryButton';





const Create = () => {

    // const [formData, setFormData] = useState({
    //     title:          '',
    //     url:            '',
    //     platform:       '',
    //     category:       '',
    //     description:    ''
    // });

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    //     const { name, value } = e.target;
    //     setFormData({
    //         ...formData,
    //         [name]: value,
    //     });
    // };

    const {data, setData, post, processing, reset, errors} = useForm({
        title:          '',
        url:            '',
        platform:       '',
        category:       '',
        description:    ''
    });

    const createCourse = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('learning.store'), { onSuccess: () => reset() });
    }


    return(
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Create New Course
                </h2>
            }
        >
            <Head title="Create Course" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-center">
                            <form
                                onSubmit={ createCourse }
                                className="flex flex-col justify-center border p-10 align-items-center rounded-lg"
                            >
                                <div className="mb-20">
                                    <p className="text-center text-xl">Enter Course you take!</p>
                                </div>
                                <label 
                                    className="font-bold input flex items-center gap-7 mb-5"
                                >
                                    Title
                                    <input 
                                        type="text" 
                                        name="title"
                                        value={ data.title }
                                        onChange={ e => setData('title', e.target.value) }
                                        className="w-full"
                                        placeholder="Title of your course?" 
                                    />
                                    <InputError message={ errors.title } className="mt-2" />
                                </label>
                                <label 
                                    className="font-bold input flex items-center gap-10 mb-5"
                                >
                                    Url
                                    <input 
                                        type="text" 
                                        name="url"
                                        value={ data.url }
                                        className="w-full" 
                                        onChange={ e => setData('url', e.target.value) }
                                        placeholder="Course Url?" 
                                    />
                                    <InputError message={ errors.url } className="mt-2" />
                                </label>
                                <div className="my-5 space-x-10">
                                    <InputError message={ errors.platform } className="mt-2" />
                                    <select 
                                        className="select select-bordered w-full max-w-xs mb-5"
                                        name="platform"
                                        value={ data.platform }
                                        onChange={ e => setData('platform', e.target.value) }
                                    >
                                        <option disabled selected>Where did you take this course?</option>
                                        <option>Udemy</option>
                                        <option>Scrimba</option>
                                        <option>Youtube</option>
                                        <option>Free Code Camp</option>
                                        <option>The Odin Project</option>
                                        <option>Laracasts</option>
                                        <option>Others</option>
                                    </select>
                                    <InputError message={ errors.category } className="mt-2" />
                                    <select 
                                        className="select select-bordered w-full max-w-xs mb-5"
                                        name="category"
                                        value={ data.category }
                                        onChange={ e => setData('category', e.target.value) }
                                    >
                                            <option disabled selected>Choose Course Category</option>
                                            <option>Front-End Development</option>
                                            <option>Back-End Development</option>
                                            <option>Full Stack Developmet</option>
                                            <option>Machine Learning</option>
                                            <option>Programming Languages</option>
                                    </select>
                                </div>
                                    <label className="form-control mb-5">
                                        <div className="label">
                                            <span className="label-text">Course Description</span>
                                        </div>
                                        <textarea 
                                            className="textarea textarea-bordered h-40" placeholder="Bio"
                                            name="description"
                                            value={ data.description }
                                            onChange={ e => setData('description', e.target.value) }
                                        ></textarea>
                                        <InputError message={ errors.description } className="mt-2" />
                                    </label>
                                    <div>
                                        <PrimaryButton disabled={processing} type="submit" className="btn btn-primary w-full text-white font-bold text-lg">Save</PrimaryButton>
                                    </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}

export default Create;