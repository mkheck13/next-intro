import React from 'react'

interface FetchResponse {
    count: number;
    name: string;
    age: number;
}

const Dashboard = async ({ params }: { params: Promise<{ username: string }> }) => {
    const { username } = await params;

    const response = await fetch(`https://api.agify.io?name=${username}`);
    const data: FetchResponse = await response.json();

    console.log(data);

    return (
        <div className='min-h-screen flex items-center justify-center'>
            <div>
                <h3 className='text-3xl pb-4'>The chosen username is: {username}</h3>
                <p className='text-xl'>Fetch Response</p>
                <p className='pl-3'>Count: {data.count}</p>
                <p className='pl-3'>Age: {data.age}</p>
            </div>
        </div>
    )
}

export default Dashboard