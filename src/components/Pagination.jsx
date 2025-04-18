import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_KEY } from "../../constant.js";

const Pagination = () => {
    const [myData, setMyData] = useState([]);
    const [page, setPage] = useState(1);

    const fetchData = async () => {
        try {
            const response = await axios.get(
                `https://pixabay.com/api/?key=${API_KEY}&q=flowers&page=${page}&per_page=8`
            );
            setMyData(response.data.hits);
        } catch (error) {
            console.error("Error fetching data:", error.message);
        }
    };

    useEffect(() => {
        fetchData();
    }, [page]);

    return (
        <div className="max-w-5xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
                Image Gallery
            </h1>

            {/* Image Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {myData.length > 0 ? (
                    myData.map((img) => (
                        <img
                            key={img.id}
                            src={img.webformatURL}
                            alt="img"
                            className="w-full h-40 object-cover rounded-xl shadow-md hover:scale-105 transition-transform"
                        />
                    ))
                ) : (
                    <p className="text-gray-600 text-center col-span-full">
                        Loading...
                    </p>
                )}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center gap-4 mt-6">
                <button
                    onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
                >
                    Prev
                </button>
                <span className="text-lg font-semibold text-gray-700">Page: {page}</span>
                <button
                    onClick={() => setPage((prev) => prev + 1)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Pagination;
