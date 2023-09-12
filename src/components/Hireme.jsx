import React from "react";
import hireMe from "../assets/images/hireMe.jpg"

const Hireme = () => {
  return (
    <section id="hireme" className="py-10 px-3 text-white" >
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Hire <span className="text-indigo-800"> Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Do you have any work?</p>
      </div>
      <div className=" border-4 border-indigo-800 bg-black relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center">
        <div>
            <h2 className="text-2xl font-semibold">Do you want any work from me?</h2>
            <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit iure ad architecto tempora inventore dicta, ullam perspiciatis quisquam consequatur officiis sequi tenetur unde nobis, esse laborum in! Veritatis, reiciendis et.
            </p>
            <button className="btn-primary mt-10">Say Hello</button>
        </div>
        <img src={hireMe} alt="" className="lg:h-[18rem] w-82 h-[32rem] lg:absolute bottom- -right-0.5 object-scale-down rounded-xl" />
      </div>
    </section>
  )
}

export default Hireme;