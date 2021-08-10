import React, { useState } from "react";
import { pageData } from "../data";
import Header from "../components/Header";

import ContactButton from "../components/ContactButton";
import MenuManager from "../components/Menu/MenuManager";

import "../styles/home.scss";

const Home = () => {
  return (
      <MenuManager>

      <Header />
      <div className="main-container" id="main-container">
        <h1>
          Bleu <br /> Blanc <br /> Studio
        </h1>
        <ContactButton />
      </div>
      </MenuManager>
  );
};
export default Home;
