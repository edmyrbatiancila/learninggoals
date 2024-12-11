
interface IndexProps {
    course:         string,
    href:           string,
    description:    string
}

const Course: React.FC<IndexProps> = (props) => {
    return(
        <section className="border-b pb-5 mb-5">
            <div className="mb-10">
                <h3 className="mb-10"><a className='hover:text-blue-500 font-bold' href={props.href} target='_blank'>{props.course}</a></h3>
                <p>{props.description}</p>
            </div>
        </section>
    )
}

export default Course;