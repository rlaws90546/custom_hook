import React from 'react'
import UseFetch from './UseFetch'
import './FetchData.css'

const FetchData = () => {
    const [data]=UseFetch('https://api.npoint.io/9045c260b1565daa9e15');
    console.log(data);

    return (
        <>
        <ul className='list_data_main'>
            <h1 className='usefetch_heading'>Use Fetch Custom Hook</h1>
            {data && data.map((i)=> (
                <>
                    <li className='list_data'>
                        <h3>{i.name}</h3>
                        <p><strong>Importance: </strong>{i.importance}</p>
                        <p><strong>Benefits: </strong>{i.benefits6}</p>
                        <p><strong>Time: </strong>{i.best_time_to_intake}</p>
                    </li>
                </>
            ))}
        </ul>
        </>
    )
}

export default FetchData