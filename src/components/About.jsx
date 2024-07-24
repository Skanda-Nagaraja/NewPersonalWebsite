import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white pt-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Welcome to my portfolio website! I am an enthusiastic and dedicated third-year Computer Science student at Texas A&M University, deeply engrossed in the dynamic field of machine learning. My academic and professional journey in artificial intelligence started out of curiosity and has blossomed into a focused commitment to harness its potential, especially in enhancing financial technologies and other sectors.

          During my recent internship, I gained hands-on experience applying machine learning techniques to real-world financial datasets, enhancing my skills in financial modeling, risk assessment, and fraud detection. These experiences not only solidified my technical expertise in data analysis, programming, and statistics but also sparked a stronger interest in developing innovative AI solutions that are both efficient and ethical.

          My portfolio is designed to reflect my academic accomplishments, practical projects, and significant professional milestones as I continue to delve deeper into machine learning. As I actively seek new roles and collaborative opportunities, I am eager to contribute to and learn from the cutting edge of AI development.

          Join me on this exhilarating journey as we explore the vast possibilities of machine learning to bridge theoretical knowledge with impactful real-world applications. Let’s leverage the transformative power of AI to forge a data-driven future that promises greater efficiency and enhanced decision-making across industries.
        </p>

        <br />

        <p className="text-xl">
          Through my portfolio, I aim to showcase my academic achievements, personal projects, and professional growth as I venture into the world of machine learning. As I explore diverse datasets and collaborate with industry professionals, I am eager to contribute to the development of efficient and ethical AI solutions that will shape the future of finance and other industries. Join me on this exciting journey as I embark on a quest to bridge the gap between theory and real-world applications in machine learning. Together, let's harness the power of AI to create a brighter and more data-driven future.
        </p>
      </div>
    </div>
  );
};

export default About;
