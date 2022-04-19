import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { Heading } from "@chakra-ui/react";

import Navbar from "../components/navbar.js";

const Home: NextPage = () => {
  return (
    <div className="">
      <div className="homepage">
        <Heading>Project Mix</Heading>
        {/*<Navbar/>*/}

        <img src="/static/images/header.png" alt="Header" />
      </div>

      <div className="background-lines">
        <div className="light x1"></div>
        <div className="light x2"></div>
        <div className="light x3"></div>
        <div className="light x4"></div>
        <div className="light x5"></div>
        <div className="light x6"></div>
        <div className="light x7"></div>
        <div className="light x8"></div>
        <div className="light x9"></div>
      </div>
    </div>
  );
};

export default Home;
