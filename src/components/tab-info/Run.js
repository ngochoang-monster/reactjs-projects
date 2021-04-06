import { useState, useEffect } from 'react'
import { BsChevronDoubleRight } from 'react-icons/bs'

const url = 'https://course-api.com/react-tabs-project';


function Run() {

    const [loading, setLoading] = useState(true);
    const [jobs, setJobs] = useState([]);
    const [value, setValue] = useState(0);

    const fetchData = async () => {
        const res = await fetch(url);
        const data = await res.json();
        setJobs(data)
        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, [])

    if (loading) {
        return (
            <div className="Loading">
                <h2>Loading...</h2>
            </div>
        );
    }

    const { company, title, dates, duties } = jobs[value];

    return (
        <section>
            <div className="container">
                <h1 className="header-epx">Expierence</h1>
            </div>
            <div className="category-epx">
                {
                    jobs.map((job, index) => {
                        return (
                            <button className={`btn-epx ${index === value && 'active'}`}
                                key={job.id}
                                onClick={() => {
                                    setValue(index)
                                }}>
                                <h2>{job.company}</h2>
                            </button>
                        )
                    })
                }
            </div>

            <div className="body-duty ">
                <div>
                    <h2>{title}</h2>
                    <button>{company}</button>
                    <p>{dates}</p>
                </div>
                {
                    duties.map((duty, index) => {
                        return (
                            <div key={index} className="duty">
                                <span><BsChevronDoubleRight /></span>
                                <p className="duty-title">{duty}</p>
                            </div>
                        )
                    }
                    )
                }
            </div>
        </section>
    );
};

export default Run;


