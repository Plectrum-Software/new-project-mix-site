import { Heading } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-top"></div>

      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
      </Grid>
    </div>
  );
}
