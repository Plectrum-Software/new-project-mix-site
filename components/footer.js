import { Heading } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <Grid templateColumns="repeat(2, 1fr)" gap={5}>
          <GridItem w="30vw" h="10vh" bg="" className="center">
            <h2 className="keep-in-touch">KEEP IN TOUCH!</h2>
          </GridItem>
          <GridItem w="30vw" h="10vh" bg="" className="center">
            <a href="https://www.facebook.com/ProjectMixVR">
              <img
                className="social-media-icon"
                src="/static/images/facebook-icon.png"
                alt="Facebook Logo"
              />
            </a>
            <a href="https://www.instagram.com/projectmixvr/">
              <img
                className="social-media-icon"
                src="/static/images/instagram-icon.png"
                alt="Instagram Logo"
              />
            </a>
            <a href="https://www.twitter.com/projectmixvr">
              <img
                className="social-media-icon"
                src="/static/images/twitter-icon.png"
                alt="Twitter Logo"
              />
            </a>
          </GridItem>
        </Grid>
      </div>
    </div>
  );
}
