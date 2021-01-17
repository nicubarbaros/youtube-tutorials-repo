import React from "react";
import "./style.scss";

const addresses = [
  {
    town: "Amsterdam",
    address: "IJpromenade 1, 1031 KT Amsterdam, Netherlands",
    phone: "+312 058 91400",
    email: "amsterdam@webunlocked.co",
  },
  {
    town: "London",
    address: "Westminster, London SW1A 0AA, United Kingdom",
    phone: "+442 072 468350",
    email: "london@webunlocked.co",
  },
  {
    town: "Zürich",
    address: "Museumstrasse 2, 8001 Zürich, Switzerland",
    phone: "+414 421 86511",
    email: "zurich@webunlocked.co",
  },
];
export default function Footer() {
  return (
    <div
      className="footer"
      data-scroll
      data-scroll-speed={-7}
      style={{
        backgroundUrl: `url(https://images.unsplash.com/photo-1473433025194-381637d4c01f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80)`,
      }}
    >
      <div className="contact-addresses">
        {addresses.map((info) => (
          <div key={info.town}>
            <h1>{info.town}</h1>
            <div>
              {info.address.split(",").map((element) => (
                <p key={element}>{element}</p>
              ))}
            </div>
            <p>{info.phone}</p>
            <p>{info.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
