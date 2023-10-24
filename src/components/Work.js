import React from "react";
import "../styles/App.css";

const instagramPostUrls = [
  "https://www.instagram.com/p/CywwWIWAtvS/",
  " https://www.instagram.com/p/B64f4aEAytF/",
  "https://www.instagram.com/p/B3GS0cxgXg2/",
  "https://www.instagram.com/p/Bps579HgB9m/",
  "https://www.instagram.com/p/Bp23ZU1lIb9/",
  "https://www.instagram.com/p/BqI50IAAJnH/",
];

function Work() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-36 mt-32">
        {instagramPostUrls.map((url, index) => (
          <div key={index} className="flex justify-center">
            <iframe
              src={`${url}embed/`}
              title={`Instagram Post ${index}`}
              width="340"
              height="340" // Set a fixed height here
              frameBorder="0"
              scrolling="no"
              className="rounded-2xl mb-12 "
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work;
