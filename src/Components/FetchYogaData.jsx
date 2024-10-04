import React from 'react'
import UseFetch from './UseFetch'
import './FetchData.css'

const FetchYogaData = () => {
    const [data]=UseFetch('https://api.npoint.io/4459a9a10e43812e1152');
    console.log(data);

    return (
        <>
        <ul className='list_data_main'>
            <h1 className='usefetch_heading'>Use Fetch Custom Hook</h1>
            {data && data.map((i)=> (
                <>
                    <li className='list_data'>
                        <h3>{i.name}</h3>
                        <p><strong>Benefits: </strong>{i.benefits}</p>
                        <p><strong>Time: </strong>{i.time_duration}</p>
                    </li>
                </>
            ))}
        </ul>
        </>
    )
}

export default FetchYogaData