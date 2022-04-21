import { Heading } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div><Heading>LET OTHERS KNOW!</Heading></div>
        <img
          src="/static/images/footerTop.png"
          className="footer-top-bg"
          alt="Footer Top"
        />
      </div>
    </div>
  );
}
