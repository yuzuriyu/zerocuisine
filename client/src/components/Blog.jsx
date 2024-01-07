import React, { useContext, useState, useRef, useEffect } from "react";
import { FoodContext } from "../context/FoodContext";

const ITEMS_PER_PAGE = 6;

export default function Blog() {
  const { blog } = useContext(FoodContext);
  const [currentPage, setCurrentPage] = useState(1);

  const blogRef = useRef();
  const totalItems = blog.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = blog.slice(startIndex, endIndex);

  const scrollIntoView = () => {
    blogRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    scrollIntoView();
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    scrollIntoView();
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    scrollIntoView();
  };

  return (
    <div>
      <div className="w-full h-[60vh] relative">
        <img
          src="https://i.imgur.com/CfMRnUy.png"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute top-1/2 -translate-y-1/2 w-11/12 -translate-x-1/2 left-1/2 md:w-10/12">
          <h1 className="text-7xl mb-5 text-white font-playfair text-center">
            Blog
          </h1>
          <p className="text-white text-xl text-center">
            It is easy way to create your beatiful blog for daily
          </p>
        </div>
      </div>
      <div>
        <div
          className="grid grid-cols-1 gap-10 w-11/12 m-auto pt-20 md:grid-cols-2 md:w-10/12 lg:grid-cols-3"
          ref={blogRef}
        >
          {currentItems.map((data, index) => (
            <div key={index} className="">
              <div>
                <img
                  src={data.photoUrl}
                  alt=""
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div>
                <div className="flex items-center py-4">
                  <img
                    src={data.profile}
                    alt=""
                    className="w-10 rounded-full mr-2"
                  />
                  <p className="text-xs">{data.author}</p>
                  <p className="mx-2">.</p>
                  <p className="text-xs">{data.date}</p>
                  <div className="flex items-center">
                    <p className="mx-2">.</p>
                    <p className="text-xs">{data.time}</p>
                    <p className="mx-2">.</p>
                    <p className="text-xs">{`${data.comments} comments`}</p>
                  </div>
                </div>
                <p className="border-b border-dotted border-black py-4 font-playfair text-2xl">
                  {data.title}
                </p>
                <p className="py-4 text-sm text-gray-500">{data.content}</p>

                <div className="flex items-center py-4">
                  <p className="mr-2">Read More</p>
                  <p>→</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center py-20">
          <button
            onClick={() => {
              handlePrevPage();
            }}
            disabled={currentPage === 1}
            className={`mr-2 text-lg ${
              currentPage === 1 ? "hidden" : "visible"
            }`}
          >
            ←
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageClick(index + 1)}
              className={`mx-2 px-4 ${
                index + 1 === currentPage ? "text-blue-500" : "text-gray-500"
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => {
              handleNextPage();
            }}
            disabled={currentPage === totalPages}
            className={`ml-2 text-lg ${
              currentPage === totalPages ? "hidden" : "visible"
            }`}
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
