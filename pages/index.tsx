import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { Heading } from "@chakra-ui/react";

import Navbar from "../components/navbar.js";
import Footer from "../components/footer.js";

const Home: NextPage = () => {
  return (
    <div className="">
      <div className="homepage">

        <div className="header">
          <img
            src="/static/images/header.png"
            className="header-image"
            alt="Project Mix Header"
          />
        </div>

        <div className="game-description">
        <img
            src="/static/images/gameDescriptionBG.png"
            className="game-description-bg"
            alt="Project Mix Header"
          />

          <div className="game-description-text">
            <Heading>A VR game with a unique fusion of visual novel, booze em up and rhythm game elements to tell the tale of a cyberpunk bartender.</Heading>
          </div>

        </div>




      </div>

      {/*<div className="background-lines">
        <div className="light x1"></div>
        <div className="light x2"></div>
        <div className="light x3"></div>
        <div className="light x4"></div>
        <div className="light x5"></div>
        <div className="light x6"></div>
        <div className="light x7"></div>
        <div className="light x8"></div>
        <div className="light x9"></div>
  </div>*/}
    </div>
  );
};

export default Home;
