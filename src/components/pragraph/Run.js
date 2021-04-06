import { useState } from 'react';

import data from './data';

function Run() {

    const [text, setText] = useState([]);
    const [count, setCount] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        let amount = parseInt(count);
        if (count < 0) {
            amount = data.length - 1
        }

        setText(data.slice(0, amount));
    }

    return (
        <section className="main-paragraph">
            <form onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="amount">Paragraph:</label>
                <input type="number" id="amount"
                    className="input-number"
                    value={count}
                    onChange={(e) => setCount(e.target.value)} />
                <button type="submit"
                    className="btn-paragraph">GENERATE</button>
            </form>
            <article>
                {
                    text.map((item, index) => {

                        return (
                            <p className="paragraph" key={index}>{item}</p>
                        );
                    })
                }
            </article>
        </section>
    );
}

export default Run;