import React from "react";
import Typewriter from "typewriter-effect";
import my_photo from "../../images/my_photo.jpg";
import { useStyles } from "./styles";
import { Box, Container } from "@material-ui/core";
import { gsap } from "gsap";

const Hero: React.FC = () => {
  const classes = useStyles();

  gsap.fromTo(
    "#my_photo",
    { x: "-60px", opacity: 0 },
    { x: "-100px", duration: 2, opacity: 1 }
  );

  return (
    <section className={classes.hero}>
      <Container>
        <Box className={classes.heroContainer}>
          <Box className={classes.heroInner}>
            <div id="my_photo" className={classes.photoWrapper}>
              <img className={classes.photo} src={my_photo} alt="my photo" />
            </div>
            <h1 className={classes.presentation}>
              <Typewriter
                options={{
                  delay: 35,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(2000)
                    .typeString("Hi")
                    .pauseFor(700)
                    .typeString(", <br/> my name is Andrew Sibiriakov")
                    .pauseFor(700)
                    .typeString(", <br/> i`m frontend developer")
                    .start();
                }}
              />
            </h1>
          </Box>
        </Box>
      </Container>
    </section>
  );
};

export default Hero;
