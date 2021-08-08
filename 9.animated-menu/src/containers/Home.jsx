import React, { useState } from "react";
import { pageData } from "../data";
import Header from "../components/Header";

import "../styles/home.scss";
import ContactButton from "../components/ContactButton";

const Home = () => {
  return (
    <>
      <Header />
      <div className="main-container" id="main-container">
        <h1>
          Bleu <br /> Blanc <br /> Studio
        </h1>
        <ContactButton />
      </div>
    </>
  );
};
export default Home;
