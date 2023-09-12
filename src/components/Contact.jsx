import React from "react";

const Contact = () => {
  const contact_info = [
    { logo: "mail", text: "ayodeleoyinkansola268@gmail.com" },
    { logo: "logo-whatsapp", text: "+2347041715650" },
    { logo: "logo-instagram",link: "https://www.instagram.com/oyin.dev/" },

    {
      logo: "location",
      text: "Lagos, Nigeria.",
    },
  ];
  return (
    <section id="contact" className="py-10 px-3 text-black">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold text-white">
          Contact <span className="text-indigo-800">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div
          className="mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-gray-600 md:p-6 p-2 rounded-lg mx-auto"
        >
          <form className="flex flex-col flex-1 gap-5">
            <input type="text" placeholder="Your Name" />
            <input type="Email" placeholder="Your Email Address" />
            <textarea placeholder="Your Message" rows={10}></textarea>
            <a href="mailto:ayodeleoyinkansola268@gmail.com"> <button className="btn-primary w-fit">Send Message</button></a>
          </form>
          <div className="flex flex-col  gap-7 ">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-indigo-800 rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="md:text-base text-sm  break-words">
                  {contact.text}
                </p>
                <a href="https://www.instagram.com/oyin.dev/">
                  {contact.link}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
