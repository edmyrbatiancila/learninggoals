import Navbar from "@/Components/Learning/Navbar";
import { Head } from "@inertiajs/react";


const Create = () => {
    return(
        <>

            <Navbar />
            <main className="h-10 my-10 grid place-items-center">
                <Head title="Create Course" />
                <form 
                    className="flex flex-col justify-center border p-10 align-items-center rounded-lg" action=""
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
                            className="w-full"
                            placeholder="Title of your course?" 
                        />
                    </label>
                    <label 
                        className="font-bold input flex items-center gap-10 mb-5"
                    >
                        Url
                        <input 
                            type="email" 
                            className="w-full" 
                            placeholder="Course Url?" 
                        />
                    </label>
                    <div className="my-5">
                        <select className="select select-bordered w-full max-w-xs mb-5">
                            <option disabled selected>Where did you take this course?</option>
                            <option>Udemy</option>
                            <option>Scrimba</option>
                            <option>Youtube</option>
                            <option>Free Code Camp</option>
                            <option>The Odin Project</option>
                            <option>Laracasts</option>
                            <option>Others</option>
                        </select>
                        <select className="select select-bordered w-full max-w-xs mb-5">
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
                        <textarea className="textarea textarea-bordered h-40" placeholder="Bio"></textarea>
                    </label>
                    <div>
                        <button type="submit" className="btn btn-primary w-full text-white font-bold text-lg">Save</button>
                    </div>
                </form>
            </main>
        </>
    )
}

export default Create;