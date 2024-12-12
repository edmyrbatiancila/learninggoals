import Navbar from "@/Components/Learning/Navbar";


const Create = () => {
    return(
        <>
            <Navbar />
            <main className="h-10 my-10 grid place-items-center">
                <form 
                    className="flex flex-col justify-center border p-10 align-items-center rounded-lg" action=""
                >
                    <div className="my-5">
                        <p className="text-center text-xl">Enter Course you take!</p>
                    </div>
                    <label 
                        className="input flex items-center align-content-center gap-7 mb-5 justify-content-center text-center"
                    >
                        Title
                        <input 
                            type="text" 
                            className="w-full"
                            placeholder="Daisy" 
                        />
                    </label>
                    <label 
                        className="input flex items-center gap-10 mb-5"
                    >
                        Url
                        <input 
                            type="email" 
                            className="w-full" 
                            placeholder="daisy@site.com" 
                        />
                    </label>
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
                    <label className="form-control mb-5">
                        <div className="label">
                            <span className="label-text">Course Description</span>
                        </div>
                        <textarea className="textarea textarea-bordered h-40" placeholder="Bio"></textarea>
                    </label>
                    
                </form>
            </main>
        </>
    )
}

export default Create;