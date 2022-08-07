import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";

import { Grid, GridItem } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";

import Navbar from "../components/navbar.js";
import Footer from "../components/footer.js";
import Player from "../components/player.js";

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

        <div className="center">
          <img
            src="/static/images/genres.png"
            className="genres"
            alt="Genres"
          />
        </div>
        <br />

        {/* Game description */}
        <div className="game-description">
          <div className="game-description-text">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Heading size="lg">
                Project Mix is a VR Visual Novel set in a unique cyberpunk world
                where you play as Joyce, a fresh bartender recruit at Eleventh
                Heaven, the local run-down bar.
              </Heading>
              <br />
              <Heading size="lg">
                As Joyce lives her day-to-day life and mingles with bar-goers,
                she finds out there is much more to the disillusioned city than
                it appears.
              </Heading>
            </motion.div>
          </div>
        </div>

        <br />

        <br />
        <br />
        <br />
        <div className="center">
          <img
            src="/static/images/environments.png"
            className="environments-gallery"
            alt="Environments"
          />
        </div>
        <br />
        <br />
        <br />
        <br />

        <div className="features-section">
          <Heading as="h2" size="lg">
            Features:
          </Heading>

          <ul>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
            >
              <li>• Reimagining the visual novel genre for virtual reality.</li>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
            >
              <li>
                • Fully interactive drink mixing. Pour liquids between glasses,
                shake up mistures, and serve the cocktail of your dreams.
              </li>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
            >
              <li>
                • Original story set in a unique cyberpunk world with multiple
                endings. Explore different storylines and see where it takes
                you.
              </li>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
            >
              <li>
                • Deep character interaction. Get to know each character and see
                what secrets you find out.
              </li>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
            >
              <li>
                • Shape your relationship with appealing, unforgettable
                characters.
              </li>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
            >
              <li>• Immerse yourself with hours of original soundtrack.</li>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
            >
              <li>
                • Explore the world through gorgeous and atmospheric
                environments.
              </li>
            </motion.div>
          </ul>
        </div>

        {/* Game Trailer */}

        <div className="game-trailer-text">
          <Heading size="lg">CHECK OUT OUR TRAILER!</Heading>
        </div>

        <div className="game-trailer">
          <div className="trailer-video">
            <Player />
            {/* <ReactPlayer url="https://www.youtube.com/watch?v=mscz5Nm3VUo&ab_channel=PlectrumXR" /> */}
          </div>

          {/* <video>
            <source src={TrailerVideo} type="video/mp4"></source>
          </video> */}
          <img
            src="/static/images/gameTrailerBGplaceholder.png"
            className="game-trailer-bg"
            alt="Game Trailer Background"
          />
        </div>

        <br />
        <br />

        <div>
          {" "}
          <Heading>Want to stay connected or learn more?</Heading>
          <br />
        </div>

        <div className="buttons-section">
          <div className="double-buttons">
            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
              <GridItem w="100%" h="100%" bg="" className="center">
                <div className="button-item">
                  <img
                    src="/static/images/discordButton.png"
                    className=""
                    alt="Join Discord Server Button"
                  />
                </div>
              </GridItem>
              <GridItem w="100%" h="100%" bg="" className="center">
                <div className="button-item">
                  <img
                    src="/static/images/wikiButton.png"
                    className=""
                    alt="View our Wiki Page Button"
                  />
                </div>
              </GridItem>
            </Grid>
          </div>
        </div>

        <br />

        {/*
        <div className="character-section">
          <div className="joyce-character"></div>
          <div className="mei-character"></div>
          <div className="merc-character"></div>
          <div className="takashi-character"></div>
        </div>*/}

        <Footer />
        <div className="logo-section">
          <img
            className="footer-logo-img"
            src="/static/images/plectrumLogo.png"
            alt="Plectrum Logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
