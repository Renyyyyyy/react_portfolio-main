import React from "react";
import hero from '../assets/images/hero.png';

const Hero = () => {
  const social_mediaLinks = [
    {name:"logo-instagram", link:"https://www.instagram.com/"},
    {name:"logo-instagram", link:"https://www.instagram.com/"},
    {name:"logo-instagram", link:"https://www.instagram.com/"},
    {name:"logo-instagram", link:"https://www.instagram.com/"},
];
  return (
  <section id="home" className="min-h-screen flex py-10 md:flex-row flex-col items-center bg-black">
    <div className="flex-1 flex items-center justify-center h-full">
     <img src={hero} alt="" className="md:w-auto h-[30rem] rounded-xl object-cover" />
    </div>
    <div className="flex-1">
      
    <div className="md:text-left text-center">
        <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
          <span className="text-indigo-800 md:text-6xl text-5xl">
            Hello!
            <br />
          </span>
          My Name is <span>Ayodele Oyinkansola</span>
        </h1>
        <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
          Front End Developer
        </h4>
        <button className="btn-primary mt-8 bg-black text-white">Contact Me</button>
        <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
          {social_mediaLinks?.map(icon => (
              <div key={icon} className="text-white hover:text-white cursor-pointer">
                <ion-icon name={icon}>
                  <a href={social_mediaLinks?.link}>{}</a>
                </ion-icon>
              </div>
            ))}
        </div>
      </div>
    </div>
    </section>
  );
};

export default Hero;