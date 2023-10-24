import React, { useEffect } from "react";
import "../styles/App.css";

const instagramPostUrls = [
  "https://www.instagram.com/p/CywwWIWAtvS/",
  "https://www.instagram.com/p/B64f4aEAytF/",
  "https://www.instagram.com/p/B3GS0cxgXg2/",
  "https://www.instagram.com/p/Bps579HgB9m/",
  "https://www.instagram.com/p/Bp23ZU1lIb9/",
  "https://www.instagram.com/p/BqI50IAAJnH/",
];

function Work() {
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
    <div className="min-h-screen flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-36 mt-32">
        {instagramPostUrls.map((url, index) => (
          <div
            key={index}
            className={`flex justify-center ${index < 3 ? "aos-init" : ""}`}
            data-aos={index < 3 ? "fade-right" : "fade-left"}
            data-aos-duration="3000"
          >
            <iframe
              src={`${url}embed/`}
              title={`Instagram Post ${index}`}
              width="320"
              height="320"
              frameBorder="0"
              scrolling="no"
              className="rounded-2xl mb-12"
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work;
