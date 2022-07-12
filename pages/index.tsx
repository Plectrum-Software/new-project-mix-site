import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { Grid, GridItem } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";

import Navbar from "../components/navbar.js";
import Footer from "../components/footer.js";
import TrailerVideo from "../public/static/videos/LatestTrailer.mp4";

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
          <video src={TrailerVideo} />
          <img
            src="/static/images/gameTrailerBG.png"
            className="game-trailer-bg"
            alt="Game Trailer Background"
          />
        </div>

        <div className="buttons-section">
          <Grid templateColumns="repeat(5, 1fr)" gap={6}>
            <GridItem w="100%" h="10" bg="blue.500">
              <img
                src="/static/images/discordButton.png"
                className=""
                alt="Join Discord Server Button"
              />
            </GridItem>
            <GridItem w="100%" h="10" bg="blue.500">
              <img
                src="/static/images/wikiButton.png"
                className=""
                alt="View our Wiki Page Button"
              />
            </GridItem>
          </Grid>
        </div>

        {/*
        <div className="character-section">
          <div className="joyce-character"></div>
          <div className="mei-character"></div>
          <div className="merc-character"></div>
          <div className="takashi-character"></div>
        </div>*/}

        <Footer />
        <img
          src="/static/images/plectrumLogo.png"
          className=""
          alt="Plectrum Logo"
        />
      </div>
    </div>
  );
};

export default Home;
