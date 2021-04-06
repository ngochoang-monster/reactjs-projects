import data from './data';
import Question from './Question'

function Run() {

    return (
        <main className='box-acc'>
            <h2>Questions and answers about login</h2>
            {
                data.map(question => {
                    return (
                        <Question key={question.id} {...question} />
                    )
                })
            }
        </main>
    );
};

export default Run;