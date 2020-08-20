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
import { useTranslation } from "react-i18next";

const useStyles = makeStyles(styles);

export default function SectionDownload() {

  const { t } = useTranslation()

  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer className={classes.textCenter} justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2>{t('site.contact')}</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13204.399003220547!2d-118.61828906822572!3d34.169367242932324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c29e964f2fd12b%3A0xdd30c800e237f0aa!2sWoodland%20Hills%2C%20CA%2091365%2C%20USA!5e0!3m2!1sen!2s!4v1597901443132!5m2!1sen!2s"
              width="100%" height="200px" style={{ border: '1px solid #9c27b0', borderRadius: '6px' }}></iframe>
            <h4>
              {t('info.tvaddress')}
            </h4>
          </GridItem>
          <GridItem xs={12} sm={8} md={6}>
            <Button
              color="primary"
              size="lg"
              href="shahbazi@rapidtest.com"
              target="_blank">
              {t('site.emailaddress')}
            </Button>
            <Button
              color="primary"
              size="lg"
              href="https://telegram.me/ganjehozourchannel"
              target="_blank" >
              {t('site.telegram')}
            </Button>
          </GridItem>
        </GridContainer>
        <br />
        <br />
        <GridContainer className={classes.textCenter} justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2>{t('site.application')}</h2>
            <h4>
              {t('info.downloadapp')}
            </h4>
          </GridItem>
          <GridItem xs={12} sm={8} md={6}>
            <Button
              color="rose"
              size="lg"
              href="https://itunes.apple.com/us/app/ganje-hozour-2/id979974590?mt=8"
              target="_blank" >
              {t('site.appstore')}
            </Button>
            <Button
              color="rose"
              size="lg"
              href="https://play.google.com/store/apps/details?id=com.goodbarber.ganjehozour2"
              target="_blank" >
              {t('site.androidmarket')}
            </Button>
          </GridItem>
        </GridContainer>
        <div className={classes.textCenter + " " + classes.sharingArea}>
          <GridContainer justify="center">
            <h3>{t('info.thankyouforsup')}</h3>
          </GridContainer>
          <Button color="twitter">
            <i className={classes.socials + " fas fa-twitter"} />
            {t('site.tweet')}
          </Button>
          <Button color="facebook">
            <i className={classes.socials + " fas fa-facebook-square"} />
            {t('site.share')}
          </Button>
          <Button color="google">
            <i className={classes.socials + " fas fa-google-plus-g"} />
            {t('site.share')}
          </Button>
          <Button color="github">
            <i className={classes.socials + " fas fa-github"} />
            {t('site.star')}
          </Button>
        </div>
      </div>
    </div>
  );
}
