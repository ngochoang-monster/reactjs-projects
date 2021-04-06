import { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';



function Question({ title, info }) {

    const [showInfo, setShowInfo] = useState(false)

    const actionShow = () => {
        setShowInfo(!showInfo)
    }

    return (
        <section>
            <div className='wrap'>
                <div className="box">
                    <h3>{title}</h3>
                    <button className="btn-acc" onClick={actionShow}>
                        {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
                    </button>
                </div>
                {showInfo ? <p className="info">{info}</p> : ''}
            </div>
        </section>
    )
}

export default Question;