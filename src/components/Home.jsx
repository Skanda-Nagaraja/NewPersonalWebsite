import React from "react";
import pp from "../assets/pp.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Welcome! My name is Skanda Nagaraja. 
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I am a driven third-year Computer Science student at Texas A&M University, with a deep-seated passion for the burgeoning field of Artificial Intelligence, particularly at the intersection of technology and finance. My academic journey and projects have equipped me with a robust understanding of various programming languages and AI methodologies. Motivated by the potential to revolutionize financial technologies, I am keen to contribute to groundbreaking innovations. Whether building them from scratch or improving existing frameworks, I am on the quest to be at the forefront of the next big advancement in tech.
          </p>

          <div className="my-4">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="mt-8 md:mt-0">
          <img
            src={pp}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;