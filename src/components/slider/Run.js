import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import data from './data'


function Run() {

    const [people, setPeople] = useState(data);
    const [index, setIndex] = useState(0);

    if (index < 0) {
        setIndex(people.length - 1);
    }

    if (index > people.length - 1) {
        setIndex(0)
    }


    useEffect(() => {
        let slider = setTimeout(() => {
            setIndex(index + 1);
        }, 3000)

        return () => clearTimeout(slider)
    }, [index])

    return (
        <section className="container-slider" >
            <div className="main-slider">


                {
                    people.map((item, i) => {
                        const { name, title, quote, image, id } = item;

                        let position = "active-slider-right";

                        if (i === index) {
                            position = "active-slider";
                        }

                        if (i === index - 1) {
                            position = "active-slider-left";
                        }

                        return (
                            <section className={`wrap-slider ${position}`} key={id}>
                                <img src={image} alt={title} className="img-slider" />
                                <h2 className="name-slider">{name}</h2>
                                <h2 className="title-slider">{title}</h2>
                                <div className="quote">
                                    <p>{quote}</p>
                                </div>
                            </section>
                        )
                    })
                }
            </div>
            <div className="box-control-slider">
                <span className="control-slider" onClick={() => setIndex(index - 1)}><FaChevronLeft /></span>
                <span className="control-slider" onClick={() => setIndex(index + 1)}><FaChevronRight /></span>
            </div>
        </section>
    );
}

export default Run;