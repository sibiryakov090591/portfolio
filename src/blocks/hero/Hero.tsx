import React from "react";
import my_photo from "../../images/my_photo.jpg";
import { useStyles } from "./styles";
import { Box, Container } from "@material-ui/core";

const Hero: React.FC = () => {
  const classes = useStyles();
  return (
    <section className={classes.hero}>
      <Container>
        <Box className={classes.heroContainer}>
          <h1 className={classes.presentation}>
            Hi, <br />
            my name is Andrew Sibiriakov, <br />
            i`m frontend developer.
          </h1>
          <div className={classes.photoWrapper}>
            <img className={classes.photo} src={my_photo} alt="my photo" />
          </div>
        </Box>
      </Container>
    </section>
  );
};

export default Hero;
