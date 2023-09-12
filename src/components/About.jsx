import React from "react";
import aboutImg from '../assets/images/about.jpg';

const about = () => {
  const info=[
  { text:'Year experience',count:'01'},
  { text:'Completed Projects',count:'06'},

  ]
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-indigo-800">Me</span></h3>
          {/* <p className="text-gray-400 my-3 text-lg">My Introduction</p> */}
       <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
        <div className="p-2">
          <div className="text-gray-300 my-3">
            <p className="text-justify leading-7 w-11/12 mx-auto text-xl">
              My name is Ayodele Oyinkansola. I am a freelance front end developer from Ekobits I.C.T Academy currently based in my home country, Nigeria.I use technologies such as Html, CSS, JavaScript and React. I create websites that that achieve marketing goals. I am also a brand designer.</p>
            <div className="flex mt-10 items-center gap-7">
             {
              info.map(content=>(
                <div key={content.text}>
                  <h3 className="md:text-4xl text-2xl font-semibold text-white">{content.count}</h3>
                  <span>{content.text}</span>
                </div>
              ))
             }
             {/* <a href="">
              <button className="btn-primary animate-bounce">Download CV</button>
             </a> */}
            </div>
          </div>
        </div>
        <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
          <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg">
            <img src={aboutImg} alt="" className="w-full object-cover bg-black rounded-xl"/>
          </div>

        </div>
       </div>
      </div>
    </section>
  )
}

export default about;