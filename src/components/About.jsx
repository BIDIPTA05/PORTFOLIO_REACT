import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I am a Full stack developer from Guwahati, working with React and Node JS. Build and worked on Node JS and React Projects.
        </p>

        <br />

        <p className="text-xl">
                  Intrigued by coding, traveling, technology, strategy, philosophy, fabulous food, and even better conversations. 
                  </p>
<p className="text-xl">
Seeking to be inspired, to envision the unlikely, to work hard for things that are worth it, and to be surrounded by those who bring out the best in me.
        </p>
      </div>
    </div>
  );
};

export default About;
