import { Heading } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <GridItem w="100%" h="10" bg="blue.500">
            <h1>KEEP IN TOUCH!</h1>
          </GridItem>
          <GridItem w="100%" h="10" bg="blue.500">
            <h1>social media here</h1>
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
