import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import MenuBookIcon from '@material-ui/icons/MenuBook';// core components

import Card from "components/Card/Card.js";

import { Grid } from "@material-ui/core";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  section: {
    padding: "50px 0"
  },
  contain: {
    height: '87%',
    backgroundColor: 'rgb(0, 0, 0, 0.3)'
  },
  marginAuto: {
    marginLeft: "auto !important",
    marginRight: "auto !important"
  },
  lyrics: {
    padding: 0,
    margin: 0,
  },
  paper: {
    margin: '2px',
    padding: '4% 0',
    color: '#89ff87',
    textAlign: 'center',
  },
  rtl: {
    fontFamily: 'Nastaliq',
    [theme.breakpoints.up('sm')]: {
      fontSize: '2.5rem',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.7rem',
    },
  },
  ltr: {
    fontFamily: 'Vazir',
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.2rem',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.7rem',
    },
  },
  caption: {
    position: 'absolute',
    left: '15px',
    bottom: '20px',
    paddingTop: '20px',
    color: '#ffffff',
    textAlign: 'center',
    zIndex: '3',
    display: 'block'
  }
}));

export default function SectionCarousel() {

  const { t, i18n } = useTranslation()

  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 50000
  };

  return (
    <Card carousel>
      <Carousel {...settings}>
        <div style={{ height: '90%' }}>
          <Grid container className={classes.contain} dir={i18n.dir()}>
            {[
              t("verse.msnvd4b521"),
              t("verse.msnvd4b522"),
              t("verse.msnvd4b523"),
              t("verse.msnvd4b524"),
              t("verse.msnvd4b525"),
              t("verse.msnvd4b526"),
              t("verse.msnvd4b527"),
              t("verse.msnvd4b528"),
              t("verse.msnvd4b529"),
              t("verse.msnvd4b5210"),
              t("verse.msnvd4b5211"),
              t("verse.msnvd4b5212")].map((bit, i) => (
                <Grid xs={6} key={'beyt-' + i} item className={classes.lyrics}>
                  <p className={`${classes.paper} ${i18n.dir() === 'rtl' ? classes.rtl : classes.ltr}`}>{bit}</p>
                </Grid>
              ))}
            <a href="http://www.ganjnama.com/View/97/107/8459/%D9%85%D9%88%D9%84%D9%88%DB%8C_Molavi/%D9%87%D8%B1%20%DA%A9%D9%87%20%D8%A7%D9%88%20%D8%A8%DB%8C%20%D8%B3%D8%B1%20%D8%A8%D8%AC%D9%86%D8%A8%D8%AF.html"
              className={classes.caption}>
              <MenuBookIcon className="slick-icons" />
              {t("verse.msnvd4b52info")}
            </a>
          </Grid>
        </div>
        <div style={{ height: '90%' }}>
          <Grid container className={classes.contain} dir={i18n.dir()}>
            {[
              t("verse.msnvd4b521"),
              t("verse.msnvd4b522"),
              t("verse.msnvd4b523"),
              t("verse.msnvd4b524"),
              t("verse.msnvd4b525"),
              t("verse.msnvd4b526"),
              t("verse.msnvd4b527"),
              t("verse.msnvd4b528"),
              t("verse.msnvd4b529"),
              t("verse.msnvd4b5210"),
              t("verse.msnvd4b5211"),
              t("verse.msnvd4b5212")].map((bit, i) => (
                <Grid xs={6} key={'beyt-' + i} item className={classes.lyrics}>
                  <p className={`${classes.paper} ${i18n.dir() === 'rtl' ? classes.rtl : classes.ltr}`}>{bit}</p>
                </Grid>
              ))}
            <a href="http://www.ganjnama.com/View/97/107/8459/%D9%85%D9%88%D9%84%D9%88%DB%8C_Molavi/%D9%87%D8%B1%20%DA%A9%D9%87%20%D8%A7%D9%88%20%D8%A8%DB%8C%20%D8%B3%D8%B1%20%D8%A8%D8%AC%D9%86%D8%A8%D8%AF.html"
              className={classes.caption}>
              <MenuBookIcon className="slick-icons" />
              {t("verse.msnvd4b52info")}
            </a>
          </Grid>
        </div>
        <div style={{ height: '90%' }}>
          <Grid container className={classes.contain} dir={i18n.dir()}>
            {[
              t("verse.msnvd4b521"),
              t("verse.msnvd4b522"),
              t("verse.msnvd4b523"),
              t("verse.msnvd4b524"),
              t("verse.msnvd4b525"),
              t("verse.msnvd4b526"),
              t("verse.msnvd4b527"),
              t("verse.msnvd4b528"),
              t("verse.msnvd4b529"),
              t("verse.msnvd4b5210"),
              t("verse.msnvd4b5211"),
              t("verse.msnvd4b5212")].map((bit, i) => (
                <Grid xs={6} key={'beyt-' + i} item className={classes.lyrics}>
                  <p className={`${classes.paper} ${i18n.dir() === 'rtl' ? classes.rtl : classes.ltr}`}>{bit}</p>
                </Grid>
              ))}
            <a href="http://www.ganjnama.com/View/97/107/8459/%D9%85%D9%88%D9%84%D9%88%DB%8C_Molavi/%D9%87%D8%B1%20%DA%A9%D9%87%20%D8%A7%D9%88%20%D8%A8%DB%8C%20%D8%B3%D8%B1%20%D8%A8%D8%AC%D9%86%D8%A8%D8%AF.html"
              className={classes.caption}>
              <MenuBookIcon className="slick-icons" />
              {t("verse.msnvd4b52info")}
            </a>
          </Grid>
        </div>
      </Carousel>
    </Card>
  );
}
