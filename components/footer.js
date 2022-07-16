import { Heading } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <Grid templateColumns="repeat(2, 1fr)" gap={5}>
          <GridItem w="30vw" h="10vh" bg="blue.500">
            <h1>KEEP IN TOUCH!</h1>
          </GridItem>
          <GridItem w="30vw" h="10vh" bg="blue.500">
            <h1>social media here</h1>
            <img
              className="social-media-icon"
              src="/static/images/facebook-icon.png"
              alt="Facebook Logo"
            />
            <img
              className="social-media-icon"
              src="/static/images/instagram-icon.png"
              alt="Instagram Logo"
            />
            <img
              className="social-media-icon"
              src="/static/images/twitter-icon.png"
              alt="Twitter Logo"
            />
          </GridItem>
        </Grid>
      </div>

      <img
        className="footer-logo-img"
        src="/static/images/plectrumLogo.png"
        alt="Plectrum Logo"
      />
    </div>
  );
}
