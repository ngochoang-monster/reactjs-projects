import { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

import people from './data'
import '../../App.css'

function Run() {

    const [index, setIndex] = useState(0)

    const { name, job, image, text } = people[index]

    const checkIndex = (number) => {
        if (number < 0) {
            return people.length - 1
        }

        if (number > people.length - 1) {
            return 0
        }


        return number;
    }

    const nextView = () => {
        let newIndex = index + 1
        setIndex(newIndex)
        setIndex(checkIndex(newIndex))

    }

    const preView = () => {
        let newIndex = index - 1
        setIndex(newIndex)
        setIndex(checkIndex(newIndex))
    }

    const random = () => {
        const randomIndex = Math.floor(Math.random() * people.length)
        setIndex(randomIndex)
    }


    return (
        <main className='app'>
            <div className='box-app'>
                <img className='img' src={image} alt={name} />
            </div>
            <h2 className='name'>{name}</h2>
            <h2 className='job'>{job}</h2>
            <p className='text'>{text}</p>
            <div className='control'>
                <button onClick={preView}><FaChevronLeft /></button>
                <button onClick={nextView}><FaChevronRight /></button>
            </div>
            <button onClick={random}>Random</button>
        </main>
    )
};

export default Run;