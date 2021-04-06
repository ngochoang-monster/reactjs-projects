import { useState } from 'react'

import '../../App.css';


function Tour({ id, name, info, image, price, remove }) {

    const [readMore, setReadMore] = useState(false)
    const [textReadMore, setTextReadMore] = useState('read more')

    const read = () => {
        if (!readMore) {
            setReadMore(true)
            setTextReadMore('hide')
        } else {
            setReadMore(false)
            setTextReadMore('read more')
        }
    }


    return (
        <section>
            <div className="App">
                <img src={image} alt={name} />
                <h2>{name}</h2>
                <p>{price}</p>
                <p>{
                    readMore ? info : info.substring(0, 200)
                }
                    < button onClick={read}> {textReadMore} </button>
                </p>
                <button onClick={() => remove(id)}>Remove</button>
            </div>
        </section >
    );
}

export default Tour;