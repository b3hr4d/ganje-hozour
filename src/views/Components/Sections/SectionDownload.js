/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
// core components
import styles from "assets/jss/material-kit-react/views/componentsSections/downloadStyle.js";

const useStyles = makeStyles(styles);

export default function SectionDownload() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer className={classes.textCenter} justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2>Contact</h2>
            <h4>
              Ganj e Hozour TV and Radio is broadcast from Los Angles California and our address is:
              P.O.BOX 745 Woodland Hills, CA
              91365 USA.
            </h4>
          </GridItem>
          <GridItem xs={12} sm={8} md={6}>
            <Button
              color="primary"
              size="lg"
              href="shahbazi@rapidtest.com"
              target="_blank"
            >
              Email Address
            </Button>
            <Button
              color="primary"
              size="lg"
              href="https://telegram.me/ganjehozourchannel"
              target="_blank"
            >
              Telegram
            </Button>
          </GridItem>
        </GridContainer>
        <br />
        <br />
        <GridContainer className={classes.textCenter} justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2>Application</h2>
            <h4>
              You can Download Ganje Hozour applications for Android & ios from here.
            </h4>
          </GridItem>
          <GridItem xs={12} sm={8} md={6}>
            <Button
              color="rose"
              size="lg"
              href="https://itunes.apple.com/us/app/ganje-hozour-2/id979974590?mt=8"
              target="_blank"
            >
              App Store
            </Button>
            <Button
              color="rose"
              size="lg"
              href="https://play.google.com/store/apps/details?id=com.goodbarber.ganjehozour2"
              target="_blank"
            >
              Android Market
            </Button>
          </GridItem>
        </GridContainer>
        <div className={classes.textCenter + " " + classes.sharingArea}>
          <GridContainer justify="center">
            <h3>Thank you for supporting us!</h3>
          </GridContainer>
          <Button color="twitter">
            <i className={classes.socials + " fab fa-twitter"} /> Tweet
          </Button>
          <Button color="facebook">
            <i className={classes.socials + " fab fa-facebook-square"} /> Share
          </Button>
          <Button color="google">
            <i className={classes.socials + " fab fa-google-plus-g"} />
            Share
          </Button>
          <Button color="github">
            <i className={classes.socials + " fab fa-github"} /> Star
          </Button>
        </div>
      </div>
    </div>
  );
}
