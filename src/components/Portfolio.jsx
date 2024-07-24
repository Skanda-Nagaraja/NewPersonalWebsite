import React from "react";
import word from "../assets/portfolio/word.jpg";
import stock from "../assets/portfolio/stock.jpg";
import open from "../assets/portfolio/open.jpeg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: word,
      url: 'https://github.com/Skanda-Nagaraja/CSCE314-Wordle'
    },
    {
      id: 2,
      src: stock,
      url: 'https://github.com/Skanda-Nagaraja/StockVibes'
    },
    {
      id: 3,
      src: open,
      url: 'https://github.com/Skanda-Nagaraja/SQLquery-Site'
    }    
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, url }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt={`Project ${id}`}
                className="rounded-md duration-200 hover:scale-105 w-full h-64 object-cover"
              />
              <div className="flex items-center justify-center">
                <a 
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
