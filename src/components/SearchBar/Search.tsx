

import { useGetAllBikesQuery } from '@/redux/features/bike/bikeApi';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const { data: bikes, isLoading, isError } = useGetAllBikesQuery(searchTerm, { skip: !searchTerm });

    const handleSearch = () => {
        setSearchTerm(searchTerm);
    };

    return (
        <div className="p-6 max-w-screen-md mx-auto">
            <h1 className="text-3xl font-bold mb-4">Find Your Perfect Bike</h1>
            <p className="text-lg mb-6">Search our collection of bikes and get started with your adventure!</p>
            
            <div className="flex mb-6">
                <input
                    type="text"
                    placeholder="Search for bikes..."
                    className="border border-gray-300 p-2 rounded-l-md flex-grow"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Button
                    onClick={handleSearch}
                    
                >
                    Search
                </Button>
            </div>

            <div className="text-center">
                {/* <Button
                    onClick={() => alert('Start your adventure now!')} // Replace with actual CTA action
                    className="bg-green-500 text-white p-4 rounded hover:bg-green-600"
                >
                    Start Your Adventure Now!
                </Button> */}
            </div>
            
            {/* Render search results */}
            <div className="mt-6">
                {isLoading && <p>Loading...</p>}
                {isError && <p>Error occurred while fetching bikes.</p>}
                {bikes?.length === 0 && <p>No bikes found.</p>}
                {bikes?.data?.map(bike => (
                    <div key={bike._id} className="p-4 border-b flex items-center justify-between">
                        <div>
                        <h3 className="text-xl font-semibold">{bike.name}</h3>
                        <p>Price: ${bike.pricePerHour}</p>
                        </div>
                        <div>
                            <Link  to={`/bikes/${bike._id}`}><Button >View more</Button></Link>
                        </div>
                        {/* Additional bike details */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Search;
