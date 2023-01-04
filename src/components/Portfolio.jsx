import React from "react";
import crypto from "../assets/portfolio/crypto.jpg";
import weather from "../assets/portfolio/weather.jpg";
import todo from "../assets/portfolio/todo.jpg";
import food from "../assets/portfolio/food.jpg";
import incdec from "../assets/portfolio/incdec.jpg";
import registration from "../assets/portfolio/registration.jpg"; 
import series from "../assets/portfolio/series.jpg"; 
import blog from "../assets/portfolio/blog.jpg";
import chat from "../assets/portfolio/chat.jpg";



const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
        src: crypto,
        link1 : "https://crypto-coinfinder-bidiptasaikia.netlify.app",
        link2 : "https://github.com/BIDIPTA05/CRYPTOCURRENCY_COIN-FINDER-APP_REACT-JS",
   
        },
        {
            id: 2,
            src: weather,
         link1 : "https://weather-app-bidiptasaikia.netlify.app",
         link2 : "https://github.com/BIDIPTA05/WEATHER_APP_REACT",
        },
        {
            id: 3,
            src: todo,
            link1 : "https://todo-list-bidiptasaikia.netlify.app",
            link2 : "https://github.com/BIDIPTA05/TODO-LIST_REACT",
        },
        {
            id: 4,
            src: food,
            link1 : "https://food-app-bidiptasaikia.netlify.app",
            link2 : "https://github.com/BIDIPTA05/FOOD_APP_USING_REACT-JS",
        },
        {
            id: 5,
            src: incdec,
             link1 : "https://increment-decrement-bidiptasaikia.netlify.app",
             link2 : "https://github.com/BIDIPTA05/INCREMENT-_DECREMENT_USING_REACT-JS",
        },
        {
            id: 6,
            src: registration, 
             link1 : "https://registration-bidiptasaikia.netlify.app",
             link2 : "https://github.com/BIDIPTA05/REGISTRATION_FORM_REACT",
      },
     {
            id: 7,
            src: series, 
           link1 : "https://series-bidiptasaikia.netlify.app",
           link2 : "https://github.com/BIDIPTA05/SERIES_APP_REACT",
      },
        {
            id: 8,
            src: blog, 
            link1 : "https://github.com/BIDIPTA05/BLOG_APP_NODEJS_MONGODB",
            link2 : "https://github.com/BIDIPTA05/BLOG_APP_NODEJS_MONGODB",
      },
     {
            id: 9,
            src: chat, 
            link1 : "https://candid-taiyaki-a36169.netlify.app",
            link2 : "https://github.com/BIDIPTA05/REALTIME-CHAT_APP_SOCKET.IO",
        }]


  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-full"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id,src,link1,link2}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" href={link1} target="_blank" rel="noreferrer">
                  Demo
                </a>
                <a className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" href={link2} target="_blank" rel="noreferrer">
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
