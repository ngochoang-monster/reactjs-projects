import { useState, useEffect } from 'react'

import Tours from './Tours';
import Loading from './Loading';

const url = 'https://course-api.com/react-tours-project'

function Run() {
    const [loading, setLoading] = useState(true)
    const [tours, setTour] = useState([])

    const getData = async () => {
        setLoading(true)
        try {
            const res = await fetch(url);
            const data = await res.json();
            setLoading(false)
            console.log(data)
            setTour(data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    const remove = (id) => {
        const newTour = tours.filter(tour => tour.id !== id)
        setTour(newTour)
    }

    const refresh = () => {
        getData()
    }

    if (loading) {
        return (
            <div className="App">
                <Loading />
            </div>
        );
    }

    if (tours.length === 0) {
        return (
            <div className="App">
                <button className="AppButton" onClick={refresh}>
                    F5
                </button>
            </div>
        )
    }

    return (
        <>
            <Tours tours={tours} remove={remove} />
        </>
    );
}

export default Run;