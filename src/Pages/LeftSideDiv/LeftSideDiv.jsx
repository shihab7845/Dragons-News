import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Card from '../Card/Card';




export default function LeftSideDiv() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);


    return (
        <div className="bg-gray-50 p-6 rounded-lg">
        <h1 className="text-xl font-semibold text-gray-800 mb-4">All Categories: {data.length}</h1>
        {data.map((result) => (
          <Link
            key={result.id}
            className="flex flex-col text-blue-500 py-2 px-4 border border-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition mb-2"
          >
            {result.name}
          </Link>
         
        ))}
      </div>
      
      

    )
}
