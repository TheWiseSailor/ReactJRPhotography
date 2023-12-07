import React, { useEffect } from "react";

import applemojiImage from "../components/images/applemoji.jpg";
import aboutMeImage from "../components/images/Aboutme.jpg";
import "../styles/App.css";
function Home() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdn.rawgit.com/michalsnik/aos/2.1.1/dist/aos.css";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://cdn.rawgit.com/michalsnik/aos/2.1.1/dist/aos.js";
    document.body.appendChild(script);

    // Initialize AOS after the script has loaded
    script.onload = () => {
      window.AOS.init();
    };
  }, []);
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto p-4 flex-grow pt-32">
        <div className="container text-center text-blue-300 text-6xl font-bold pb-32">
          Beauty That Defines Nature
        </div>
        <div className="grid grid-cols-3 gap-4 ml-">
          {/* Column 1 */}
          <div className="col-span-1">
            <img
              src="https://images.unsplash.com/photo-1588001832198-c15cff59b078?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
              alt="Image 1"
              className="w-full h-[400px] rounded-3xl mb-4"
              data-aos="fade-right"
              data-aos-duration="3000"
            />
            <img
              src="https://images.unsplash.com/photo-1552837418-bf0be889c178?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW91bnRhaW4lMjBiYAWN3JvdW5kfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              alt="Image 2"
              className="w-full h-[200px] rounded-3xl"
              data-aos="fade-up"
              data-aos-duration="3000"
            />
          </div>

          {/* Column 2 */}
          <div className="col-span-1">
            <img
              src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="Image 3"
              className="w-full h-[200px] rounded-3xl"
              data-aos="fade-down"
              data-aos-duration="3000"
            />
            <img
              src="https://images.unsplash.com/photo-1569116454854-61036894af21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHN1bnSldHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              alt="Image 4"
              className="w-full h-[400px] mt-4 rounded-3xl"
              data-aos="fade-up"
              data-aos-duration="3000"
            />
          </div>

          {/* Column 3 */}
          <div className="col-span-1">
            <img
              src="https://images.unsplash.com/photo-1502739391963-eda719c24cd4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fHN1bnJpc2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              alt="Image 5"
              className="w-full h-[400px] rounded-3xl"
              data-aos="fade-left"
              data-aos-duration="3000"
            />
            <img
              src="https://images.unsplash.com/photo-1542662565-7e4b66bae529?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80"
              alt="Image 6"
              className="w-full h-[200px] mt-4 rounded-3xl"
              data-aos="fade-up"
              data-aos-duration="3000"
            />
          </div>
        </div>
        <div className="flex justify-center items-center pt-36 me">
          <div className="flex space-x-8 md:w-3/4 lg-w-1/2">
            <div className="">
              <img
                src={applemojiImage}
                alt="me"
                width="150"
                data-aos="fade-right"
                data-aos-duration="3000"
              />
            </div>
            <div className="pt-4 pb-32 rounded-lg justify-center items-center about-me">
              <h1
                className="text-4xl font-bold text-blue-300 flex justify-center text-center items-center"
                data-aos="fade-down"
                data-aos-duration="3000"
              >
                Who I Am
              </h1>
              <h2
                className="flex justify-center items-center text-center text-blue-300 mt-8 font-bold pl-6"
                data-aos="fade-left"
                data-aos-duration="3000"
              >
                I am a passionate individual who loves the art of photography
                and creating beautiful frontend UI/UX designs.
              </h2>
            </div>
          </div>
        </div>

        {/* section for why I like photography and coding */}
        <div
          className="introduction pb-16 flex justify-center items-center"
          data-aos="fade-left"
          data-aos-duration="3000"
        >
          <img
            src={aboutMeImage}
            alt="me"
            data-aos="fade-right"
            data-aos-duration="3000"
          />
        </div>

        {/* Contacts */}
        <div className="contacts bg-white text-blue-300 font-bold flex justify-center items-center pb-12">
          <h2 className="text-4xl">Contacts</h2>
        </div>
        <div className="flex justify-center pb-16">
          <a
            href="https://discordapp.com/users/389945057345667077"
            className="social-link mx-2 w-16 h-16 delay-10"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/2626/2626288.png"
              alt="discord"
              className="w-full h-full"
            />
          </a>
          <a
            href="mailto:rudasilljay@gmail.com"
            className="social-link mx-2 w-16 h-16 delay-20"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/552/552486.png"
              alt="email"
              className="w-full h-full"
            />
          </a>
          <a
            href="https://github.com/TheWiseSailor"
            className="social-link mx-2 w-16 h-16 delay-30"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/1051/1051326.png"
              alt="github"
              className="w-full h-full"
            />
          </a>
          <a
            href="https://www.snapchat.com/add/asianstudmuffin?share_id=gTwL0A4CTtWL7ns+pfxyvg&locale=en_US"
            className="social-link mx-2 w-16 h-16 delay-40"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/3670/3670166.png"
              alt="snapchat"
              className="w-full h-full"
            />
          </a>
          <a
            href="https://www.instagram.com/joseph_rudasill_"
            className="social-link mx-2 w-16 h-16 delay-50"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png"
              alt="instagram"
              className="w-full h-full"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/joseph-rudasill-2565a41ba/"
            className="social-link mx-2 w-16 h-16 delay-60"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/145/145807.png"
              alt="linkedin"
              className="w-full h-full"
            />
          </a>
        </div>

        {/* Add any other content here */}
      </div>
    </div>
  );
}
export default Home;

// Possible updates on this in the future, that is if I do coding and photography on the side
//maybe add backend
