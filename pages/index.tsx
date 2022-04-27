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

        {/* Game description */}
        <div className="game-description">
          {/*<img
            src="/static/images/gameDescriptionBG.png"
            className="game-description-bg"
            alt="Game Description Backgorund"
          />*/}

          <div className="game-description-text">
            <Heading>
              A VR game with a unique fusion of visual novel, booze em up and
              rhythm game elements to tell the tale of a cyberpunk bartender.
            </Heading>
          </div>
        </div>

        {/* Game Trailer */}

        <div className="game-trailer-text">
          <Heading>CHECK OUT OUR TRAILER!</Heading>
        </div>

        <div className="game-trailer">
          <img
            src="/static/images/gameTrailerBG.png"
            className="game-trailer-bg"
            alt="Game Trailer Background"
          />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Home;
