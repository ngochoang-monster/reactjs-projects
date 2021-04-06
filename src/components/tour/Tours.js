import '../../App.css';

import Tour from './Tour';


function Tours({ tours, remove }) {
    return (
        <>
            {
                tours.map(tours => {
                    return (
                        <div className="App" key={tours.id}>
                            <Tour {...tours} remove={remove} />
                        </div>
                    )
                })
            }
        </>
    )
}

export default Tours;